import React, { Component } from 'react';
import './Section.scss';
import LineStop from './LineStop';

class LineStops extends Component{
  static defaultProps={
    line: {
      id: 'loading...',
      name: 'loading...',
      stations: []
    },
    tubeLines: {
    }
  }

  goToStatuses = () => {
    this.props.history.push(`/`);
  }

  goToStation(id){
    this.props.history.push(`/station/${id}`);
  }
  

  render(){
    const { line } = this.props

    let lineStops = line.stations.map(station => 
      <LineStop key={station.id} station={station}/>
    )

    return(
      <section>
        <div className='sectionTitle'>Line Details</div>
        <div className='CardSingle'> 
          <div className='card'>
            <div className={`row lineColor ${line.id}`}></div>
            <div className='row titleRow'>
              <h3 className='name'>{line.name}</h3>
              <p className='status'>Stations: {line.stations.length}</p>
            </div>
            <div className='row'>
              <div className='data'>
                {lineStops}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LineStops;
