import { Object3D, SphereGeometry, PointLight, Mesh, Group } from '../utils/three';
import { EpochUTC, Sun as SunObject} from 'ootk-core';
import SceneComponent from './interfaces/SceneComponent';
import SatelliteOrbitScene from './SatelliteOrbitScene';

class Sun implements SceneComponent {
  static deg2RadMult = (Math.PI / 180);

  fastTime = false;
  showGeometry = false;
  lightSouce: Object3D | undefined;
  lightSourceGeometery: Object3D | undefined;
  hour = 0;
  objectGroup?: Group;
  scene?: SatelliteOrbitScene;
  visible = true;

  degreesToReadians (degrees: number) {
    return degrees * Sun.deg2RadMult;
  }

  calculateSunLoc () {
    const eci = SunObject.position(EpochUTC.fromDateTime(new Date()));
    const scaled = eci.normalize().scale(25);

    return scaled;
  }

  init (scene: SatelliteOrbitScene) {
    // Speedily rotate simulated sun
    if (this.fastTime) {
      setInterval(() => {
        this.hour += 0.05;
      }, 100);
    } else {
      this.hour = -1;
    }

    const sunLoc = this.calculateSunLoc();
    const coords = { x: sunLoc.x, y: 0, z: -sunLoc.y};

    this.scene = scene;
    this.objectGroup = new Group();
    this.lightSouce = new PointLight(0xffffff, 2000);
    this.lightSouce.position.set(coords.x, coords.y, coords.z);
    this.objectGroup.add(this.lightSouce);

    if (this.showGeometry) {
      const geometry = new SphereGeometry(0.1, 32, 32);
      this.lightSourceGeometery = new Mesh( geometry );
      this.lightSourceGeometery.position.set(coords.x, coords.y, coords.z);
      this.objectGroup.add( this.lightSourceGeometery );
    }

    scene.add(this.objectGroup);
  }

  update (): void {
    // const sunLoc = this.calculateSunLoc();
    // const coords = { x: sunLoc.x, y: 0, z: sunLoc.z};

    // if (this.lightSouce) {
    //   this.lightSouce.position.set(coords.x, coords.y, coords.z);
    // }

    // if (this.lightSourceGeometery) {
    //   this.lightSourceGeometery.position.set(coords.x, coords.y, coords.z);
    // }
  }

  setVisible (visible: boolean): void {
    if (visible) {
      if (!this.visible) {
        this.scene?.add(this.objectGroup as Group);
      }
    } else {
      if (this.visible) {
        this.scene?.remove(this.objectGroup as Group);
      }
    }
    this.visible = visible;
  }
}

export default Sun;