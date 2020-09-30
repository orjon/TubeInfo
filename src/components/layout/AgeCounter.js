import React, { Fragment } from 'react';
const moment = require('moment');

const AgeCounter = ({timeStamp, age}) => {
  // console.log('the timeStamp: ',timeStamp,' & the age: ',age)
  return(
    <Fragment>
      {(timeStamp && age) ?
      // `updated ${moment(timeStamp).fromNow()} : ${age} [${moment(timeStamp).format('HH:mm:ss')}]`
      `updated ${moment(timeStamp).fromNow()} [${moment(timeStamp).format('HH:mm:ss')}]`
      : 'fetching...'
      }
    </Fragment>
  ) 
}

export default AgeCounter;