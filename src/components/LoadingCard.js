import React from 'react';
import '../scss/_Card.scss';

const LoadingCard = (line) => {


  return(
    <div className='LineStatus'>

      <div className='Card'>

        <div className={`row lineColor ${line}`}>
          <div>Line Statuses</div>
        </div>

        <div className='row titleRow'>
          <div className='loading'>Loading...</div>
        </div>
        
      </div>

    </div>
  )
}

export default LoadingCard;