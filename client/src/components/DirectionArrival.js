import React from 'react';
import ArrivalDueIn from './layout/ArrivalDueIn';

const DirectionArrival = ({arrival}) => { 

  return(
    <div className='row data'>
      <div>{arrival.towards}</div>
      <ArrivalDueIn expectedArrival={arrival.expected}/>
    </div>)
}

export default DirectionArrival;