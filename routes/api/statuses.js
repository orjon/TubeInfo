const express = require('express')
const router = express.Router()
const { tflGet } = require('../../tfl')
const moment = require('moment')
const statistics = require('../../statistics/serverStatistics')

//@router GET api/tube/statuses
//@desc   profile route
//@access Public

router.get('/', async (req, res) => {
  let now = moment()
  statistics.logAppStatusesRequest()

  // if timeStamp is set, calculate age.
  if (serverState.statusesTimeStamp) {
    let ageInSeconds = Math.floor(
      now.diff(serverState.statusesTimeStamp) / 1000
    )
    // If age is less than 30sec, send existing statuses to client
    if (ageInSeconds < 30) {
      let currentStatuses = {
        statuses: serverState.statuses,
        statusesTimeStamp: serverState.statusesTimeStamp
      }
      return res.send(currentStatuses)
    }
  }

  // otherwise fetch statuses data
  let statuses = []

  try {
    let lineStatuses = await tflGet('/line/mode/tube/status')
    statistics.logTflStatusesRequest()
    lineStatuses.map((line) => {
      let reason = undefined
      //Remove text in front of colon.
      if (line.lineStatuses[0].reason) {
        var cropIndex = line.lineStatuses[0].reason.indexOf(':') + 2
        reason = line.lineStatuses[0].reason.substring(cropIndex)
      }
      return statuses.push({
        key: line.id,
        id: line.id,
        name: line.name,
        status: line.lineStatuses[0].statusSeverityDescription,
        reason: reason
      })
    })

    serverState.statuses = statuses
    serverState.statusesTimeStamp = moment().format()

    let newStatuses = {
      statuses: serverState.statuses,
      statusesTimeStamp: serverState.statusesTimeStamp
    }

    res.send(newStatuses)
  } catch (error) {
    console.error('GET statuses:', error.message)
    // Serve the last good statuses if there are any, otherwise report the failure
    if (serverState.statuses.length) {
      return res.send({
        statuses: serverState.statuses,
        statusesTimeStamp: serverState.statusesTimeStamp
      })
    }
    res.status(502).json({ error: 'Could not get line statuses from TfL' })
  }
})

module.exports = router
