const express = require('express')
const router = express.Router()
const moment = require('moment')
const statistics = require('../../statistics/serverStatistics')
const { buildStations } = require('../../lib/buildStations')

//@router GET api/tube/stations
//@desc   profile route
//@access Public
router.get('/', async (req, res) => {
  let now = moment()
  statistics.logAppStationsRequest()

  // if timeStamp is set, calculate age.
  if (serverState.stationsTimeStamp) {
    //check stationsTimeStamp is from today
    const updatedToday = moment(now).isSame(
      serverState.stationsTimeStamp,
      'day'
    )

    // let ageInSeconds = Math.floor(now.diff(serverState.stationsTimeStamp)/1000)
    // If age is less than 30sec, send existing statuses to client (86400sec = 24hrs)
    if (updatedToday) {
      let currentStations = {
        stations: serverState.stations,
        lineStations: serverState.lineStations,
        stationsTimeStamp: serverState.stationsTimeStamp
      }
      return res.send(currentStations)
    }
  }

  // Line ids come from the latest statuses; before any statuses have been
  // fetched, fall back to the lines in the bundled data.
  const lineIds = serverState.statuses.length
    ? serverState.statuses.map((status) => status.id)
    : serverState.lineStations.map((line) => line.id)

  const { stations, lineStations, failedLines } = await buildStations(lineIds)

  // An incomplete result must not replace the stations already held
  if (failedLines.length) {
    return res.send({
      stations: serverState.stations,
      lineStations: serverState.lineStations,
      stationsTimeStamp: serverState.stationsTimeStamp
    })
  }

  now = moment().format()
  serverState.lineStations = lineStations
  serverState.stations = stations
  serverState.stationsTimeStamp = now

  let payloadObject = {
    stations: serverState.stations,
    lineStations: serverState.lineStations,
    stationsTimeStamp: serverState.stationsTimeStamp
  }

  res.send(payloadObject)
})

module.exports = router
