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
app.use('/api/statuses', routeTubeStatuses)
app.use('/api/stations', routeTubeStations)
app.use('/api/arrivals', routeTubeArrivals)

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   //set static folder
//   app.use(express.static('tube-info/client'))

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'tube-info', 'client', 'index.html'))
//   })
// }

// deployed
// app.use(express.static(path.join(__dirname, '../tube-info', 'client')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../tube-info', 'client', 'index.html'))
// })

const PORT = process.env.PORT || 5001
console.log('Server Start: ', moment(stats.serverStart).format('HH:mm:ss'))
app.listen(PORT, () => console.log(`Tube-Info server running on ${PORT}`))
