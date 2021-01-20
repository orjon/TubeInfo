const express = require('express');
const router = express.Router();
const axios = require('axios');
const { TFL_API_ID, TFL_APP_KEY } = require('../../config');
const moment = require('moment');
const statistics = require('../../statistics/serverStatistics');

TFLAccess = `app_id=${TFL_API_ID}&app_key=${TFL_APP_KEY}`;

function kebabCase(inputString) {
  return inputString.toLowerCase().replace(/ /g, '-').replace(/'/g, '');
}

function trimStationName(stationName) {
  let trimmedStationName = stationName.replace('Underground Station', '');
  let cropIndex1 = trimmedStationName.indexOf('(') + 2;
  if (cropIndex1 !== 0) {
    trimmedStationName = trimmedStationName.slice(0, cropIndex1 - 2);
  }
  return trimmedStationName;
}

function filterStationData(station, lineId) {
  let validFacilities = [];
  let rejectedValues = ['no', '0'];
  let renamedFacilityKeys = ['TaxiRankOutsideStation'];
  let validContacts = [];
  let facility = [
    { key: 'Ticket Halls', value: undefined },
    { key: 'Toilets', value: undefined },
    { key: 'Lifts', value: undefined },
    { key: 'Escalators', value: undefined },
    { key: 'WiFi', value: undefined },
    { key: 'Help Points', value: undefined },
    { key: 'Payphones', value: undefined },
    { key: 'Boarding Ramp', value: undefined },
    { key: 'Cash Machines', value: undefined },
    { key: 'Euro Cash Machines', value: undefined },
    { key: 'Waiting Room', value: undefined },
    { key: 'TaxiRankOutsideStation', value: undefined },
    { key: 'Car park', value: undefined },
    { key: 'Left Luggage', value: undefined },
    { key: 'Photo Booths', value: undefined },
    { key: 'Amazon Lockers', value: undefined },
    { key: 'ASDA Click and Collect', value: undefined },
  ];
  let contact = [
    { key: 'Address', value: undefined },
    { key: 'PhoneNo', value: undefined },
    { key: 'Zone', value: undefined },
  ];

  contact.forEach((property) => {
    let propertyObject = station.additionalProperties.find(
      (x) => x.key === property.key
    );
    if (propertyObject) {
      if (!rejectedValues.includes(propertyObject.value)) {
        property.value = propertyObject.value;
        validContacts.push(property);
        return;
      }
    }
  });

  facility.forEach((facility) => {
    let facilityObject = station.additionalProperties.find(
      (x) => x.key === facility.key
    );
    if (facilityObject && renamedFacilityKeys.includes(facility.key)) {
      facility.key = 'Taxi Rank';
    }
    if (facilityObject && !rejectedValues.includes(facilityObject.value)) {
      facility.value = facilityObject.value;
      validFacilities.push(facility);
      return;
    }
  });

  return {
    key: station.id,
    id: station.id,
    url: kebabCase(trimStationName(station.commonName)),
    name: trimStationName(station.commonName),
    lines: [lineId],
    lat: station.lat,
    lng: station.lon,
    arrivals: undefined,
    arrivalsTimeStamp: undefined,
    contact: [...validContacts],
    facilities: validFacilities,
  };
}

//@router GET tubeapi/stations
//@desc   profile route
//@access Public
router.get('/', async (req, res) => {
  // console timer
  let now = moment();
  console.log('=================================================');
  console.log(moment(now).format('HH:mm:ss'), 'GET request /tubeapi/stations/');
  statistics.logApiStationsRequest();
  // console.log('current serverState.stationsTimeStamp: ',serverState.stationsTimeStamp)

  // if timeStamp is set, calculate age.
  if (serverState.stationsTimeStamp) {
    //check stationsTimeStamp is from today
    const updatedToday = moment(now).isSame(
      serverState.stationsTimeStamp,
      'day'
    );
    // console.log('updatedToday:',updatedToday)

    // let ageInSeconds = Math.floor(now.diff(serverState.stationsTimeStamp)/1000)
    // If age is less than 30sec, send existing statuses to client (86400sec = 24hrs)
    if (updatedToday) {
      let currentStations = {
        stations: serverState.stations,
        lineStations: serverState.lineStations,
        stationsTimeStamp: serverState.stationsTimeStamp,
      };
      // console.log('Age:',ageInSeconds,'secs. Update after 86400')
      console.log('Current stations sent to client');
      return res.send(currentStations);
    }
  }

  let statuses = serverState.statuses;

  let lineStations = [];
  let allStations = [];
  //Loop through all lines
  for (let i = 0; i < statuses.length; i++) {
    let lineId = statuses[i].id;
    // console.log('GET request for',lineId)
    let thisLineStations = [];
    // console.log('allStations:',allStations.length)

    try {
      let response = await axios.get(
        `https://api.tfl.gov.uk/line/${lineId}/stoppoints?tflOperatedNationalRailStationsOnly=false&${TFLAccess}`,
        {
          headers: { Accept: 'application/json' },
        }
      );

      statistics.logTflStationsRequest();

      let stations = response.data;

      // console.log(stations)

      stations.map((station) => {
        return thisLineStations.push(filterStationData(station, lineId));
      });
      // console.log('thisLineStations:',thisLineStations.length)

      // Filter out only stations not alreasy in allStations.
      let newStations = thisLineStations.filter(
        (newStation) =>
          !allStations.find((station) => newStation.id === station.id)
      );
      let unchangedStations = allStations.filter(
        (station) =>
          !thisLineStations.find((lineStation) => station.id === lineStation.id)
      );
      let updateStations = allStations.filter((station) =>
        thisLineStations.find((lineStation) => station.id === lineStation.id)
      );
      let updatedStations = updateStations.map((station) => {
        station.lines = [...new Set([...station.lines, lineId].sort())];
        return station;
      });

      allStations = [...newStations, ...updatedStations, ...unchangedStations];
      lineStations = [
        ...lineStations,
        { id: lineId, stations: thisLineStations },
      ];
    } catch (error) {
      console.log('*********** ERROR! **************');
      console.log('GET tubeapi/stations error at:', lineId);
      console.log(error);
      console.log('*********** ERROR! **************');
    }
  }

  // console timer
  now = moment().format();
  // console.log(moment(now).format('HH:mm:ss'),': response from TFL server')

  serverState.lineStations = lineStations;
  serverState.stations = allStations;
  serverState.stationsTimeStamp = now;

  let payloadObject = {
    stations: serverState.stations,
    lineStations: serverState.lineStations,
    stationsTimeStamp: serverState.stationsTimeStamp,
  };

  // console.log('Updated serverState.stationsTimeStamp: ',serverState.stationsTimeStamp)
  console.log('Updated stations sent to client');
  res.send(payloadObject);
});

module.exports = router;
