import React, { Component } from 'react'

class Facilties extends Component {
  static defaultProps={
    facilities: []
    }

  render(){
    let { facilities } = this.props

    facilities = facilities.map(facility => 
      <div key={facility.key} className='row'>
        {facility.key}
      </div>
    )

    return(
      <div className='column dataBlock indent2'>
        {facilities}
      </div>


      // {/* <div className='row facilitiesIcons indent2'> */
      //     /* <IconWifi /> */
      //   /* <img src={IconWifi} className='icon' alt="Wifi Icon" />
      //   <img src={IconATM} className='icon' alt="ATM Icon" /> */
      // /* </div> */}

    )
  }
}

export default Facilties;