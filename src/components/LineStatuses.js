import React, { Fragment, useEffect } from 'react';
import LineStatus from './LineStatus';
import LoadingCard from './LoadingCard';
import '../scss/Section.scss';
import { connect } from 'react-redux';
import { getStatuses } from '../actions/statuses';


const LineStatuses = ({ getStatuses, statuses: { tubeStatuses, loading} }) => {
  useEffect(() => {
    getStatuses()
  },[getStatuses])

    return(
      <section>
        <div className='sectionBody CardGrid'>
          {loading ? 
            <Fragment>
              <LoadingCard/>
            </Fragment>
            : 
            <Fragment>
              {tubeStatuses.map( line => <LineStatus key={line.id} line={line}/>)}
            </Fragment>}

          {/* {(tubeStatuses.length !== 0)? tubeStatuses : 'Loading...'} */}
        </div>
      </section>
    )
  
}

const mapStateToProps = (state) => {
  return {
    statuses: state.statuses
  }
}

export default connect(mapStateToProps, { getStatuses })(LineStatuses)