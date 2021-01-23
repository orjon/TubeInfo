const express = require('express');
const initialState = require('./initalValues/initialState');
const moment = require('moment');
const path = require('path');

const routeTubeStatuses = require('./routes/tubeapi/statuses');
const routeTubeStations = require('./routes/tubeapi/stations');
const routeTubeArrivals = require('./routes/tubeapi/arrivals');

const app = express();

global.stats = {
  serverStart: moment().format(),
  apiRequests: 0,
  tflRequests: 0,
  apiStationsRequests: 0,
  tflStationsRequests: 0,
  apiStatusesRequests: 0,
  tflStatusesRequests: 0,
  apiArrivalsRequests: 0,
  tflArrivalsRequests: 0,
};

global.serverState = {
  statuses: [],
  statusesTimeStamp: undefined,
  stations: initialState.stations,
  lineStations: initialState.lineStations,
  stationsTimeStamp: undefined,
};

//define routes
app.use('/tubeapi/statuses', routeTubeStatuses);
app.use('/tubeapi/stations', routeTubeStations);
app.use('/tubeapi/arrivals', routeTubeArrivals);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('tubeinfo'));

  app.get('*', (req, res) => {
    res.sendFile('./index.html');
  });
}

const PORT = process.env.PORT || 5000;
console.log('Server Start: ', moment(stats.serverStart).format('HH:mm:ss'));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
