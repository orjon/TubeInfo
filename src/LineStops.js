import React, { Component } from 'react';
import LineStop from './LineStop';
import './Section.scss';

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

  render(){
    const { line, tubeLines } = this.props

    let lineStops = line.stations.map(station => 
      <LineStop key={station.id} station={station} tubeLines={tubeLines}/>
    )

    return(
      <section>
        {/* <div className='sectionTitle'>Line Details</div> */}
        <div className='CardSingle'> 
          <div className='Card'>
            
            <div className={`row lineColor ${line.id}`}></div>

            <div className='row'>
              <h1>{line.name}</h1>
              <div className='status'>Stations: {line.stations.length}</div>
            </div>

            <div className='row'>
              <div className='column w100'>
                <h2>Stations Served</h2>
                <div className='column indent2'>
                  {/* <div className='row'>
                    <h4 className='infoLabel'>Station</h4>
                    <h4 className='infoLabel end'>Lines Served</h4>
                  </div> */}
                  {lineStops}
                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    )
  }
}

export default LineStops;
