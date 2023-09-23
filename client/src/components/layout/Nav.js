import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/Nav.scss'
import Clock from 'react-live-clock'

const Nav = () => {
  return (
    <div className='Nav'>
      <Link to='/'>
        <div className='AppTitle'>Tube Info</div>
      </Link>
      <div className='spacer'></div>
      <div className='dateTime'>
        <Clock className='Time' format={'HH:mm:ss'} ticking={true} />
        <Clock className='Date' format={'DD-MMM-YYYY'} ticking={true} />
      </div>
    </div>
  )
}

export default Nav
