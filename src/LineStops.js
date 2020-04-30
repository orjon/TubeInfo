import React, { Component } from 'react';
import './Sections.scss';
import './LineStops.scss';
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
      <LineStop key={station.id} station={station} handleClick={() => this.goToStation(station.url)}/>
    )

    return(
      <section>
        <h3 className='sectionHeader'>Line Details</h3>
        <main className='LineStops' onClick={this.goToStatuses}>
          <div className={`card line ${line.id}`}>
            <div className='details'>
              <div className={`row lineColor ${line.name}`}></div>
              <div className='row lineName'>
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
          
        </main>
      </section>
    )
  }
}

export default LineStops;
