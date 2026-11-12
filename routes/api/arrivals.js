const express = require('express')
const router = express.Router()
const { tflGet } = require('../../tfl')
const moment = require('moment')
const statistics = require('../../statistics/serverStatistics')
const { parseArrivals } = require('../../lib/arrivals')

//@router GET api/tube/arrivals/station
//@desc   profile route
//@access Public
router.get('/:stationId', async (req, res) => {
  let stationIndex = serverState.stations.findIndex(
    (station) => station.id === req.params.stationId
  )
  if (stationIndex === -1) {
    return res.status(404).json({ error: 'Unknown station' })
  }
  let station = serverState.stations[stationIndex]
  let now = moment()
  statistics.logAppArrivalsRequest()

  // if timeStamp is set, calculate age.
  if (station.arrivalsTimeStamp) {
    let ageInSeconds = Math.floor(now.diff(station.arrivalsTimeStamp) / 1000)
    // If age is less than 30sec, send existing statuses to client
    if (ageInSeconds < 30) {
      let currentArrivals = {
        stationId: station.id,
        arrivals: station.arrivals,
        arrivalsTimeStamp: station.arrivalsTimeStamp
      }
      return res.send(currentArrivals)
    }
  }

  let arrivals = []

  try {
    const tflArrivals = await tflGet(
      `/stoppoint/${encodeURIComponent(station.id)}/arrivals`
    )
    arrivals = parseArrivals(tflArrivals)

    statistics.logTflArrivalsRequest()
    serverState.stations[stationIndex].arrivals = arrivals
    serverState.stations[stationIndex].arrivalsTimeStamp = moment().format()

    let payloadObject = {
      stationId: station.id,
      arrivals: arrivals,
      arrivalsTimeStamp: moment().format()
    }

    res.send(payloadObject)
  } catch (error) {
    console.error(`GET arrivals/${station.id}:`, error.message)
    res.status(502).json({ error: 'Could not get arrivals from TfL' })
  }
})

module.exports = router
