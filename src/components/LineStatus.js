import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_Card.scss';
const moment = require('moment');

const LineStatus = ({ line }) => {

  let disruptionReason = ''
  let statusAge='fetching statuses'
  console.log(line)

  if (line.reason) {
    disruptionReason = line.reason
    var cropIndex = disruptionReason.indexOf(':') + 1
    disruptionReason = disruptionReason.substring(cropIndex)
  }

  let lightColors = ['hammersmith-city','waterloo-city', 'circle']
  let lightColor = ''

  if (lightColors.includes(line.id)){
    lightColor = 'lightColor'
  }

  // Calcuates age of status update
  if (line.timeStamp) {
    statusAge=moment(line.timeStamp).fromNow()
    console.log(statusAge)
  }


  return(
    <div className='LineStatus'>
      <Link to={`/line/${line.id}`}>
        <div className='Card'>

          <div className={`row lineColor ${line.id}`}>
              <div className={`${lightColor}`}>{line.name}</div>
          </div>

          <div className='cardBody'>
            <div className='row titleRow'>
              <div className='status'>{line.status}</div>
            </div>

            {disruptionReason? 
              <div className='row'>
                <div className='data'>
                  {disruptionReason}
                </div>
              </div>:
              ''}

              <div className='row age end'>
                  {statusAge}
              </div>

          </div>
        </div>

      </Link>
    </div>
  )
}

export default LineStatus;