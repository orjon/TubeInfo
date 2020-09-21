import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_Card.scss';

const LineStatus = ({ line }) => {

  let disruptionReason = ''
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

          </div>
        </div>

      </Link>
    </div>
  )
}

export default LineStatus;