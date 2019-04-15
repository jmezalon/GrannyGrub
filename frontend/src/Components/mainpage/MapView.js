import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import secret from "../../secret.js";
// import { MainPageLoader } from "./loadingPages/MainpageLoader";
import icon from "../../assets/icon.png";
import axios from "axios";

class MapView extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    coords: {}
  };

  onMouseoverMarker = (props, marker, e) => {
    if (!this.state.showingInfoWindow) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    }
  };

  onMouseLeave = (props, marker, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: false
      });
    }
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

  render() {
    !this.state.coords.lat
      ? this.getCoords("870 Nostrand Ave")
      : console.log(this.state.coords);

    let { grandmas, handleClick } = this.props;

    if (!grandmas.length) return null;
    const locations = grandmas.map(granny => {
      return (
        <Marker
          key={granny.id}
          onClick={() => handleClick(granny.id)}
          onMouseover={this.onMouseoverMarker}
          onMouseout={this.onMouseLeave}
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
})(MapView);
