import React from 'react';
import '../scss/_Card.scss';

const LoadingCard = () => {


  return(
    <div className='LineStatus'>

      <div className='Card'>

        <div className='row titleRow'>
          <div className='loading'>Loading...</div>
        </div>
        
      </div>

    </div>
  )
}

export default LoadingCard;