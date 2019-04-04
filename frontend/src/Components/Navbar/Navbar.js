import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-parent">
        <nav>
          <NavLink to="/">Home</NavLink>{' '}
          <NavLink to="/brooklyn">Brooklyn</NavLink>{' '}
          <NavLink to="/queens">Queens</NavLink>{' '}
          <NavLink to="/manhattan">Manhattan</NavLink>{' '}
          <NavLink to="/bronx">Bronx</NavLink>{' '}
          <NavLink to="/statenisland">Staten Island</NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;
