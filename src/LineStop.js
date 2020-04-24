import React, { Component } from 'react';
import './LineStop.scss';

class LineStop extends Component{


  render(){
    let stop = this.props.stop

    let stopName = ''
      if (stop.stopName) {
        stopName = stop.stopName
        stopName = stopName.replace('Underground Station', '')
        let cropIndex1 = stopName.indexOf('(') + 1
        if (cropIndex1 != 0){
          stopName = stopName.slice(0, (cropIndex1-2))
        } 
      }

    
    return(
      <div className='LineStop'>{stopName}</div>
    )
  }
}

export default LineStop;
