import React, { Fragment, useEffect } from 'react';
import LineStatus from './LineStatus';
import LoadingCard from './LoadingCard';
import { connect } from 'react-redux';
import { getStatuses } from '../actions/tube';
import '../scss/Section.scss';

const LineStatuses = ({ getStatuses, tube: { lineStatuses, loadedStatuses} }) => {

  useEffect(() => {
    if (!loadedStatuses) getStatuses()
  },[getStatuses])

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

export default connect(mapStateToProps, { getStatuses })(LineStatuses)