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
    },
    stations: []
  }

  render(){
    const { line, tubeLines, stations } = this.props

    let lineStops = line.stations.map(station => 
      <LineStop key={station.id} station={station} stations={stations} tubeLines={tubeLines}/>
    )

    let lightColors = ['hammersmith-city','waterloo-city', 'circle']
    let lightColor = ''

      if (lightColors.includes(line.id)){
        lightColor = 'lightColor'
      }

    console.log('line: ',line.id)



    return(



      <section>
        {/* <div className='sectionTitle'>Line Details</div> */}
        <div className='CardSingle'> 
          <div className='Card'>
            
            <div className={`row lineColor ${line.id}`}>
              <div className={`${lightColor}`}>{line.name}</div>
            </div>

            {/* <div className='row'>
              <div className='status'>Stations: {line.stations.length}</div>
            </div> */}

            <div className='row'>
              <div className='column w100 indent1'>
                <h2>Stations Served ({line.stations.length})</h2>
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
