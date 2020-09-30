import React, { useEffect } from 'react';
import LineStatus from './LineStatus';
import { connect } from 'react-redux';
import { getStatuses, setStatusAge } from '../actions/tube';
import '../scss/Section.scss';


const LineStatuses = ({ getStatuses, setStatusAge, tube: { statuses, loadedStatuses, statusesAge, statusesTimeStamp } }) => {

  const calledFrom = 'LineStatuses'

  useEffect(() => {
    if (!loadedStatuses) {
      getStatuses(calledFrom)
    }
  },[getStatuses, loadedStatuses])


  // Status age counter
  useEffect(() => {
    const timer = setInterval(() => {setStatusAge(calledFrom)}, 1000);
    return () => clearTimeout(timer);
  }, [setStatusAge]);


  return(
    <section>
      <div className='sectionBody CardGrid'>
          {statuses.map( line => <LineStatus key={line.id} line={line} statusesAge={statusesAge} statusesTimeStamp={statusesTimeStamp}/>)}
      </div>
    </section>
  )
  
}

const mapStateToProps = (state) => {
  return {
    tube: state.tube
  }
}

export default connect(mapStateToProps, { getStatuses, setStatusAge })(LineStatuses)