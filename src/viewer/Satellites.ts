import SatelliteGroup from '@satellite-viewer/SatelliteGroup';
import {
  Points,
  BufferGeometry,
  Float32BufferAttribute,
  TextureLoader,
  Color,
  ShaderMaterial,
  Object3D,
  OneMinusSrcAlphaFactor,
  SrcAlphaFactor,
  CustomBlending,
} from '../utils/three';
import SceneComponent from './interfaces/SceneComponent';
import SatelliteStore from './SatelliteStore';
import SatCruncherWorker from './workers/SatCruncherWorker?worker';
import logger from '../utils/logger';
import SatelliteOrbitScene from './SatelliteOrbitScene';
import ColorScheme from './color-schemes/ColorScheme';
import DefaultColorScheme from './color-schemes/DefaultColorScheme';
import SelectableSatellite from './interfaces/SelectableSatellite';
import ShaderStore from './ShaderStore';
import GroupColorScheme from './color-schemes/GroupColorScheme';
import { ViewerContext } from './interfaces/ViewerContext';
import { Satellite } from 'ootk-core';

class Satellites implements SceneComponent, SelectableSatellite {
  baseUrl = '';
  worker?: Worker;
  currentColorScheme?: ColorScheme = new DefaultColorScheme();
  numSats: number = 1;
  maxSize = 0;
  satPos: Float32Array = new Float32Array();
  satVel: Float32Array = new Float32Array();
  satAlt: Float32Array = new Float32Array();
  satelliteColors: number[] = [];
  cruncherReady = false;
  scene?: SatelliteOrbitScene;
  particles?: Points;
  geometry?: BufferGeometry;
  satelliteStore?: SatelliteStore;
  shaderStore?: ShaderStore;
  selectedSatelliteIndexes: number[] = [];
  satelliteGroup?: SatelliteGroup;
  hoverSatelliteIdx = -1;

  setColorScheme (colorScheme: ColorScheme) {
    this.currentColorScheme = colorScheme;
  }

  debugRaycastSelection () {
    if (!this.satelliteStore) {
      return;
    }

    if (this.satelliteColors.length === 0 && this.satelliteStore.satData.length > 0) {
      this.satelliteColors = new Array(this.satelliteStore.satData.length * 4);
      this.satelliteColors.fill(1, 0, this.satelliteColors.length);
      if (this.geometry) {
        this.geometry.setAttribute('color', new Float32BufferAttribute(this.satelliteColors as any, 4 ) );
      }
    }

    if (this.selectedSatelliteIndexes.length  > 0 && this.geometry) {
      for (let i = 0; i < this.selectedSatelliteIndexes.length; i++) {
        const idx = this.selectedSatelliteIndexes[i] * 4;
        this.satelliteColors[idx] = 0;
        this.satelliteColors[idx + 1] = 1;
        this.satelliteColors[idx + 2] = 0;
        this.satelliteColors[idx + 3] = 1;
      }

      this.geometry.setAttribute('color', new Float32BufferAttribute(this.satelliteColors as any, 4 ) );
    }
  }

  updateSatellites () {
    console.warn('updateSatellites');
  }

  /**
   * update point colours
   */
  private updateSatellitesMaterial (satCount: number, satellites: Satellite[]) {
    if (this.geometry?.attributes.color && this.currentColorScheme && this.satelliteStore) {
      // Adjust if the satellite count adjusts
      if (this.satelliteColors.length === 0 || (satCount * 4 !== this.satelliteColors.length)) {
        this.satelliteColors = new Array(this.satelliteStore.satData.length * 4);
        this.satelliteColors.fill(1, 0, this.satelliteColors.length);
      }

      for (let i = 0; i < satellites.length; i++) {
        let color = this.currentColorScheme?.getSatelliteColor(satellites[i], this.satelliteGroup)?.color; // || [0, 0, 0];
        if (!color) {
          color = [0, 0, 0];
        }
        const idx = i * 4;
        this.satelliteColors[idx] = color[0];
        this.satelliteColors[idx + 1] = color[1];
        this.satelliteColors[idx + 2] = color[2];
        this.satelliteColors[idx + 3] = color[3];
      }
      this.geometry.setAttribute('color', new Float32BufferAttribute(this.satelliteColors, 4));
    }
  }

  /**
   * Updates the satellites positions in the geometry.
   */
  private updateSatellitesGeometry () {
    if (this.geometry?.attributes.position && this.satelliteStore) {
      this.geometry.setAttribute('position', new Float32BufferAttribute(this.satPos, 3));

      this.geometry.computeBoundingBox();
      this.geometry.computeBoundingSphere();
    }
  }

  onMessage (message: any) {
    if (!this.satelliteStore) {
      return;
    }

    const satData = this.satelliteStore.getSatData();
    if (!satData) {
      return;
    }

    try {
      this.satPos = new Float32Array(message.data.satPos);
      this.satVel = new Float32Array(message.data.satVel);

      this.satelliteStore.setPositionalData(
        this.satVel, this.satPos
      );

      if (!this.cruncherReady) {
        document.querySelector('#load-cover')?.classList.add('hidden');
        this.cruncherReady = true;
      }
    } catch (error) {
      logger.debug('Error in worker response', error);
      logger.debug('worker message', message);
    }
  }

  onSatDataLoaded () {
    if (!this.satelliteStore) {
      return;
    }

    if (this.worker) {
      const satDataString = JSON.stringify(this.satelliteStore.satData);

      logger.debug('Sending data to sat cruncher worker, to perform work');
      this.worker.postMessage(satDataString);
    } else {
      logger.error('worker is not available');
    }
  }

  setSatelliteGroup (satelliteGroup?: SatelliteGroup) {
    this.satelliteGroup = satelliteGroup;
    if (this.satelliteGroup) {
      this.currentColorScheme = new GroupColorScheme();
    } else {
      this.currentColorScheme = new DefaultColorScheme();
    }
  }

  getSatellitegroup (): SatelliteGroup | undefined {
    return this.satelliteGroup;
  }

  setSelectedSatellites (satelliteIndexes: number[]) {
    logger.debug('Updated selected satellites', satelliteIndexes);
    this.selectedSatelliteIndexes = satelliteIndexes;
  }

  setSelectedSatellite (satelliteIdx: number) {
    this.setSelectedSatellites([satelliteIdx]);
  }

  setHoverSatellite (satelliteIdx: number) {
    this.hoverSatelliteIdx = satelliteIdx;
  }

  private initGeometry () {
    if (!this.satelliteStore) {
      throw new Error('satelliteStore is not available');
    }

    if (!this.shaderStore) {
      throw new Error('sahderStore is not available');
    }

    const satDataLen = (this.satelliteStore.satData || []).length;
    const geometry = new BufferGeometry();
    const vertices: Float32Array = new Float32Array();
    const sizes: Float32Array = new Float32Array();
    const colors: number[] = new Array(satDataLen * 4);

    vertices.fill(0, 0, satDataLen * 3);
    colors.fill(0, 0, satDataLen * 3);
    sizes.fill(10, 0, satDataLen);

    geometry.setAttribute('position', new Float32BufferAttribute( vertices, 3 ) );
    geometry.setAttribute('color', new Float32BufferAttribute( colors, 4 ) );
    geometry.setAttribute('size', new Float32BufferAttribute( sizes, 2 ) );

    const texture = new TextureLoader().load(`${this.baseUrl}/images/circle.png`);
    const shader = this.shaderStore.getShader('dot2');

    // const material = new PointsMaterial ({
    //   color: 'grey',
    //   size: 4,
    //   sizeAttenuation: false,
    //   vertexColors: true,
    //   blending: AdditiveBlending,
    //   transparent: false,
    //   depthTest: true
    // });

    const material = new ShaderMaterial({
      uniforms: {
        color: { value: new Color( 0xffffff ) },
        pointTexture: { value: texture }
      },
      clipping: false,
      vertexShader: shader.vertex,
      fragmentShader: shader.fragment,
      blending: CustomBlending,
      blendSrcAlpha: SrcAlphaFactor,
      blendDstAlpha: OneMinusSrcAlphaFactor,
      transparent: true,
      alphaTest: 0.5,
      depthTest: true,
      depthWrite: false,
    });

    geometry.center();

    this.geometry = geometry;
    this.particles = new Points( geometry, material );

    if (this.scene) {
      this.scene.add( this.particles );
    }

    // reduce CPU load by stopping the runner if the tab/window
    // is not visisble
    window.addEventListener('visibilitychange', () => {
      this.worker?.postMessage(JSON.stringify({
        state: {
          running: document.visibilityState === 'visible'
        }
      }));
    });
  }

  getObject3D (): Object3D | undefined {
    return this.particles;
  }

  initSatWorker (config: Record<string, any> = {}) {
    logger.info('Kicking off sat-cruncher-worker');
    this.worker = new SatCruncherWorker();
    this.worker.onmessage = this.onMessage.bind(this);
    this.worker.postMessage(JSON.stringify({
      config
    }));
  }

  async init (scene: SatelliteOrbitScene, context: ViewerContext) {
    this.satelliteStore = context.satelliteStore;
    this.shaderStore = context.shaderStore;
    this.scene = scene;

    const config = context.config || {};
    let satWorkerConfig: Record<string, any> = {};
    if (config.satWorker) {
      satWorkerConfig = { ...config.satWorker, logLevel: config.logLevel };
    }

    this.initSatWorker(satWorkerConfig);

    if (context?.config) {
      this.baseUrl = context.config.baseUrl;
    }

    if (!this.satelliteStore) {
      return;
    }

    this.satelliteStore.addEventListener('satdataloaded', this.onSatDataLoaded.bind(this));
    await this.satelliteStore.loadSatelliteData();

    this.initGeometry();

    if (this.satelliteStore.gotExtraData) {
      this.updateSatellites();
    }
  }

  update (scene: SatelliteOrbitScene): void {
    if (!this.satelliteStore) {
      return;
    }

    if (this.satPos?.length > 0) {

      for (let i = 0; i < this.satPos.length; i++) {
        this.satPos[i] = this.satPos[i] + this.satVel[i] * scene.dt;

        // deal with NaN
        if (isNaN(this.satPos[i])) {
          this.satPos[i] = 0;
        }
      }

      if (this.geometry?.attributes) {

        const satellites = this.satelliteStore.satData;
        const satCount = satellites.length;

        this.updateSatellitesGeometry();
        this.updateSatellitesMaterial(satCount, satellites);
      }
    }

    this.debugRaycastSelection();
  }
}

export default Satellites;