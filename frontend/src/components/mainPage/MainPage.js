import React, { Component } from "react";
import axios from "axios";
import cuisineIcon from "../../assets/cutlery.png";
import timeIcon from "../../assets/hourglass.png";
import serviceIcon from "../../assets/people.png";

import MapView from "./MapView";
import ListView from "./ListView";
import secret from "../../secret.js";
import icon from "../../assets/icon.png";

class MainPage extends Component {
  state = {
    isDelivery: false,
    isPickup: false,
    isLunch: false,
    isDinner: false,
    cuisinesSelected: [],
    address: "",
    center: { lat: 40.692053, lng: -73.991104 },
    zoom: 12.5,
    hoveredGrandmaId: false,
    selectedAll: true
  };

  submitFormHandler = address => {
    if (address) {
      this.setState({
        address: address
      });
    }
    return (
      <div className="search-address">
        <form
          onSubmit={e => {
            this.getCoords(e, this.state.address);
          }}
        >
          <input
            id="input"
            value={this.state.address}
            type="text"
            onChange={this.changeHandler}
            name="address"
            placeholder="🔍 Find a granny near by"
          />
        </form>
      </div>
    );
  };

  handleClickCuisineType = async e => {
    let { cuisinesSelected } = this.state;
    let target = parseInt(e.target.value);
    if (!cuisinesSelected.includes(target)) {
      await this.setState({
        cuisinesSelected: [...cuisinesSelected, target],
        selectedAll: false
      });
    } else {
      let filtered = cuisinesSelected.filter(grannyId => {
        return target !== grannyId;
      });
      await this.setState({
        cuisinesSelected: filtered,
        selectedAll: false
      });
    }
    await this.filterGrannies();
  };

  handleClickMealType = async e => {
    e.preventDefault();
    let { isDelivery, isPickup } = this.state;
    await this.setState({
      [e.target.name]: !this.state[e.target.name],
      selectedAll: false
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
      isDelivery,
      isPickup,
      isLunch,
      isDinner
    } = this.state;

    if (isLunch && isDinner) {
      isLunch = false;
      isDinner = false;
    }

    let dataObj = {
      cusineIds: cuisinesSelected,
      isPickup,
      isDelivery,
      isLunch,
      isDinner
    };
    if (
      (!cuisinesSelected.length &&
        !isPickup &&
        !isDelivery &&
        !isLunch &&
        !isDinner) ||
      (!cuisinesSelected.length &&
        isPickup &&
        isDelivery &&
        isLunch &&
        isDinner) ||
      (!cuisinesSelected.length &&
        !isPickup &&
        isDelivery &&
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

  displayAllGrandmas = async () => {
    await this.unCheck();
    await this.props.getAllGrandmas();
    await this.setState({
      isDelivery: false,
      isPickup: false,
      isLunch: false,
      isDinner: false,
      cuisinesSelected: [],
      selectedAll: true
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
        if (res.data.results[0] === undefined) {
          this.setState({
            address: "",
            center: { lat: 40.692053, lng: -73.991104 },
            zoom: 11
          });
        } else {
          let coords = res.data.results[0].geometry.location;
          this.setState({
            center: coords,
            zoom: 13,
            address: ""
          });
        }
      })
      .catch(
        this.setState({
          address: "",
          center: { lat: 40.692053, lng: -73.991104 },
          zoom: 11
        })
      );
  };

  handleGrandmaListItemHover = hoveredGrandmaId => {
    this.setState({ hoveredGrandmaId });
  };

  // searchAddress = async e => {
  //   e.preventDefault();
  //   let coords = await this.getCoords(this.state.address);
  //   await console.log("here ", coords);
  // };

  render() {
    var addressInput = document.getElementById("input");
    console.log(this.state.address, this.state.center);
    const {
      center,
      zoom,
      hoveredGrandmaId,
      cuisinesSelected,
      isLunch,
      isDinner,
      isPickup,
      isDelivery,
      selectedAll
    } = this.state;
    const cuisinesType = this.props.cuisines.cuisines.map(cuisine => {
      return (
        <div
          key={cuisine.id}
          className={
            cuisinesSelected.includes(cuisine.id) ? "highlighted" : null
          }
        >
          <button
            value={cuisine.id}
            key={cuisine.id}
            type="button"
            onClick={this.handleClickCuisineType}
          >
            {cuisine.type}
          </button>
        </div>
      );
    });

    let { grandmas } = this.props;
    // if (!grandmas.length) return null;
    return (
      <div className="mainpage">
        <div className="top-mainpage">
          <div className="filter-part1">
            <div className="icon">
              <img src={cuisineIcon} alt="" />
              <h1> cuisines </h1>
            </div>
            <div
              className={
                selectedAll ? "highlighted filter-buttons" : "filter-buttons"
              }
            >
              <button onClick={this.displayAllGrandmas}>See All</button>
              {cuisinesType}
            </div>
          </div>
          <div className="filter-part2">
            <div className="lunch-dinner">
              <div className="icon">
                <img src={timeIcon} alt="" /> <h1> time </h1>
              </div>
              <form className="lunch-dinner-form">
                <div
                  className={
                    isLunch ? "highlighted filter-buttons" : "filter-buttons"
                  }
                >
                  <button
                    type="button"
                    name="isLunch"
                    onClick={this.handleClickMealType}
                  >
                    Lunch
                  </button>
                </div>
                <div
                  className={
                    isDinner ? "highlighted filter-buttons" : "filter-buttons"
                  }
                >
                  <button
                    type="button"
                    name="isDinner"
                    onClick={this.handleClickMealType}
                  >
                    Dinner
                  </button>
                </div>
              </form>
            </div>

            <div className="order-type">
              <div className="icon">
                <img src={serviceIcon} alt="" />
                <h1> service </h1>
              </div>
              <form className="order-type-form">
                <div
                  className={
                    isDelivery ? "highlighted filter-buttons" : "filter-buttons"
                  }
                >
                  <button
                    type="checkbox"
                    name="isDelivery"
                    onClick={this.handleClickMealType}
                  >
                    Sit-Down{" "}
                  </button>
                </div>
                <div
                  className={
                    isPickup ? "highlighted filter-buttons" : "filter-buttons"
                  }
                >
                  <button
                    type="checkbox"
                    name="isPickup"
                    onClick={this.handleClickMealType}
                  >
                    Pick-Up{" "}
                  </button>
                </div>
              </form>
            </div>
            {this.submitFormHandler()}
          </div>
        </div>
        <div className="button-mainpage">
          <div className="left-mainpage">
            <ListView
              zoom={zoom}
              center={center}
              handleClick={this.handleClick}
              handleGrandmaListItemHover={this.handleGrandmaListItemHover}
              grandmas={grandmas}
            />
          </div>
          <div className="right-mainpage">
            <div className="map-list">
              <MapView
                submitFormHandler={this.submitFormHandler}
                addressInput={addressInput}
                zoom={zoom}
                center={center}
                handleClick={this.handleClick}
                hoveredGrandmaId={hoveredGrandmaId}
                grandmas={grandmas}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
