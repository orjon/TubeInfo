import React, { useEffect } from 'react'
import LineStatusCard from '../layout/LineStatusCard'
import { connect } from 'react-redux'
import { maxStatusesAge } from '../../globalSettings'
import {
  getStatuses,
  setStatusesExpired,
  getStations
} from '../../actions/tube'
import '../../scss/Section.scss'

const LineStatuses = ({
  getStatuses,
  setStatusesExpired,
  getStations,
  tube: { statuses, statusesTimeStamp, statusesExpired, stationsExpired }
}) => {
  useEffect(() => {
    if (statusesExpired) getStatuses()
    else if (stationsExpired) getStations()
  }, [getStatuses, statusesExpired, getStations, stationsExpired])

  // Statuses update interval
  useEffect(() => {
    const timer = setInterval(() => {
      setStatusesExpired()
    }, maxStatusesAge * 1000)
    return () => clearTimeout(timer)
  }, [setStatusesExpired])

  return (
    <section>
      <div className='CardGrid'>
        {statuses.map((line) => (
          <LineStatusCard
            key={line.id}
            line={line}
            statusesTimeStamp={statusesTimeStamp}
          />
        ))}
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
})(LineStatuses)
