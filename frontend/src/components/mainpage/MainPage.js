import React, { Component } from "react";
import axios from "axios";

import MapView from "./MapView";
import secret from "../../secret.js";
// import { MainPageLoader } from "./loadingPages/MainpageLoader";
import icon from "../../assets/icon.png";

class MainPage extends Component {
  // state = {
  //   grandmas: []
  // };

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

  // handleFilterClick = e => {
  //   const newGrandmas = this.props.grandmas.filter(grandma => {
  //     return grandma.cuisine_id === e.target.value;
  //   });
  //   this.setState({ grandmas: newGrandmas });
  // };

  handleClick = id => {
    this.props.history.push(`/grandma/${id}`);
  };

  render() {
    console.log(this.props);
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
      <div className="maainpage">
        {cuisinesType}
        <button onClick={this.allGrandmasAgain}>See All</button>
        <MapView handleClick={this.handleClick} grandmas={grandmas} />
      </div>
    );
  }
}

export default MainPage;
