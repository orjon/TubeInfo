const express = require('express')
const router = express.Router()
const { tflGet } = require('../../tfl')
const moment = require('moment')
const statistics = require('../../statistics/serverStatistics')
const { parseArrivals } = require('../../lib/arrivals')

//@router GET api/arrivals/:stationId
//@desc   arrivals at a station, soonest first
//@access Public
router.get('/:stationId', async (req, res) => {
  const station = serverState.stations.find((s) => s.id === req.params.stationId)
  if (!station) return res.status(404).json({ error: 'Unknown station' })
  statistics.logAppArrivalsRequest()

  // Arrivals fetched in the last 30 seconds are sent again as they are
  const cached = serverState.arrivals[station.id]
  if (cached && moment().diff(cached.arrivalsTimeStamp, 'seconds') < 30) {
    return res.send({ stationId: station.id, ...cached })
  }

  try {
    // A merged station (e.g. Paddington) is several TfL stops
    const stopIds = station.ids || [station.id]
    const responses = await Promise.all(
      stopIds.map((id) => tflGet(`/stoppoint/${encodeURIComponent(id)}/arrivals`))
    )
    stopIds.forEach(() => statistics.logTflArrivalsRequest())

    const result = {
      arrivals: parseArrivals(responses.flat()),
      arrivalsTimeStamp: moment().format()
    }
    serverState.arrivals[station.id] = result
    res.send({ stationId: station.id, ...result })
  } catch (error) {
    console.error(`GET arrivals/${station.id}:`, error.message)
    res.status(502).json({ error: 'Could not get arrivals from TfL' })
  }
})

module.exports = router
