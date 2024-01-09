/**
 * Enum representing the various custom events used in the application.
 *
 * The string value MUST be lowercase.
 */
const enum Events {
  satMovementChange = 'satmovementchange',
  selectedSatChange = 'selectedsatchange',
  satHover = 'sathover',
  satDataLoaded = 'satdataloaded',
  closeWindow = 'closewindow',
  cruncherReady = 'cruncherready',
  open = 'open',
  close = 'close',
}

export default Events;
