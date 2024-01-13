import { Satellite, Milliseconds } from 'ootk-core';
import logger from '../../utils/logger';
import { pxToRadius } from '@/constants';

let numSegs: number;
const satCache: Satellite[] = [];
let id: number;

function processOrbit (id: number) {
  const pointsOut = new Float32Array((numSegs + 1) * 3);

  if (!satCache?.[id]) {
    return;
  }

  const now = new Date();
  const timeslice = satCache[id].period / numSegs * 1000 * 60 as Milliseconds;

  for (let i = 0; i < numSegs + 1; i++) {
    const time = new Date(now.getTime() + i * timeslice);
    const position = satCache[id].eci(time).position;
    try {
      if (!position) {
        throw new Error('No position');
      } else {
        pointsOut[i * 3] = position.x / pxToRadius;
        pointsOut[i * 3 + 1] = position.z / pxToRadius;
        pointsOut[i * 3 + 2] = -position.y / pxToRadius;
      }
    } catch (_err) {
      pointsOut[i * 3] = 0;
      pointsOut[i * 3 + 1] = 0;
      pointsOut[i * 3 + 2] = 0;
    }
  }

  postMessage({
    pointsOut: pointsOut.buffer,
    satId: id
  });
}

// eslint-disable-next-line func-names, space-before-function-paren
onmessage = function (message) {
  logger.debug('Orbital calculation worker handling message');

  const data = JSON.parse(message.data);
  if (data.config) {
    const config = data.config;
    if (config.logLevel) {
      logger.setLogLevel(config.logLevel);
    }
  } else if (data.isInit) {
    id = Date.now();
    logger.debug('id', id);
    logger.debug('message.data.isInit');
    const satData = data.satData as Satellite[];

    for (let i = 0; i < satData.length; i++) {
      satCache[i] = new Satellite({
        tle1: satData[i].tle1,
        tle2: satData[i].tle2
      });
    }

    numSegs = data.numSegs;
  } else {
    // TODO: figure out how to calculate the orbit points on constant
    // position slices, not timeslices (ugly perigees on HEOs)
    const { satId } = data;
    if (Array.isArray(satId)) {
      const satIds = satId as number[];
      for (const satId of satIds) {
        processOrbit(satId);
      }
    } else {
      processOrbit(satId);
    }
  }
};
