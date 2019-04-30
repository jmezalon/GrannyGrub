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
    isLunch: false,
    isDinner: false,
    cuisinesSelected: [],
    showingMap: true,
    address: "",
    center: { lat: 40.639286, lng: -73.951499 },
    zoom: 11
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
    for (let i = 0; i < checkList.length; i++) {
      if (checkList[i].checked) {
        checkList[i].checked = false;
      }
    }
  };

  filterGrannies = () => {
    let {
      cuisinesSelected,
      isSitdown,
      isPickup,
      isLunch,
      isDinner
    } = this.state;
    let dataObj = {
      cusineIds: cuisinesSelected,
      isPickup,
      isSitdown,
      isLunch,
      isDinner
    };
    if (
      (!cuisinesSelected.length &&
        !isPickup &&
        !isSitdown &&
        !isLunch &&
        !isDinner) ||
      (!cuisinesSelected.length &&
        isPickup &&
        isSitdown &&
        isLunch &&
        isDinner) ||
      (!cuisinesSelected.length &&
        !isPickup &&
        !isSitdown &&
        isLunch &&
        isDinner) ||
      (!cuisinesSelected.length &&
        isPickup &&
        isSitdown &&
        !isLunch &&
        !isDinner)
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

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getCoords = (event, address) => {
    event.preventDefault();
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
          secret.apiKey
        }`
      )
      .then(res => {
        let coords = res.data.results[0].geometry.location;
        this.setState({
          center: coords,
          zoom: 11,
          address: ""
        });
      });
  };

  // searchAddress = async e => {
  //   e.preventDefault();
  //   let coords = await this.getCoords(this.state.address);
  //   await console.log("here ", coords);
  // };

  render() {
    const { showingMap } = this.state;
    const cuisinesType = this.props.cuisines.cuisines.map(cuisine => {
      return (
        <div key={cuisine.id}>
          <label onChange={this.handleClickCuisineType}>
            <input
              value={cuisine.id}
              key={cuisine.id}
              type="checkbox"
              className="checkbox"
            />
            {cuisine.type}
          </label>
        </div>
      );
    });

    let { grandmas } = this.props;
    // if (!grandmas.length) return null;
    return (
      <div className="mainpage">
        <form>
          <div>
            <input
              type="checkbox"
              name="isLunch"
              onChange={this.handleClickMealType}
              className="checkbox"
            />
            Lunch
            <input
              type="checkbox"
              name="isDinner"
              onChange={this.handleClickMealType}
              className="checkbox"
            />
            Dinner
          </div>
        </form>
        <form
          onSubmit={e => {
            this.getCoords(e, this.state.address);
          }}
        >
          <input
            value={this.state.address}
            type="text"
            onChange={this.changeHandler}
            name="address"
          />
          <button type="submit">Search Address</button>
        </form>
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
            zoom={this.state.zoom}
            center={this.state.center}
            handleClick={this.handleClick}
            showingMap={showingMap}
            grandmas={grandmas}
          />
        ) : (
          <ListView
            zoom={this.state.zoom}
            center={this.state.center}
            handleClick={this.handleClick}
            grandmas={grandmas}
          />
        )}
      </div>
    );
  }
}

export default MainPage;
