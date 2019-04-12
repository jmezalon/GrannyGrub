import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import secret from "../secret.js";
import { MainPageLoader } from "./loadingPages/MainpageLoader";
import icon from "../assets/icon.png";
import axios from "axios";

class MainPage extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    coords: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  getCoords = address => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
          secret.apiKey
        }`
      )
      .then(res => {
        this.setState({
          coords: res.data.results[0].geometry.location
        });
      });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllGrandmas();
  }

  // 40.7484405, lng: -73.9856643999999

  render() {
    !this.state.coords.lat
      ? this.getCoords("870 Nostrand Ave")
      : console.log(this.state.coords);

    if (!this.props.grandmas.grandmas.length) return null;
    const locations = this.props.grandmas.grandmas.map(granny => {
      return (
        <Marker
          key={granny.id}
          onClick={this.onMarkerClick}
          pic={granny.profile_pic}
          name={granny.last_name}
          icon={icon}
          position={{
            lat: granny.latitude,
            lng: granny.longitude
          }}
        />
      );
    });
    const divStyle = {
      width: "500px",
      height: "500px"
    };
    const imgStyle = {
      width: "50px",
      height: "50px"
    };
    return (
      <div className="maainpage">
        <h2>Grandmas near you</h2>
        <Map
          onClick={this.onMapClicked}
          style={divStyle}
          google={this.props.google}
          initialCenter={{
            lat: 40.743001,
            lng: -73.950614
          }}
          zoom={11}
        >
          {locations}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <img style={imgStyle} src={this.state.selectedPlace.pic} alt="" />
              <p>{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${secret.apiKey}`
})(MainPage);
