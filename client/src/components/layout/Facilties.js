import React from 'react'
import '../../scss/Facilities.scss'

const Facilties = ({ facilities }) => {
  facilities = facilities.map((facility) => (
    <div key={facility.key} className='w25 column'>
      <div className='data'>{facility.key}</div>
    </div>
  ))

  return <div className='Facilities dataBlock'>{facilities}</div>
}

export default Facilties
