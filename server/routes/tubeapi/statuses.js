const express = require('express');
const router = express.Router();
const axios = require('axios');
const { TFL_API_ID, TFL_APP_KEY } = require('../../config');
const moment = require('moment');
const statistics = require('../../statistics/serverStatistics');

TFLAccess = `app_id=${TFL_API_ID}&app_key=${TFL_APP_KEY}`;

//@router GET tubeapi/statuses
//@desc   profile route
//@access Public

router.get('/', async (req, res) => {
  // console timer
  let now = moment();
  console.log('=================================================');
  console.log(moment(now).format('HH:mm:ss'), 'GET request /tubeapi/statuses');
  statistics.logApiStatusesRequest();
  // console.log('current serverState.statusesTimeStamp: ',serverState.statusesTimeStamp)

  // if timeStamp is set, calculate age.
  if (serverState.statusesTimeStamp) {
    let ageInSeconds = Math.floor(
      now.diff(serverState.statusesTimeStamp) / 1000
    );
    // If age is less than 30sec, send existing statuses to client
    if (ageInSeconds < 30) {
      let currentStatuses = {
        statuses: serverState.statuses,
        statusesTimeStamp: serverState.statusesTimeStamp,
      };
      // console.log('Age:',ageInSeconds,'secs. No need to update')
      console.log('Current statuses sent to client');
      return res.send(currentStatuses);
    }
  }

  // otherwise fetch statuses data
  let statuses = [];

  try {
    let response = await axios.get(
      `https://api.tfl.gov.uk/line/mode/tube/status?${TFLAccess}`,
      {
        headers: { Accept: 'application/json' },
      }
    );
    statistics.logTflStatusesRequest();
    // Delayed response
    // let response = await axios.get(`http://slowwly.robertomurray.co.uk/delay/5000/url/https://api.tfl.gov.uk/line/mode/tube/status?${TFLAccess}`, {
    //   headers : {Accept: 'application/json'}
    // })

    // console timer
    now = moment().format();
    // console.log(moment(now).format('HH:mm:ss'),': response from TFL server')

    let lineStatuses = response.data;

    lineStatuses.map((line) => {
      let reason = undefined;
      //Remove text in front of colon.
      if (line.lineStatuses[0].reason) {
        var cropIndex = line.lineStatuses[0].reason.indexOf(':') + 2;
        reason = line.lineStatuses[0].reason.substring(cropIndex);
      }
      return statuses.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: reason,
      });
    });

    serverState.statuses = statuses;
    serverState.statusesTimeStamp = moment().format();

    let newStatuses = {
      statuses: serverState.statuses,
      statusesTimeStamp: serverState.statusesTimeStamp,
    };

    // console.log('Updated serverState.statusesTimeStamp: ',serverState.statusesTimeStamp)
    console.log('Updated statuses sent to client');
    // Send data to client
    res.send(newStatuses);
  } catch (error) {
    console.log('*********** ERROR! **************');
    console.log(error);
    console.log('*********** ERROR! **************');
  }
});

module.exports = router;
