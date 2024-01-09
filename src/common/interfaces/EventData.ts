import { SatelliteObject } from '@/common/interfaces/SatelliteObject';
import Events from '../enums/Events';

/**
 * Represents the data structure for various events in the application.
 *
 * Based on the enum Events passed in, the data structure will change.
 * This ensures that the data the listener is expecting is the same as
 * the data the firing code is sending.
 */
type EventData = {
  [Events.satHover]: {
    satellite: SatelliteObject | undefined;
    satId: number;
    satX: number;
    satY: number;
  };
  [Events.satMovementChange]: undefined;
  [Events.selectedSatChange]: SatelliteObject | undefined;
  [Events.satDataLoaded]: SatelliteObject[];
  [Events.closeWindow]: undefined;
  [Events.cruncherReady]: undefined;
  [Events.open]: undefined;
  [Events.close]: undefined;
};

export default EventData;
