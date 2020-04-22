import React, { Component } from 'react';
import LineStatus from './LineStatus';
import './LineStatuses.scss';

class LineStatuses extends Component {
 
  goToLine(id){
    this.props.history.push(`/line/${id}`);
  }

  render(){
    const { tubeLines } = this.props
    const tubeStatuses = tubeLines.map( tubeLine => (
      <LineStatus key={tubeLine.id} line={tubeLine} handleClick={() => this.goToLine(tubeLine.id)}/>
    ))
    return(
      <div>
        <h3 className='pageHeader'>Line Statuses</h3>
        <main className='LineStatuses'>
          {tubeStatuses}
        </main>
      </div>

    )
  }
}

export default LineStatuses;
