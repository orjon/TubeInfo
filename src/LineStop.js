import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LineStop.scss';

class LineStop extends Component{


  render(){
    let station = this.props.station
  
    return(
      <div className='LineStop'>
        <Link to={`/station/${station.url}`} onClick={e => e.stopPropagation }>
          {station.name} ({station.id})
        </Link>
      </div>
    )
  }
}

export default LineStop;
