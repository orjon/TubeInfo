import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import TubeLineHeader from './TubeLineHeader'
import Status from './Status'
import DirectionArrivals from './DirectionArrivals'
import '../../scss/LineArrivals.scss'

const LineArrivals = ({ line, stationArrivals, statusesTimeStamp }) => {
  let arrivals = stationArrivals.filter((arrival) => arrival.lineId === line.id)

  let directionArrivals = [
    { direction: 'Northbound', arrivals: [] },
    { direction: 'Eastbound', arrivals: [] },
    { direction: 'Southbound', arrivals: [] },
    { direction: 'Westbound', arrivals: [] },
    { direction: 'Inner Rail', arrivals: [] },
    { direction: 'Outer Rail', arrivals: [] }
  ]

  let groupedArrivals = []

  directionArrivals.forEach((direction) => {
    direction.arrivals = arrivals.filter(
      (arrival) => arrival.direction === direction.direction
    )
    if (!direction.showAll) {
      direction.arrivals = direction.arrivals.slice(0, 5)
    }
    if (direction.arrivals.length === 0) return
    groupedArrivals.push(
      <DirectionArrivals
        key={uuid()}
        direction={direction.direction}
        arrivals={direction.arrivals}
      />
    )
  })

  let disruptionReason = ''
  if (line.reason) {
    disruptionReason = line.reason
    var cropIndex = disruptionReason.indexOf(':') + 1
    disruptionReason = disruptionReason.substring(cropIndex)
  }

  return (
    <div className='LineArrivals'>
      <Link to={`/line/${line.id}`}>
        <div className='LineArrivalHeader'>
          <TubeLineHeader line={line} className='LineArrivalHeader' />
        </div>
        <Status line={line} timeStamp={statusesTimeStamp} />
      </Link>
      <div className='dataBlock'>{groupedArrivals}</div>
    </div>
  )
}

export default LineArrivals
