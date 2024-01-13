import { Satellite } from 'ootk-core';
import SatelliteGroup from '../SatelliteGroup';

class ColorScheme {
  name: string;
  colorizer: (satellite: Satellite, group?: SatelliteGroup) => { color: number[], pickable: boolean };

  constructor (name: string, colorizer: (satellite: Satellite) => { color: number[], pickable: boolean }) {
    this.name = name;
    this.colorizer = colorizer;
  }

  getSatelliteColor (satellite: Satellite, group?: SatelliteGroup): { color: number[], pickable: boolean } {
    return this.colorizer(satellite, group);
  }
}

export default ColorScheme;