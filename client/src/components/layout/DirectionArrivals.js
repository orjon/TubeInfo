import React, { Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import DirectionArrival from './DirectionArrival'

const DirectionArrivals = ({ direction, arrivals }) => {
  let directionArrivals = []

  arrivals.forEach((arrival) => {
    directionArrivals.push(<DirectionArrival key={uuid()} arrival={arrival} />)
  })

  return (
    <Fragment>
      <div className='row titleRow'>
        <div className='sub-title'>{direction}</div>
        <div className='sub-title end'>Platform {arrivals[0].platform}</div>
      </div>
      <div className='row infoRow'>
        <h4 className='infoLabel'>Towards</h4>
        <h4 className='infoLabel end'>expected</h4>
      </div>
      {directionArrivals}
    </Fragment>
  )
}

export default DirectionArrivals
