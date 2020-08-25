import React from 'react';
import LineStatus from './LineStatus';
import '../scss/Section.scss';


const LineStatuses = ({ tubeLines }) => {

    const tubeStatuses = tubeLines.map( line => (
      <LineStatus key={line.id} line={line}/>
    )) 

    return(
      <section>
        <div className='sectionBody CardGrid'>
          {(tubeStatuses.length !== 0)? tubeStatuses : 'Loading...'}
        </div>
      </section>
    )
  
}

export default LineStatuses;