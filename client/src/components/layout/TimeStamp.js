import React, { Fragment } from 'react';
const moment = require('moment');

const TimeStamp = ({timeStamp}) => {
  
  return(
    <Fragment>
      <div className='row age end'>
      { timeStamp ?
        `updated ${moment(timeStamp).format('HH:mm:ss')}`
        : 'fetching...'
      }
      </div>
    </Fragment>
  ) 
}

export default TimeStamp;