import React, { Fragment, useEffect } from 'react';
import LineStatus from './LineStatus';
import LoadingCard from './LoadingCard';
import { connect } from 'react-redux';
import { getStatuses } from '../actions/tube';
import '../scss/Section.scss';
import moment from 'moment';

const LineStatuses = ({ getStatuses, tube: { lineStatuses, loadedStatuses} }) => {

  useEffect(() => {
    if (!loadedStatuses) getStatuses()
  },[getStatuses])

  let now = moment().format('X')
  console.log(now)

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