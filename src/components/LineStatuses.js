import React, { useEffect } from 'react';
import LineStatus from './LineStatus';
import { connect } from 'react-redux';
import { getStatuses, setStatusAge } from '../actions/tube';
import '../scss/Section.scss';
// import moment from 'moment';

const LineStatuses = ({ getStatuses, setStatusAge, tube: { lineStatuses, loadedStatuses} }) => {

  useEffect(() => {
    if (!loadedStatuses) getStatuses()

    const timer = setInterval(() => getStatuses(), 19000);
    return () => clearTimeout(timer);

  },[getStatuses, loadedStatuses])

  // Status age counter
  useEffect(() => {
    const timer = setInterval(() => setStatusAge(), 1000);
    return () => clearTimeout(timer);
  }, [setStatusAge]);

  // let now = moment().format('X')
 

  return(
    <section>
      <div className='sectionBody CardGrid'>
          {lineStatuses.map( line => <LineStatus key={line.id} line={line}/>)}
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