import { Satellite } from 'ootk-core';
import logger from '../../utils/logger';
import { pxToRadius } from '@/constants';

const satCache: Satellite[] = [];
/**
 * The interval in milliseconds between propagations
 * @override config.propagateIntervalMs
 */
let propagateInterval = 16;
let runOnce = false;
let config: Record<string, any> = {};
/** Satellite Position in Three World Space NOT ECI Coordinates */
let satPos: Float32Array;
/** Velocity in Three World Space NOT ECI Coordinates */
let satVel: Float32Array;
let running = true;
let timer: number;

function propagate () {
  const now = new Date();

  for (let i = 0; i < satCache.length; i++) {
    const pv = satCache[i].eci(now);

    let x; let y; let z; let vx; let vy; let vz;

    // If propagate fails, set position to 0,0,0
    try {
      // switch axis from ECI to Three World Space
      x = pv.position.x;
      y = pv.position.z;
      z = -pv.position.y;
      vx = pv.velocity.x;
      vy = pv.velocity.y;
      vz = pv.velocity.z;
    } catch (e) {
      x = 0;
      y = 0;
      z = 0;
      vx = 0;
      vy = 0;
      vz = 0;
    }

    satPos[i * 3] = x / pxToRadius;
    satPos[i * 3 + 1] = y / pxToRadius;
    satPos[i * 3 + 2] = z / pxToRadius;

    satVel[i * 3] = vx / pxToRadius;
    satVel[i * 3 + 1] = vy / pxToRadius;
    satVel[i * 3 + 2] = vz / pxToRadius;
  }

  postMessage(
    {
      satPos: satPos.buffer,
      satVel: satVel.buffer,
    }
    // [satPos.buffer, satVel.buffer, satAlt.buffer]
  );
  satPos = new Float32Array(satCache.length * 3);
  satVel = new Float32Array(satCache.length * 3);
  // logger.debug('sat-cruncher propagate: ' + (performance.now() - start) + ' ms');

  if (!runOnce && running) {
    timer = setTimeout(
      propagate,
      propagateInterval
    );
  }
}

onmessage = function (message) {
  try {
    logger.debug('Sat cruncher worker handling message');
    const start = Date.now();

    const satData = JSON.parse(message.data);

    if (!Array.isArray(satData)) {
      if (satData.config) {
        config = satData.config;
        if (config.runOnce) {
          runOnce = config.runOnce;
        }
        if (config.logLevel) {
          logger.setLogLevel(config.logLevel);
        }
        if (config.propagateIntervalMs) {
          propagateInterval = config.propagateIntervalMs;
          logger.debug(`Adjusting propagateIntervalMs to be ${propagateInterval} ms`);
        }
      }
      if (satData.state) {
        if (typeof satData.state.running === 'boolean') {
          running = satData.state.running;
          logger.debug(`Worker set to running === ${running}`);
          if (running) {
            propagate();
          } else {
            this.clearTimeout(timer);
          }
        }
      }
      return;
    }

    const len = satData.length;

    for (let i = 0; i < len; i++) {
      // perform and store sat init calcs
      const satellite = new Satellite({
        tle1: satData[i].tle1,
        tle2: satData[i].tle2,
      });
      satCache.push(satellite);
    }

    satPos = new Float32Array(len * 3);
    satVel = new Float32Array(len * 3);

    const postStart = Date.now();
    logger.debug(`sat-cruncher init: ${Date.now() - start} ms  (incl post: ${Date.now() - postStart} ms)`);
    propagate();
  } catch (error) {
    logger.error('Error while runnning worker', error);
  }
};
