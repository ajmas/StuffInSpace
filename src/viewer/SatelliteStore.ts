import axios from 'axios';
import EventManager from '../utils/event-manager';
import logger from '../utils/logger';
import { SatelliteObject } from '../common/interfaces/SatelliteObject';
import Events from '@/common/enums/Events';

const config = {
  baseUrl: import.meta.env.BASE_URL
};

class SatelliteStore {
  tleUrl = `${config.baseUrl}/data/attributed-TLE.json`;
  eventManager: EventManager;
  satData: SatelliteObject[] = [];
  attribution?: Record<string, any>;
  updateDate?: Date;
  satelliteVelocities: Float32Array = new Float32Array();
  satellitePositions: Float32Array = new Float32Array();
  satelliteAltitudes: Float32Array = new Float32Array();
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
        if (Array.isArray(response.data)) {
          this.satData = response.data;
        } else {
          this.satData = response.data.data;
          this.attribution = response.data.source;
          this.updateDate = response.data.date;
        }

        for (let i = 0; i < this.satData.length; i++) {
          if (this.satData[i].INTLDES) {
            const yearVal = Number(this.satData[i].INTLDES.substring(0, 2)); // convert year to number
            const prefix = (yearVal > 50) ? '19' : '20';
            const yearStr = prefix + yearVal.toString();
            const rest = this.satData[i].INTLDES.substring(2);
            this.satData[i].intlDes = `${yearStr}-${rest}`;
          } else {
            this.satData[i].intlDes = 'unknown';
          }
          this.satData[i].id = i;
        }
      }

      this.eventManager.fireEvent(Events.satDataLoaded, this.satData);
      this.loaded = true;
    } catch (error) {
      logger.error('error loading TLE data', error);
    }
  }

  getAttribution (): Record<string, any> | undefined {
    return this.attribution;
  }

  getUpdatedDate (): Date | undefined {
    return this.updateDate;
  }

  setSatelliteData (satData: SatelliteObject[], includesExtraData = false) {
    this.satData = satData;
    this.gotExtraData = includesExtraData;

    if (includesExtraData) {
      this.eventManager.fireEvent(Events.satDataLoaded, this.satData);
    }
  }

  setPositionalData (satelliteVelocities: Float32Array, satellitePositions: Float32Array, satelliteAltitudes: Float32Array) {
    this.satelliteVelocities = satelliteVelocities;
    this.satellitePositions = satellitePositions;
    this.satelliteAltitudes = satelliteAltitudes;
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

  getSatData (): SatelliteObject[] {
    return this.satData || [];
  }

  getPositions () {
    return this.satellitePositions;
  }

  getAltitudes () {
    return this.satelliteAltitudes;
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
      if (regex.test(this.satData[i].OBJECT_NAME)) {
        res.push(i);
      }
    }
    return res;
  }

  search (query: Partial<SatelliteObject>): SatelliteObject[] {
    const keys = Object.keys(query) as (keyof SatelliteObject)[];
    let data = Object.assign([] as SatelliteObject[], this.satData);
    for (const key of keys) {
      data = data.filter((sat: SatelliteObject) => sat[key] === query[key]);
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

  getIdFromIntlDes (intlDes: any) {
    for (let i = 0; i < this.satData.length; i++) {
      if (this.satData[i].INTLDES === intlDes || this.satData[i].intlDes === intlDes) {
        return i;
      }
    }
    return null;
  }

  getSatellite (satelliteId: number): SatelliteObject | undefined {
    if (satelliteId === -1 || satelliteId === undefined || !this.satData) {
      return undefined;
    }

    const satellite = new Proxy(this.satData[satelliteId], {});

    if (!satellite) {
      return undefined;
    }

    if (this.gotPositionalData) {
      satellite.altitude = this.satelliteAltitudes[satelliteId];
      satellite.velocity = Math.sqrt(
        this.satelliteVelocities[satelliteId * 3] * this.satelliteVelocities[satelliteId * 3]
        + this.satelliteVelocities[satelliteId * 3 + 1] * this.satelliteVelocities[satelliteId * 3 + 1]
        + this.satelliteVelocities[satelliteId * 3 + 2] * this.satelliteVelocities[satelliteId * 3 + 2]
      );
      satellite.position = {
        x: this.satellitePositions[satelliteId * 3],
        y: this.satellitePositions[satelliteId * 3 + 1],
        z: this.satellitePositions[satelliteId * 3 + 2]
      };
    }

    return satellite;
  }

  addEventListener (eventName: string, listener: any) {
    this.eventManager.addEventListener(eventName, listener);
  }
}

export default SatelliteStore;
