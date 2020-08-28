import React, { Fragment, useEffect } from 'react';
import LineStatus from './LineStatus';
import LoadingCard from './LoadingCard';
import { connect } from 'react-redux';
import { getStatuses } from '../actions/tube';
import '../scss/Section.scss';



const LineStatuses = ({ getStatuses, tube: { lineStatuses, loading} }) => {

  useEffect(() => {
    getStatuses()
  },[getStatuses])

    return(
      <section>
        <div className='sectionBody CardGrid'>
          {loading ? 
            <Fragment>
              <LoadingCard color='piccadilly'/>
            </Fragment>
            : 
            <Fragment>
              {lineStatuses.map( line => <LineStatus key={line.id} line={line}/>)}
            </Fragment>}
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