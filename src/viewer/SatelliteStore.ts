import { Satellite, SpaceObjectType } from 'ootk-core';
import axios from 'axios';
import EventManager from '../utils/event-manager';
import logger from '../utils/logger';

const config = {
  baseUrl: import.meta.env.BASE_URL
};

class SatelliteStore {
  tleUrl = `${config.baseUrl}/data/attributed-TLE.json`;
  eventManager: EventManager;
  satData: Satellite[] = [];
  attribution?: {
    name: string;
    url: string;
  };
  updateDate?: Date;
  satelliteVelocities: Float32Array = new Float32Array();
  satellitePositions: Float32Array = new Float32Array();
  gotExtraData = false;
  gotPositionalData = false;
  loaded = false;

  constructor (options: Record<string, any> = {}) {
    this.eventManager = new EventManager();
    if (options.tleUrl) {
      this.tleUrl = options.tleUrl;
    }
  }

  async loadSatelliteData () {
    try {
      const response = await axios.get(this.tleUrl, {
        params: {
          t: Date.now()
        }
      });

      if (response.data) {
        let responseData;
        if (Array.isArray(response.data)) {
          responseData = response.data;
        } else {
          responseData = response.data.data;
          this.attribution = response.data.source;
          this.updateDate = response.data.date;
        }

        for (let i = 0; i < responseData.length; i++) {
          switch (responseData[i].OBJECT_TYPE) {
          case 'PAYLOAD':
            responseData[i].OBJECT_TYPE = SpaceObjectType.PAYLOAD;
            break;
          case 'ROCKET BODY':
            responseData[i].OBJECT_TYPE = SpaceObjectType.ROCKET_BODY;
            break;
          case 'DEBRIS':
            responseData[i].OBJECT_TYPE = SpaceObjectType.DEBRIS;
            break;
          case 'UNKNOWN':
            responseData[i].OBJECT_TYPE = SpaceObjectType.UNKNOWN;
            break;
          default:
            responseData[i].OBJECT_TYPE = SpaceObjectType.UNKNOWN;
            break;
          }
          const sat = new Satellite({
            id: i,
            name: responseData[i].OBJECT_NAME,
            type: responseData[i].OBJECT_TYPE,
            tle1: responseData[i].TLE_LINE1,
            tle2: responseData[i].TLE_LINE2
          });
          this.satData.push(sat);
        }
      }

      this.eventManager.fireEvent('satdataloaded', this.satData);
      this.loaded = true;
    } catch (error) {
      logger.error('error loading TLE data', error);
    }
  }

  getAttribution (): {
    name: string;
    url: string;
  } | undefined {
    return this.attribution;
  }

  getUpdatedDate (): Date | undefined {
    return this.updateDate;
  }

  setSatelliteData (satData: Satellite[], includesExtraData = false) {
    this.satData = satData;
    this.gotExtraData = includesExtraData;

    if (includesExtraData) {
      this.eventManager.fireEvent('satextradataloaded', this.satData);
    }
  }

  setPositionalData (satelliteVelocities: Float32Array, satellitePositions: Float32Array) {
    this.satelliteVelocities = satelliteVelocities;
    this.satellitePositions = satellitePositions;
    this.gotPositionalData = true;
  }

  getSatellitePosition (satId: number): number[] | undefined {
    const offset = satId * 3;
    if (this.satellitePositions && offset < this.satellitePositions.length) {
      return [
        this.satellitePositions[offset],
        this.satellitePositions[offset + 1],
        this.satellitePositions[offset + 3]
      ];
    }
    return undefined;
  }

  getSatData (): Satellite[] {
    return this.satData || [];
  }

  getPositions () {
    return this.satellitePositions;
  }

  getVelocitities () {
    return this.satelliteVelocities;
  }

  size (): number {
    return this.satData.length;
  }

  searchNameRegex (regex: RegExp) {
    const res = [];
    for (let i = 0; i < this.satData.length; i++) {
      if (regex.test(this.satData[i].name)) {
        res.push(i);
      }
    }
    return res;
  }

  search (query: Partial<Satellite>): Satellite[] {
    const keys = Object.keys(query) as (keyof Satellite)[];
    let data = Object.assign([] as Satellite[], this.satData);
    for (const key of keys) {
      data = data.filter((sat: Satellite) => sat[key] === query[key]);
    }
    return data;
  }

  searchName (name: string) {
    const res = [];
    for (let i = 0; i < this.satData.length; i++) {
      if (this.satData[i].name === name) {
        res.push(i);
      }
    }
    return res;
  }

  getIdFromIntlDes (intlDes: any) {
    for (let i = 0; i < this.satData.length; i++) {
      if (this.satData[i].intlDes === intlDes || this.satData[i].intlDes === intlDes) {
        return i;
      }
    }
    return null;
  }

  getSatellite (id: number): Satellite | undefined {
    if (id === -1 || id === undefined || !this.satData) {
      return undefined;
    }

    const satellite = this.satData[id];

    if (!satellite) {
      return undefined;
    }

    const now = new Date();
    const pv = satellite.eci(now);
    satellite.position = pv.position;
    satellite.totalVelocity = Math.sqrt(
      pv.velocity.x ** 2
      + pv.velocity.y ** 2
      + pv.velocity.z ** 2
    );
    return satellite;
  }

  addEventListener (eventName: string, listener: any) {
    this.eventManager.addEventListener(eventName, listener);
  }
}

export default SatelliteStore;
