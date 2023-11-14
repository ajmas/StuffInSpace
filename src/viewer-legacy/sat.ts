/* eslint-disable no-bitwise */
import { mat4, vec4 } from 'gl-matrix';
import axios from 'axios';

import logger from '../utils/logger';
import { getShaderCode } from './shader-loader';
import { defaultColorScheme } from './color-scheme';
import constants from '../config';

// eslint-disable-next-line import/no-unresolved
import SatCruncherWorker from './workers/sat-cruncher-worker?worker';
import EventManager from '../utils/event-manager';
import { Events } from '../constants';

const tleUrl = `${constants.baseUrl}/data/TLE.json`;
const hoverColor = [0.1, 1.0, 0.0, 1.0];
const selectedColor = [0.0, 1.0, 1.0, 1.0];

class SatSet {
  app: any;
  satCruncher: any;
  eventManager: any;
  selectedSat: any;
  gotExtraData: boolean = false;
  cruncherReadyCallback?: () => void;
  currentColorScheme = undefined;
  satData: any;
  satExtraData: any;
  size = 0;
  satPos: Float32Array = new Float32Array();
  satVel: Float32Array = new Float32Array();
  satAlt: Float32Array = new Float32Array();
  hoveringSat = -1;

  numSats = 0;
  shadersReady = false;
  cruncherReady = false;
  lastDrawTime = 0;
  satDataString?: string;
  satPosBuf: any;
  pickColorBuf: any;
  satColorBuf: any;
  pickableBuf: any;
  dotShader?: WebGLShader;

  constructor () {
    try {
      logger.info('Kicking off sat-cruncher-worker');
      this.satCruncher = new SatCruncherWorker();
      this.satCruncher.onmessage = this.onMessage.bind(this);
    } catch (_error) {
      logger.error('unsupported browser');
      // TODO this.app isn't defined at this point
      this.app?.browserUnsupported();
    }

    this.eventManager = new EventManager();
  }

  async onMessage (message: any) {
    const scope = this;
    if (!scope || !scope.satData) {
      return;
    }

    try {
      if (!this.gotExtraData) { // store extra data that comes from crunching
        const start = performance.now();

        if (message.data.extraData) {
          scope.satExtraData = JSON.parse(message.data.extraData);

          if (!scope.satExtraData) {
            return;
          }


          for (let i = 0; i < this.numSats; i++) {
            scope.satData[i].inclination = scope.satExtraData[i].inclination;
            scope.satData[i].eccentricity = scope.satExtraData[i].eccentricity;
            scope.satData[i].raan = scope.satExtraData[i].raan;
            scope.satData[i].argPe = scope.satExtraData[i].argPe;
            scope.satData[i].meanMotion = scope.satExtraData[i].meanMotion;

            scope.satData[i].semiMajorAxis = scope.satExtraData[i].semiMajorAxis;
            scope.satData[i].semiMinorAxis = scope.satExtraData[i].semiMinorAxis;
            scope.satData[i].apogee = scope.satExtraData[i].apogee;
            scope.satData[i].perigee = scope.satExtraData[i].perigee;
            scope.satData[i].period = scope.satExtraData[i].period;
          }

          logger.debug(`sat.js copied extra data in ${performance.now() - start} ms`);
          scope.gotExtraData = true;
          return;
        }
      }

      scope.satPos = new Float32Array(message.data.satPos);
      scope.satVel = new Float32Array(message.data.satVel);
      scope.satAlt = new Float32Array(message.data.satAlt);

      if (!this.cruncherReady) {
        document.querySelector('#load-cover')?.classList.add('hidden');
        scope.setColorScheme(scope.currentColorScheme); // force color recalc
        scope.cruncherReady = true;

        this.eventManager.fireEvent(Events.cruncherReady, { satData: this.satData });
      }
    } catch (error) {
      logger.debug('Error in worker response', error);
      logger.debug('worker message', message);
    }
  }

  addEventListener (eventName: string, listener: any) {
    this.eventManager.addEventListener(eventName, listener);
  }

  async loadSatelliteData () {
    const { gl } = this.app;

    const response = await axios.get(tleUrl, {
      params: {
        t: Date.now()
      }
    });

    try {
      const startTime = new Date().getTime();

      const loaderTextElement = document.querySelector('#loader-text');
      if (loaderTextElement) {
        loaderTextElement.innerHTML = 'Crunching numbers...';
      }

      logger.debug('Satellite data received');
      this.satData = response.data;
      this.size = this.satData.size;

      // if (true) {
      // this.satData = this.satData.filter((entry) => entry.OBJECT_TYPE !== 'TBA');
      // }

      this.satDataString = JSON.stringify(this.satData);

      const postStart = performance.now();
      logger.debug('Sending data to sat cruncher worker, to perform work');
      this.satCruncher.postMessage(this.satDataString);
      const postEnd = performance.now();

      // do some processing on our satData response
      for (let i = 0; i < this.satData.length; i++) {
        if (this.satData[i].INTLDES) {
          let year = this.satData[i].INTLDES.substring(0, 2); // clean up intl des for display
          const prefix = (year > 50) ? '19' : '20';
          year = prefix + year;
          const rest = this.satData[i].INTLDES.substring(2);
          this.satData[i].intlDes = `${year}-${rest}`;
        } else {
          this.satData[i].intlDes = 'unknown';
        }
        this.satData[i].id = i;
      }

      // populate GPU mem buffers, now that we know how many sats there are
      this.satPosBuf = gl.createBuffer();
      this.satPos = new Float32Array(this.satData.length * 3);

      const pickColorData = [];
      this.pickColorBuf = gl.createBuffer();
      for (let i = 0; i < this.satData.length; i++) {
        const byteR = (i + 1) & 0xff;
        const byteG = ((i + 1) & 0xff00) >> 8;
        const byteB = ((i + 1) & 0xff0000) >> 16;
        pickColorData.push(byteR / 255.0);
        pickColorData.push(byteG / 255.0);
        pickColorData.push(byteB / 255.0);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this.pickColorBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pickColorData), gl.STATIC_DRAW);

      this.numSats = this.satData.length;

      this.setColorScheme(defaultColorScheme);

      const end = new Date().getTime();
      logger.debug(`sat.js init: ${end - startTime} ms (incl post: ${postEnd - postStart} ms)`);

      this.shadersReady = true;
    } catch (error) {
      logger.debug('Unable to load TLE data', error);
    }

    this.eventManager.fireEvent(Events.satDataLoaded, { satData: this.satData });

    return this.satData;
  }

  async init (app: any) {
    logger.debug('SatSet init');
    this.app = app;
    const gl = app.gl as WebGL2RenderingContext;

    this.dotShader = gl.createProgram() as WebGLShader;
    if (!this.dotShader) {
      throw new Error('Could not create shader');
    }

    const vertShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
    if (!vertShader) {
      throw new Error('Could not create shader');
    }
    gl.shaderSource(vertShader, getShaderCode('dot-vertex.glsl'));
    gl.compileShader(vertShader);

    const fragShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
    if (!fragShader) {
      throw new Error('Could not create shader');
    }
    gl.shaderSource(fragShader, getShaderCode('dot-fragment.glsl'));
    gl.compileShader(fragShader);

    gl.attachShader(this.dotShader, vertShader);
    gl.attachShader(this.dotShader, fragShader);
    gl.linkProgram(this.dotShader);

    if (this.app.validateProgram) {
      logger.debug('Validating this.dotShader');
      gl.validateProgram(this.dotShader);
    }

    (this.dotShader as any).aPos = gl.getAttribLocation(this.dotShader, 'aPos');
    (this.dotShader as any).aColor = gl.getAttribLocation(this.dotShader, 'aColor');
    (this.dotShader as any).uMvMatrix = gl.getUniformLocation(this.dotShader, 'uMvMatrix');
    (this.dotShader as any).uCamMatrix = gl.getUniformLocation(this.dotShader, 'uCamMatrix');
    (this.dotShader as any).uPMatrix = gl.getUniformLocation(this.dotShader, 'uPMatrix');

    return this.loadSatelliteData();
  }

  setColorScheme (scheme: any) {
    this.currentColorScheme = scheme;
    const buffers = scheme.calculateColorBuffers();
    if (buffers) {
      this.satColorBuf = buffers.colorBuf;
      this.pickableBuf = buffers.pickableBuf;
    }
  }

  draw (pMatrix: any, camMatrix: any) {
    const { gl } = this.app;

    try {
      if (!this.shadersReady || !this.cruncherReady) {
        return;
      }

      const now = Date.now();
      const dt = Math.min((now - this.lastDrawTime) / 1000.0, 1.0);
      for (let i = 0; i < (this.satData.length * 3); i++) {
        this.satPos[i] += this.satVel[i] * dt;
      }

      if (!this.dotShader) {
        return;
      }

      gl.useProgram(this.dotShader);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      gl.uniformMatrix4fv((this.dotShader as any).uMvMatrix, false, mat4.create());
      gl.uniformMatrix4fv((this.dotShader as any).uCamMatrix, false, camMatrix);
      gl.uniformMatrix4fv((this.dotShader as any).uPMatrix, false, pMatrix);

      gl.bindBuffer(gl.ARRAY_BUFFER, this.satPosBuf);
      gl.bufferData(gl.ARRAY_BUFFER, this.satPos, gl.STREAM_DRAW);
      gl.vertexAttribPointer((this.dotShader as any).aPos, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, this.satColorBuf);
      gl.enableVertexAttribArray((this.dotShader as any).aColor);
      gl.vertexAttribPointer((this.dotShader as any).aColor, 4, gl.FLOAT, false, 0, 0);

      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      gl.depthMask(false);

      gl.drawArrays(gl.POINTS, 0, this.satData.length);

      gl.depthMask(true);
      gl.disable(gl.BLEND);

      // now pickbuffer stuff......

      gl.useProgram(gl.pickShaderProgram);
      gl.bindFramebuffer(gl.FRAMEBUFFER, gl.pickFb);
      //   gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.uniformMatrix4fv(gl.pickShaderProgram.uMvMatrix, false, mat4.create());
      gl.uniformMatrix4fv(gl.pickShaderProgram.uCamMatrix, false, camMatrix);
      gl.uniformMatrix4fv(gl.pickShaderProgram.uPMatrix, false, pMatrix);

      gl.bindBuffer(gl.ARRAY_BUFFER, this.satPosBuf);
      gl.enableVertexAttribArray(gl.pickShaderProgram.aPos);
      gl.vertexAttribPointer(gl.pickShaderProgram.aPos, 3, gl.FLOAT, false, 0, 0);

      gl.enableVertexAttribArray(gl.pickShaderProgram.aColor);
      gl.bindBuffer(gl.ARRAY_BUFFER, this.pickColorBuf);
      gl.vertexAttribPointer(gl.pickShaderProgram.aColor, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, this.pickableBuf);
      gl.enableVertexAttribArray(gl.pickShaderProgram.aPickable);
      gl.vertexAttribPointer(gl.pickShaderProgram.aPickable, 1, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.POINTS, 0, this.satData.length); // draw pick

      this.lastDrawTime = now;
    } catch (error) {
      logger.error(error);
    }
  }

  getSat (satelliteId: number) {
    if (!satelliteId || satelliteId === -1 || !this.satData) {
      return undefined;
    }

    const ret = this.satData[satelliteId];
    if (!ret) {
      return null;
    }

    if (this.gotExtraData) {
      ret.altitude = this.satAlt[satelliteId];
      ret.velocity = Math.sqrt(
        this.satVel[satelliteId * 3] * this.satVel[satelliteId * 3]
        + this.satVel[satelliteId * 3 + 1] * this.satVel[satelliteId * 3 + 1]
        + this.satVel[satelliteId * 3 + 2] * this.satVel[satelliteId * 3 + 2]
      );
      ret.position = {
        x: this.satPos[satelliteId * 3],
        y: this.satPos[satelliteId * 3 + 1],
        z: this.satPos[satelliteId * 3 + 2]
      };
    }
    return ret;
  }

  getIdFromIntlDes (intlDes: any) {
    for (let i = 0; i < this.satData.length; i++) {
      if (this.satData[i].INTLDES === intlDes || this.satData[i].intlDes === intlDes) {
        return i;
      }
    }
    return null;
  }

  getScreenCoords (i: number, pMatrix: any, camMatrix: any) {
    const pos = this.getSat(i).position;
    const posVec4 = vec4.fromValues(pos.x, pos.y, pos.z, 1);

    vec4.transformMat4(posVec4, posVec4, camMatrix);
    vec4.transformMat4(posVec4, posVec4, pMatrix);

    const glScreenPos = {
      x: (posVec4[0] / posVec4[3]),
      y: (posVec4[1] / posVec4[3]),
      z: (posVec4[2] / posVec4[3])
    };

    return {
      x: (glScreenPos.x + 1) * 0.5 * window.innerWidth,
      y: (-glScreenPos.y + 1) * 0.5 * window.innerHeight
    };
  }

  searchNameRegex (regex: RegExp) {
    const res = [];
    for (let i = 0; i < this.satData.length; i++) {
      if (regex.test(this.satData[i].OBJECT_NAME)) {
        res.push(i);
      }
    }
    return res;
  }

  search (query: Record<string, any>) {
    const keys = Object.keys(query);
    let data = Object.assign([], this.satData);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      data = data.filter((entry: Record<string, any>) => entry[key] === query[key]);
    }
    return data;
  }

  searchName (name: string) {
    const res = [];
    for (let i = 0; i < this.satData.length; i++) {
      if (this.satData[i].OBJECT_NAME === name) {
        res.push(i);
      }
    }
    return res;
  }

  setHover (satId: number) {
    if (satId === this.hoveringSat) {
      return;
    }

    const { gl } = this.app;

    gl.bindBuffer(gl.ARRAY_BUFFER, this.satColorBuf);
    if (this.hoveringSat !== this.selectedSat) {
      gl.bufferSubData(
        gl.ARRAY_BUFFER,
        this.hoveringSat * 4 * 4,
        new Float32Array((this.currentColorScheme as any).colorizer(this.hoveringSat).color)
      );
    }

    if (satId !== -1) {
      gl.bufferSubData(
        gl.ARRAY_BUFFER,
        satId * 4 * 4,
        new Float32Array(hoverColor)
      );
    }

    this.hoveringSat = satId;
  }

  setSelectedSatellite (satelliteIdx: number) {
    if (satelliteIdx === this.selectedSat) {
      return;
    }

    const { gl } = this.app;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.satColorBuf);

    if (this.selectedSat !== -1) {
      if (this.currentColorScheme) {
        gl.bufferSubData(
          gl.ARRAY_BUFFER,
          this.selectedSat * 4 * 4,
          new Float32Array((this.currentColorScheme as any).colorizer(this.selectedSat).color)
        );
      }
    }

    if (satelliteIdx !== -1) {
      gl.bufferSubData(
        gl.ARRAY_BUFFER,
        satelliteIdx * 4 * 4,
        new Float32Array(selectedColor)
      );
    }

    this.selectedSat = satelliteIdx;
  }

  onCruncherReady (callback: () => void) {
    this.cruncherReadyCallback = callback;
    if (this.cruncherReady) {
      callback();
    }
  }
}

export default new SatSet();