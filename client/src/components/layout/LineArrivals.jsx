import { Link } from 'react-router-dom'
import TubeLineHeader from './TubeLineHeader'
import Status from './Status'
import DirectionArrivals from './DirectionArrivals'
import { groupArrivals } from '../../Helpers'
import '../../scss/LineArrivals.scss'

const LineArrivals = ({ line, station, stationArrivals, isError, statusesTimeStamp }) => {
  let body
  if (stationArrivals) {
    const groups = groupArrivals(stationArrivals, line.id)

    body = (
      <div className='dataBlock'>
        {groups.map((group) => (
          <DirectionArrivals
            key={`${group.direction}-${group.platform}`}
            {...group}
            favourite={{ stationId: station.id, lineId: line.id, direction: group.direction }}
            label={`${station.name}, ${line.name}, ${group.direction}`}
          />
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
