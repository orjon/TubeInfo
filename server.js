const express = require('express')
const initialState = require('./initalValues/initialState')
const moment = require('moment')
const path = require('path')

const { stats } = require('./statistics/serverStatistics')
const routeTubeStatuses = require('./routes/api/tube/statuses')
const routeTubeStations = require('./routes/api/tube/stations')
const routeTubeArrivals = require('./routes/api/tube/arrivals')

const app = express()

stats.serverStart = moment().format()

global.serverState = {
  statuses: [],
  statusesTimeStamp: undefined,
  stations: initialState.stations,
  lineStations: initialState.lineStations,
  stationsTimeStamp: undefined
}

//define routes
app.use('/api/tube/statuses', routeTubeStatuses)
app.use('/api/tube/stations', routeTubeStations)
app.use('/api/tube/arrivals', routeTubeArrivals)

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5001
console.log('Server Start: ', moment(stats.serverStart).format('HH:mm:ss'))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
