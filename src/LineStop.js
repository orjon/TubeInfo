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
        console.log('cropIndex:', cropIndex1)
        if (cropIndex1 != 0){
          console.log('slicing')
          stopName = stopName.slice(0, (cropIndex1-2))
        }
        
      }

    // if (stopName){

    //     let cropIndex1 = stopName.indexOf(':') + 1
        // if (cropIndex1 != -1){
        //   stopName = stopName.slice(0, cropIndex1)
        // }
    //     let cropIndex2 = stopName.indexOf('(') + 1
    //     if (cropIndex1 != -1){
    //       stopName = stopName.slice(0, cropIndex2)
    //     }
    //   }
    
    return(
      <div className='LineStop'>{stopName}</div>
    )
  }
}

export default LineStop;

    // if (stopName){
    //   let cropIndex1 = stopName.indexOf(':') + 1
    //   if (cropIndex1 != -1){
    //     stopName = stopName.substring(cropIndex1)
    //   }
    //   let cropIndex2 = stopName.indexOf('(') + 1
    //   if (cropIndex1 != -1){
    //     stopName = stopName.substring(cropIndex2)
    //   }
    // }