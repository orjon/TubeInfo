import React, { Component } from 'react'

class Station extends Component {
  static defaultProps={
    station: {
      id: 'loading...',
      url: 'loading...',
      name: 'loading...',
      lat: 'loading...',
      lon: 'loading...',
      lines: []
    }
  }

  goToStatuses = () => {
    this.props.history.push(`/`);
  }


  render(){
    const { station } = this.props

    let lineBars = station.lines.map(line => 
      <div key={line} className={`row lineColor ${line}`}>{line.name}</div>
    )
    

    return(
      <section>
        <h3 className='sectionHeader'>Station Details</h3>
        <main className='LineStops'>
          <div className={`card line`}> 
            <div className='details'>
              {lineBars}
              <div className='row lineName'>
                <h3 className='name'>{station.name}</h3>
                <p className='status'>Stations: </p>
              </div>
              <div className='row'>
                <div className='data'>
                  data
                </div>
              </div>
            </div>
          </div>
          
        </main>
      </section>
    )
  }
}

export default Station