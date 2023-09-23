import React from 'react'
import { Link } from 'react-router-dom'
import TubeLineHeader from './TubeLineHeader'
import Status from './Status'
import '../../scss/_Card.scss'

const LineStatusCard = ({ line, statusesTimeStamp }) => {
  return (
    <div className='LineStatus'>
      <Link to={`/line/${line.id}`}>
        <div className='card lineStatus'>
          <TubeLineHeader line={line} />
          <Status line={line} timeStamp={statusesTimeStamp} />
        </div>
      </Link>
    </div>
  )
}

export default LineStatusCard
