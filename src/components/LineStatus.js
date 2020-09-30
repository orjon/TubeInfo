import React from 'react';
import { Link } from 'react-router-dom';
import TubeLineHeader from './layout/TubeLineHeader';
import Status from './layout/Status';
import '../scss/_Card.scss';

const LineStatus = ({ line, statusesAge, statusesTimeStamp }) => {

  return(
    <div className='LineStatus'>
      <Link to={`/line/${line.id}`}>
        <div className='Card'>
          <TubeLineHeader lineId={line.id} lineName={line.name}/>
          <div className='cardBody'>
            <Status line={line} timeStamp={statusesTimeStamp} age={statusesAge} />
          </div>
        </div>

      </Link>
    </div>
  )
}

export default LineStatus;