import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';
import Clock from 'react-live-clock';


class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.today = Date.now()
  }

  render(){
    // const dateToFormat = '1976-04-19T12:59-0500';
    return(
      <div className='Nav'>
        <Link to='/'>
          <div className='AppTitle'>The Tube</div>
        </Link>
        <div className='dateTime'>
          <Clock className = 'Time' format={'HH:mm'} ticking={true}/>
          <Clock className = 'Date' format={'DD-MMM-YYYY'} ticking={true}/>
        </div>
      </div>
    )
  }

}

export default Nav;