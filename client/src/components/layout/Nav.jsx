import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { appName } from '../../config'
import Star from './Star'
import '../../scss/Nav.scss'

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'Europe/London'
})
const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'Europe/London'
})

const Nav = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='Nav'>
      <Link to='/favourites' className='favouritesLink' aria-label='Favourites' title='Favourites'>
        <Star />
      </Link>
      <Link to='/'>
        <div className='AppTitle'>{appName}</div>
      </Link>
      <div className='spacer'></div>
      <div className='dateTime'>
        <div className='Time'>{timeFormat.format(now)}</div>
        <div className='Date'>{dateFormat.format(now).replace(/ /g, '-')}</div>
      </div>
    </div>
  )
}

export default Nav
