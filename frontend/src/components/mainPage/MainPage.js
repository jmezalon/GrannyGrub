import React, { Component } from "react";
import axios from "axios";

import MapView from "./MapView";
import ListView from "./ListView";
import secret from "../../secret.js";
import icon from "../../assets/icon.png";

class MainPage extends Component {
  state = {
    showingMap: true
  };

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllGrandmas();
    this.props.getAllCuisines();
  }

  filterGrandmas = id => {
    this.props.allGrandmasByCuisines(id);
  };

  allGrandmasAgain = () => {
    this.props.getAllGrandmas();
  };

  handleClick = id => {
    this.props.history.push(`/grandma/${id}`);
  };

  toggleView = () => {
    this.setState({
      showingMap: !this.state.showingMap
    });
  };

  render() {
    const { showingMap } = this.state;
    const cuisinesType = this.props.cuisines.cuisines.map(cuisine => {
      return (
        <button
          onClick={e => this.filterGrandmas(e.target.value)}
          value={cuisine.id}
          key={cuisine.id}
        >
          {cuisine.type}
        </button>
      );
    });

    let { grandmas } = this.props;
    if (!this.props.grandmas.length) return null;

    return (
      <div className="mainpage">
        {showingMap ? (
          <button onClick={this.toggleView}>Show List View</button>
        ) : (
          <button onClick={this.toggleView}> Show Map View</button>
        )}
        <br />
        <button onClick={this.allGrandmasAgain}>See All</button>
        <br />
        {cuisinesType}
        {showingMap ? (
          <MapView handleClick={this.handleClick} grandmas={grandmas} />
        ) : (
          <ListView handleClick={this.handleClick} grandmas={grandmas} />
        )}
      </div>
    );
  }
}

export default MainPage;
