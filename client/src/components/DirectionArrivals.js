import React, { Fragment } from 'react';
import {v4 as uuid} from 'uuid';
import DirectionArrival from './DirectionArrival';

const DirectionArrivals = ({ direction, arrivals }) => {

  let directionArrivals = []
  
  arrivals.forEach(arrival => {
    directionArrivals.push(<DirectionArrival key={uuid()} arrival={arrival}/>)
  })

  return(
    <Fragment>
      <div className='row titleRow'>
        <div className='title'>{direction}</div>
      </div>
      <div className='row'>
        <h4 className='infoLabel'>Towards</h4>
        <h4 className='infoLabel end'>Expected Arrival</h4>
      </div>
      {directionArrivals}
    </Fragment>
  )
}

export default DirectionArrivals;

