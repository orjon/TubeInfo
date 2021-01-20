const express = require('express');
const router = express.Router();
const axios = require('axios');
const { TFL_API_ID, TFL_APP_KEY } = require('../../../config');
const moment = require('moment');
const statistics = require('../../../statistics/serverStatistics');

TFLAccess = `app_id=${TFL_API_ID}&app_key=${TFL_APP_KEY}`;

//@router GET api/tube/arrivals/station
//@desc   profile route
//@access Public
router.get('/:stationId', async (req, res) => {
  let stationIndex = serverState.stations.findIndex(
    (station) => station.id === req.params.stationId
  );
  let station = serverState.stations[stationIndex];

  // console timer
  let now = moment();
  console.log('=================================================');
  console.log(
    moment(now).format('HH:mm:ss'),
    'GET request /api/tube/arrivals/' + station.name
  );
  statistics.logApiArrivalsRequest();
  // console.log('current station.arrivalsTimeStamp: ',station.arrivalsTimeStamp)

  // if timeStamp is set, calculate age.
  if (station.arrivalsTimeStamp) {
    let ageInSeconds = Math.floor(now.diff(station.arrivalsTimeStamp) / 1000);
    // If age is less than 30sec, send existing statuses to client
    if (ageInSeconds < 30) {
      let currentArrivals = {
        stationId: station.id,
        arrivals: station.arrivals,
        arrivalsTimeStamp: station.arrivalsTimeStamp,
      };
      // console.log('Age:',ageInSeconds,'secs. No need to update')
      console.log('Current arrivals sent to client');
      return res.send(currentArrivals);
    }
  }

  let arrivals = [];

  try {
    let response = await axios.get(
      `https://api.tfl.gov.uk/stoppoint/${station.id}/arrivals?${TFLAccess}`,
      {
        headers: { Accept: 'application/json' },
      }
    );
    response.data.map((arrival) => {
      //Get direction and platform number from plaformName (eg 'Eastbound - Platform 5')
      let direction = '';
      if (arrival.platformName) {
        var cropIndex = arrival.platformName.indexOf(' - ');
        direction = arrival.platformName.substring(0, cropIndex);
      }

      let platform = '';
      if (arrival.platformName) {
        var cropIndex = arrival.platformName.indexOf('Platform ') + 9;
        platform = arrival.platformName.substring(cropIndex);
      }

      arrivals.push({
        lineName: arrival.lineName,
        lineId: arrival.lineId,
        platform: platform,
        destination: arrival.destination,
        towards: arrival.towards,
        expected: arrival.expectedArrival,
        direction: direction,
      });
    });

    //Sort arrivals by time
    arrivals.sort(function (a, b) {
      return moment(a.expected) - moment(b.expected);
    });

    //Group arrivals by line
    let arrivalsSorted = arrivals.reduce(function (obj, value) {
      let key = value.direction;
      if (obj[key] == null) obj[key] = [];
      obj[key].push(value);
      return obj;
    }, {});

    statistics.logTflArrivalsRequest();

    // console timer
    now = moment().format();
    // console.log(moment(now).format('HH:mm:ss'),': response from TFL server')

    serverState.stations[stationIndex].arrivals = arrivals;
    serverState.stations[stationIndex].arrivalsTimeStamp = moment().format();

    let payloadObject = {
      stationId: station.id,
      arrivals: arrivals,
      arrivalsTimeStamp: moment().format(),
    };

    res.send(payloadObject);
    console.log('Updated arrivals sent to client');
  } catch (error) {
    console.log('*********** ERROR! **************');
    console.log('ERROR: GET api/tube/arrivals/' + station.id);
    console.log(error);
    console.log('*********** ERROR! **************');
  }
});

module.exports = router;
