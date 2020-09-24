import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_Card.scss';
const moment = require('moment');

const LineStatus = ({ line }) => {
  // console.log('Component: LineStatus ('+line.name+')')
  let disruptionReason = ''
  let statusAgeText='...fetching'

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
    statusAgeText='updated '+line.statusAge+'s ago'
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
                  {statusAgeText} [{moment(line.timeStamp).format('HH:mm:ss')}]
              </div>

          </div>
        </div>

      </Link>
    </div>
  )
}

export default LineStatus;