import React from 'react'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'
import { findLineName } from '../../Helpers'
import '../../scss/LineStop.scss'
import store from '../../store'

const LineStop = ({ station }) => {
  const state = store.getState()
  let lines = []

  lines = station.lines.map((line) => {
    // Check for light color to format text color if needed
    let lightColors = ['hammersmith-city', 'waterloo-city', 'circle']
    let lightColor = ''
    if (lightColors.includes(line)) lightColor = 'lightColor'

    let lineName = findLineName(state.tube.statuses, line)

    return (
      <Link key={uuid()} to={`/line/${line}`}>
        <div className={`lineCell ${line} ${lightColor}`}>{lineName}</div>
      </Link>
    )
  })

  return (
    <div className='row lineStop'>
      <Link className='w50 lineName' to={`/station/${station.url}`}>
        {station.name}
      </Link>
      <div className='column w50 linesBlock'>{lines}</div>
    </div>
  )
}

export default LineStop
