import React, { Fragment } from 'react'
import TimeStamp from './TimeStamp';

const Status = ({ line, timeStamp }) => {

  return(
    <Fragment>
      <div className='row titleRow status'>
        {line.status}
      </div>
      
      {line.reason? 
        <div className='row'>
          <div className='data'>
            {line.reason}
          </div>
        </div>:
      ''}

      <TimeStamp timeStamp={timeStamp}/>
    </Fragment>
  )
}

export default Status