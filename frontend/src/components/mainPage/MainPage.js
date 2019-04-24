import React, { Component } from "react";
import axios from "axios";

import MapView from "./MapView";
import ListView from "./ListView";
import secret from "../../secret.js";
import icon from "../../assets/icon.png";

class MainPage extends Component {
  state = {
    isSitdown: false,
    isPickup: false,
    cuisinesSelected: [],
    showingMap: true
  };

  handleClickCuisineType = async e => {
    let { cuisinesSelected } = this.state;
    let target = parseInt(e.target.value);
    if (!cuisinesSelected.includes(target)) {
      await this.setState({
        cuisinesSelected: [...cuisinesSelected, target]
      });
    } else {
      let filtered = cuisinesSelected.filter(grannyId => {
        return target !== grannyId;
      });
      await this.setState({
        cuisinesSelected: filtered
      });
    }
    await this.filterGrannies();
  };

  handleClickMealType = async e => {
    let { isSitdown, isPickup } = this.state;
    await this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
    await this.filterGrannies();
  };

  componentDidMount = () => {
    this.props.getAllUsers();
    this.props.getAllGrandmas();
    this.props.getAllCuisines();
  };

  unCheck = () => {
    let checkList = document.getElementsByClassName("checkbox");
    console.log("here", checkList);
    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i].checked) {
        console.log(checkList[i]);
        checkList[i].checked = false;
      }
    }
  };

  filterGrannies = () => {
    let { cuisinesSelected, isSitdown, isPickup } = this.state;
    let dataObj = {
      cusineIds: cuisinesSelected,
      isPickup,
      isSitdown
    };
    if (
      (!cuisinesSelected.length && !isPickup && !isSitdown) ||
      (!cuisinesSelected.length && isPickup && isSitdown)
    ) {
      this.props.getAllGrandmas();
    } else {
      this.props.grandmasByMultiCriteria(dataObj);
    }
  };

  handleClick = id => {
    this.props.history.push(`/grandma/${id}`);
  };

  toggleView = () => {
    this.setState({
      showingMap: !this.state.showingMap
    });
  };

  displayAllGrandmas = async () => {
    await this.unCheck();
    await this.props.getAllGrandmas();
    await this.setState({
      isSitdown: false,
      isPickup: false,
      cuisinesSelected: []
    });
  };

  render() {
    const { showingMap } = this.state;
    const cuisinesType = this.props.cuisines.cuisines.map(cuisine => {
      return (
        <>
          <input
            onChange={this.handleClickCuisineType}
            value={cuisine.id}
            key={cuisine.id}
            type="checkbox"
            className="checkbox"
          />
          {cuisine.type}
        </>
      );
    });

    let { grandmas } = this.props;
    if (!grandmas.length) return null;
    return (
      <div className="mainpage">
        <div>
          <input
            type="checkbox"
            name="isSitdown"
            onChange={this.handleClickMealType}
            className="checkbox"
          />
          Sit-Down
          <input
            type="checkbox"
            name="isPickup"
            onChange={this.handleClickMealType}
            className="checkbox"
          />
          Pick-Up
        </div>
        <div className="show-button">
          {showingMap ? (
            <button onClick={this.toggleView}>Show List View</button>
          ) : (
            <button onClick={this.toggleView}> Show Map View</button>
          )}
        </div>
        <br />

        <div className="filter-buttons">
          <button onClick={this.displayAllGrandmas}>See All</button>
          {cuisinesType}
        </div>
        {showingMap ? (
          <MapView
            handleClick={this.handleClick}
            showingMap={showingMap}
            grandmas={grandmas}
          />
        ) : (
          <ListView handleClick={this.handleClick} grandmas={grandmas} />
        )}
      </div>
    );
  }
}

export default MainPage;
