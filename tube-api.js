const express = require('express')
const initialState = require('./initalValues/initialState')
const moment = require('moment')
const path = require('path')

const routeTubeStatuses = require('./routes/api/statuses')
const routeTubeStations = require('./routes/api/stations')
const routeTubeArrivals = require('./routes/api/arrivals')

const app = express()

global.stats = {
  serverStart: moment().format(),
  appRequests: 0,
  appStationsRequests: 0,
  appStatusesRequests: 0,
  appArrivalsRequests: 0,
  tflRequests: 0,
  tflStationsRequests: 0,
  tflStatusesRequests: 0,
  tflArrivalsRequests: 0
}

global.serverState = {
  statuses: [],
  statusesTimeStamp: undefined,
  stations: initialState.stations,
  lineStations: initialState.lineStations,
  stationsTimeStamp: undefined
}

//define routes
app.use('/tube-api/statuses', routeTubeStatuses)
app.use('/tube-api/stations', routeTubeStations)
app.use('/tube-api/arrivals', routeTubeArrivals)

app.use(express.static(path.join(__dirname, '../tube-client')))

app.get('*', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, '../tube-client', 'index.html'))
})

const PORT = process.env.PORT || 5001
console.log('Server Start: ', moment(stats.serverStart).format('HH:mm:ss'))
app.listen(PORT, () => console.log(`Tube-Info server running on ${PORT}`))
