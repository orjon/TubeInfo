import React from 'react';
import { Link } from 'react-router-dom';
import TubeLineHeader from './layout/TubeLineHeader';
import Status from './layout/Status';
import '../scss/_Card.scss';

const LineStatus = ({ line, statusesTimeStamp }) => {

  return(
    <div className='LineStatus'>
      <Link to={`/line/${line.id}`}>
        <div className='Card'>
          <TubeLineHeader line={line}/>
          <Status line={line} timeStamp={statusesTimeStamp}/>
        </div>
      </Link>
    </div>
  )
}

export default LineStatus;