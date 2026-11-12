import { Link } from 'react-router-dom'
import TubeLineHeader from './TubeLineHeader'
import Status from './Status'
import DirectionArrivals from './DirectionArrivals'
import '../../scss/LineArrivals.scss'

const directions = [
  'Northbound',
  'Eastbound',
  'Southbound',
  'Westbound',
  'Inner Rail',
  'Outer Rail'
]

const LineArrivals = ({ line, stationArrivals, isError, statusesTimeStamp }) => {
  let body
  if (stationArrivals) {
    const arrivals = stationArrivals.filter(
      (arrival) => arrival.lineId === line.id
    )
    const groups = directions
      .map((direction) => ({
        direction,
        arrivals: arrivals
          .filter((arrival) => arrival.direction === direction)
          .slice(0, 5)
      }))
      .filter((group) => group.arrivals.length)

    body = (
      <div className='dataBlock'>
        {groups.map((group) => (
          <DirectionArrivals key={group.direction} {...group} />
        ))}
      </div>
    )
  } else {
    body = (
      <div className='row titleRow'>
        <div className='sub-title'>
          {isError
            ? 'Could not load arrival times'
            : 'Loading arrival times...'}
        </div>
      </div>
    )
  }

  return (
    <div className='LineArrivals'>
      <Link to={`/line/${line.id}`}>
        <div className='LineArrivalHeader'>
          <TubeLineHeader line={line} />
        </div>
        <Status line={line} timeStamp={statusesTimeStamp} />
      </Link>
      {body}
    </div>
  )
}

export default LineArrivals
