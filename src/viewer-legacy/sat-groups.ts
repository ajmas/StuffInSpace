import { defaultColorScheme, groupColorScheme } from './color-scheme';
import SatGroup from './sat-group';

class SatGroups {
  app: any;
  groups: any;
  selectedGroup: any;
  sats: any[] = [];

  constructor (appContext?: Record<string, any>) {
    this.app = appContext;
    this.groups = {};
    this.selectedGroup = null;
  }

  asArray (): SatGroup[] {
    return Object.values(this.groups);
  }

  selectGroup (group: SatGroup) {
    this.selectedGroup = group;
    if (!group) {
      this.clearSelect();
      return;
    }
    group.updateOrbits();
    this.app.satSet.setColorScheme(groupColorScheme);
  }

  forEach (callback: (satId: number) => void) {
    for (let i = 0; i < this.sats.length; i++) {
      callback(this.sats[i].satId);
    }
  }

  clearSelect () {
    this.selectedGroup = undefined;
    this.app.satSet.setColorScheme(defaultColorScheme);
  }

  getGroupById (groupId: string): SatGroup {
    return this.groups[groupId];
  }

  getSelectedGroup () {
    return this.selectedGroup;
  }

  reloadGroups () {
    const keys = Object.keys(this.groups);
    for (let i = 0; i < keys.length; i++) {
      this.groups[keys[i]].reload();
    }
  }

  init (appContext: any, satelliteGroups: Record<string, any>[]) {
    this.app = appContext;
    const groupConfigs = satelliteGroups || this.app.config.satelliteGroups;
    for (let i = 0; i < groupConfigs.length; i++) {
      this.groups[groupConfigs[i].id] = new SatGroup(
        groupConfigs[i].id,
        groupConfigs[i].name,
        groupConfigs[i].groupType,
        groupConfigs[i].data
      );
    }
  }
}

export default new SatGroups();