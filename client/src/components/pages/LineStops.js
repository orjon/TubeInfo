import React, { useEffect } from 'react'
import LineStop from '../layout/LineStop'
import { connect } from 'react-redux'
import {
  getStatuses,
  setStatusesExpired,
  getStations
} from '../../actions/tube'
import TubeLineColourHeader from '../layout/TubeLineHeader'
import Status from '../layout/Status'
import { findLine } from '../../Helpers'
import { maxStatusesAge } from '../../globalSettings'
import TimeStamp from '../layout/TimeStamp'
import '../../scss/Section.scss'
import '../../scss/LineStops.scss'

const LineStops = ({
  getStatuses,
  setStatusesExpired,
  getStations,
  tube: {
    statuses,
    statusesExpired,
    statusesTimeStamp,
    stations,
    lineStations,
    stationsExpired,
    stationsTimeStamp
  },
  ...props
}) => {
  const lineId = props.match.params.id
  let lineIndex = lineStations.findIndex((line) => line.id === lineId)
  let line = undefined
  let lineStops = lineStations[lineIndex].stations

  // Statuses update interval
  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setInterval(() => {
      setStatusesExpired()
    }, maxStatusesAge * 1000)
    return () => clearTimeout(timer)
  }, [setStatusesExpired])

  // Load lines statuses for name reference if not received already
  useEffect(() => {
    if (statuses.length === 0 || statusesExpired) getStatuses()
  }, [statuses, getStatuses, statusesExpired])

  //Get stations for all Lines asyncronously
  useEffect(() => {
    if (stationsExpired && !statusesExpired) getStations()
  }, [statuses, stationsExpired, getStations, statusesExpired])

  if (statuses.length !== 0) {
    line = findLine(statuses, lineId)
  }

  return (
    <section>
      <div className='card'>
        <TubeLineColourHeader line={line} />
        <div className='cardBody'>
          <Status line={line} timeStamp={statusesTimeStamp} />

          <div className='row titleRow'>
            <div className='status'>{lineStops.length} stations served: </div>
          </div>

          <div className='lineStopGrid '>
            {lineStops.map((stop) => {
              let station = stations.find((station) => station.id === stop.id)
              return <LineStop key={station.id} station={station} />
            })}
          </div>

          <div className='row age end'>
            <TimeStamp timeStamp={stationsTimeStamp} />
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube
  }
}

export default connect(mapStateToProps, {
  getStatuses,
  setStatusesExpired,
  getStations
})(LineStops)
