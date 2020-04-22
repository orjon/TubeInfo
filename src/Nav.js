import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render(){
    return(
      <div className='Nav'>
        <Link to='/'>
          <h1>Transport for London API</h1>
        </Link>
      </div>
    )
  }

}

export default Nav;