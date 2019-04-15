import React, { Component } from 'react';
import axios from 'axios';

import MapView from './MapView';
import secret from '../../secret.js';
// import { MainPageLoader } from "./loadingPages/MainpageLoader";
import icon from '../../assets/icon.png';

class MainPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllGrandmas();
    this.props.allGrandmasByCuisines(10);
    this.props.getAllCuisines();
  }

  handleClick = id => {
    this.props.history.push(`/grandma/${id}`);
  };

  render() {
    let { grandmas } = this.props.grandmas;
    if (!grandmas.length) return null;

    return (
      <div className="maainpage">
        <MapView handleClick={this.handleClick} grandmas={grandmas} />
      </div>
    );
  }
}

export default MainPage;
