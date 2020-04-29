import React, { Component } from 'react';
import './LineStop.scss';

class LineStop extends Component{


  render(){
    let station = this.props.station

    let stationName = ''
      if (station.name) {
        stationName = station.name.replace('Underground Station', '')
        let cropIndex1 = stationName.indexOf('(') + 1
        if (cropIndex1 !== 0){
          stationName = stationName.slice(0, (cropIndex1-2))
        } 
      }

    
    return(
      <div className='LineStop'>{stationName} ({station.id}): next @ </div>
    )
  }
}

export default LineStop;
