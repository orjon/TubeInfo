import React, { Fragment } from 'react'
import AgeCounter from './AgeCounter';

const Status = ({ line, age, timeStamp }) => {

  return(
    <Fragment>
      <div className='row titleRow'>
        <div className='status'>{line.status}</div>
      </div>
      
      {line.reason? 
        <div className='row'>
          <div className='data'>
            {line.reason}
          </div>
        </div>:
      ''}

      <div className='row age end'>
        <AgeCounter timeStamp={timeStamp} age={age}/>
      </div>
    </Fragment>
  )
}

export default Status