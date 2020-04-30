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
    const tubeStatuses = tubeLines.map( line => (
      <LineStatus key={line.id} line={line} handleClick={() => this.goToLine(line.id)}/>
    ))
    return(
      <section>
        <h3 className='sectionHeader'>Line Statuses</h3>
        <main className='gridContainer'>
          {tubeStatuses}
        </main>
      </section>

    )
  }
}

export default LineStatuses;
