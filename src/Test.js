import React, { Component } from 'react'


class Test extends Component {
  static defaultProps={
    stations: []
  }

  render(){

    const { stations } = this.props

    let addresses = stations.map( station =>
      <p>{station.address.value}</p>
    )

    return(
      <div>
        {addresses}
        test
      </div>
    )
  }
}

export default Test