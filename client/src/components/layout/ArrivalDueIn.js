import React, { useState, useEffect } from 'react';
import moment from 'moment';

const ArrivalDueIn = ({expectedArrival}) => {

  const expectedIn = (expectedTime) => {
    let minsToArrival = Math.floor(moment(expectedTime).diff(moment(),'s')/60)
    if (minsToArrival > 1) return `${minsToArrival} mins`
    else if (minsToArrival === 1) return `${minsToArrival} min`
    else if (minsToArrival < 1 && minsToArrival > 0) return 'due'
    else return 'overdue'
  }

  const [timeToGo, setTimeToGo] = useState(expectedIn(expectedArrival));
  // let arrivalTime = moment(expectedArrival).format('hh:mm:ss')

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeToGo(expectedIn(expectedArrival))
    }, 1000);
    return () => clearTimeout(timer);
  }, [expectedArrival])

  return(
    <div className='end'>
      {timeToGo}
    </div>
  )
}

export default ArrivalDueIn;
