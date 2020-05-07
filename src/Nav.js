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
    return(
      <div className='Nav'>
        <Link to='/'>
          <div className='AppTitle'>Transport for London API</div>
        </Link>
        <div className='dateTime'>
          <Clock className = 'Time'format={'HH:mm'} ticking={true}/>
          <Clock className = 'Date' format={'DD-MMM-YYYY'} ticking={true}/>
        </div>
      </div>
    )
  }

}

export default Nav;