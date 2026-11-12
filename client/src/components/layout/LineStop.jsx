import { Link } from 'react-router-dom'
import { findLineName } from '../../Helpers'
import { lightColors } from './TubeLineHeader'
import '../../scss/LineStop.scss'

const LineStop = ({ station, statuses }) => (
  <div className='row lineStop'>
    <Link className='w50 lineName' to={`/station/${station.url}`}>
      {station.name}
    </Link>
    <div className='column w50 linesBlock'>
      {station.lines.map((line) => (
        <Link key={line} to={`/line/${line}`}>
          <div
            className={`lineCell ${line} ${
              lightColors.includes(line) ? 'lightColor' : ''
            }`}
          >
            {findLineName(statuses, line)}
          </div>
        </Link>
      ))}
    </div>
  </div>
)

export default LineStop
