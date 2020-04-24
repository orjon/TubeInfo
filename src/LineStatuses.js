import React, { Component } from 'react';
import LineStatus from './LineStatus';
import './Sections.scss';
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
      <section>
        <h3 className='sectionHeader'>Line Statuses</h3>
        <main>
          {tubeStatuses}
        </main>
      </section>

    )
  }
}

export default LineStatuses;
