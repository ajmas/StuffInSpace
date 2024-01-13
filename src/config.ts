const baseUrl = import.meta.env.BASE_URL;

const config = {
  appName: 'Stuff in Space',
  baseUrl,
  propagateInterval: 1000, // milliseconds
  pushHistory: false,
  logLevel: 'debug',
  satWorker: {
    runOnce: true
  },
  satelliteGroups: [
    {
      id: 'GPSGroup',
      name: 'GPS',
      groupType: 'intlDes',
      data: [
        '90103A',
        '93068A',
        '96041A',
        '97035A',
        '99055A',
        '00025A',
        '00040A',
        '00071A',
        '01004A',
        '03005A',
        '03010A',
        '03058A',
        '04009A',
        '04023A',
        '04045A',
        '05038A',
        '06042A',
        '06052A',
        '07047A',
        '07062A',
        '08012A',
        '09043A',
        '10022A',
        '11036A',
        '12053A',
        '13023A',
        '14008A',
        '14026A',
        '14045A',
        '14068A',
        '15013A'
      ]
    },
    {
      id: 'IridiumGroup', name: 'Iridium Debris', groupType: 'nameRegex', data: /IRIDIUM(?!.*DEB)/
    },
    {
      id: 'Iridium33DebrisGroup', name: 'Iridium 33 Debris', groupType: 'nameRegex', data: /(COSMOS 2251|IRIDIUM 33) DEB/
    },
    {
      id: 'GlonassGroup', name: 'Glonass', groupType: 'nameRegex', data: /GLONASS/
    },
    {
      id: 'GalileoGroup', name: 'Galileo', groupType: 'nameRegex', data: /GALILEO/
    },
    {
      id: 'FunGroup', name: 'Fun', groupType: 'nameRegex', data: /SYLDA/
    },
    {
      id: 'WestfordNeedlesGroup', name: 'Westford Needles', groupType: 'nameRegex', data: /WESTFORD NEEDLES/
    },
    {
      id: 'SpaceXGroup', name: 'Space X', groupType: 'nameRegex', data: /FALCON [19]/
    },
    {
      id: 'DebrisGroup', name: 'Debris', groupType: 'objectType', data: 'DEBRIS'
    },
    {
      id: 'Starlink', name: 'Starlink', groupType: 'nameRegex', data: /STARLINK/
    },
    {
      id: 'Unknown', name: 'Unknown Objects', groupType: 'objectType', data: 'UNKNOWN'
    }
  ]
};

export default config;
