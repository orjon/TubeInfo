import React, { useEffect } from 'react';
import LineStatus from './LineStatus';
import { connect } from 'react-redux';
import { maxStatusesAge } from '../globalSettings'
import { getStatuses, setStatusesExpired, getStations} from '../actions/tube';
import '../scss/Section.scss';

const LineStatuses = ({
  getStatuses,
  setStatusesExpired,
  getStations,
  tube: {
    statuses,
    statusesTimeStamp,
    statusesExpired,
    stationsExpired } }) => {
  const calledFrom = 'LineStatuses'

  useEffect(() => {
    if (statusesExpired) getStatuses(calledFrom)
    else if (stationsExpired) getStations(calledFrom)
  },[getStatuses, statusesExpired, getStations, stationsExpired])


  // useEffect(() => {
  //   if (statusesExpired) getStatuses(calledFrom)
  // },[getStatuses, statusesExpired])


  // Statuses update interval
  useEffect(() => {
    const timer = setInterval(() => {setStatusesExpired(calledFrom)}, (maxStatusesAge*1000));
    return () => clearTimeout(timer);
  }, [setStatusesExpired]);

  return(
    <section>
      <div className='CardGrid'>
          {statuses.map( line => <LineStatus key={line.id} line={line} statusesTimeStamp={statusesTimeStamp}/>)}
      </div>
    </section>
  )
  
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube
  }
}

export default connect(mapStateToProps, { getStatuses, setStatusesExpired, getStations })(LineStatuses)