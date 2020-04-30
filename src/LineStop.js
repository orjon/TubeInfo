import React, { Component } from 'react';
import './LineStop.scss';

class LineStop extends Component{


  render(){
    let station = this.props.station
  
    return(
      <div className='LineStop'>{station.name} ({station.id}): next @ </div>
    )
  }
}

export default LineStop;
