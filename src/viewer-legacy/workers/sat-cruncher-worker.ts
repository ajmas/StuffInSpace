import {
  jday, twoline2satrec, eciToGeodetic, gstime, sgp4, GeodeticLocation, PositionAndVelocity, EciVec3, Kilometer, KilometerPerSecond
} from 'satellite.js';
import logger from '../../utils/logger';
import constants from '../../config';

const satCache: any[] = [];
const propergateInterval = constants.propergateInterval || 500;
const oneOnce = true;
let satPos: Float32Array;
let satVel: Float32Array;
let satAlt: Float32Array;

function propagate () {
  const now = new Date();
  let j = jday(
    now.getUTCFullYear(),
    now.getUTCMonth() + 1, // Note, this function requires months in range 1-12.
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds()
  );
  j += now.getUTCMilliseconds() * 1.15741e-8; // days per millisecond
  const gmst = gstime(j); //  satellite.gstime_from_jday(j);

  for (let i = 0; i < satCache.length; i++) {
    const m = (j - satCache[i].jdsatepoch) * 1440.0; // 1440 = minutes_per_day
    const pv: PositionAndVelocity = sgp4(satCache[i], m);
    let x: number;
    let y: number;
    let z: number;
    let vx: number;
    let vy: number;
    let vz: number;
    let alt: number;
    try {
      const position = pv.position as EciVec3<Kilometer>;
      x = position.x; // translation of axes from earth-centered inertial
      y = position.y; // to OpenGL is done in shader with projection matrix
      z = position.z; // so we don't have to worry about it
      const velocity = pv.position as EciVec3<KilometerPerSecond>;
      vx = velocity.x;
      vy = velocity.y;
      vz = velocity.z;
      alt = eciToGeodetic(position, gmst).height;
    } catch (e) {
      x = 0;
      y = 0;
      z = 0;
      vx = 0;
      vy = 0;
      vz = 0;
      alt = 0;
    }
    //    logger.debug('x: ' + x + ' y: ' + y + ' z: ' + z);
    satPos[i * 3] = x;
    satPos[i * 3 + 1] = y;
    satPos[i * 3 + 2] = z;

    satVel[i * 3] = vx;
    satVel[i * 3 + 1] = vy;
    satVel[i * 3 + 2] = vz;

    satAlt[i] = alt;
  }

  postMessage(
    {
      satPos: satPos.buffer,
      satVel: satVel.buffer,
      satAlt: satAlt.buffer
    },
    // [satPos.buffer, satVel.buffer, satAlt.buffer]
  );
  satPos = new Float32Array(satCache.length * 3);
  satVel = new Float32Array(satCache.length * 3);
  satAlt = new Float32Array(satCache.length);
  // logger.debug('sat-cruncher propagate: ' + (performance.now() - start) + ' ms');

  if (!oneOnce) {
    setTimeout(
      propagate,
      propergateInterval
    );
  }
}

// eslint-disable-next-line func-names, space-before-function-paren
onmessage = function (message) {
  try {
    logger.debug('Sat cruncher worker handling message');
    const start = Date.now();

    const satData = JSON.parse(message.data);
    const len = satData.length;

    const extraData = [];
    for (let i = 0; i < len; i++) {
      const extra: Record<string, any> = {};
      // perform and store sat init calcs
      const satrec = twoline2satrec(satData[i].TLE_LINE1, satData[i].TLE_LINE2);

      // keplerian elements
      extra.inclination = satrec.inclo; // rads
      extra.eccentricity = satrec.ecco;
      extra.raan = satrec.nodeo; // rads
      extra.argPe = satrec.argpo; // rads
      extra.meanMotion = (satrec.no * 60 * 24) / (2 * Math.PI); // convert rads/minute to rev/day

      // fun other data
      extra.semiMajorAxis = (8681663.653 / extra.meanMotion) ** (2 / 3);
      extra.semiMinorAxis = extra.semiMajorAxis * Math.sqrt(1 - extra.eccentricity ** 2);
      extra.apogee = extra.semiMajorAxis * (1 + extra.eccentricity) - 6371;
      extra.perigee = extra.semiMajorAxis * (1 - extra.eccentricity) - 6371;
      extra.period = 1440.0 / extra.meanMotion;

      extraData.push(extra);
      satCache.push(satrec);
    }

    satPos = new Float32Array(len * 3);
    satVel = new Float32Array(len * 3);
    satAlt = new Float32Array(len);

    const postStart = Date.now();
    postMessage({
      extraData: JSON.stringify(extraData)
    });
    logger.debug(`sat-cruncher init: ${Date.now() - start} ms  (incl post: ${Date.now() - postStart} ms)`);
    propagate();
  } catch (error) {
    logger.error('Error while runnning worker', error);
  }
};