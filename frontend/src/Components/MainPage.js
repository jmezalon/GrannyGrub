import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import secret from "../secret.js";
import icon from "../assets/icon.png";

class MainPage extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
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

  render() {
    if (!this.props.grandmas.grandmas.length) return null;
    const locations = this.props.grandmas.grandmas.map((granny, i) => {
      return (
        <Marker
          key={i}
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
      <div>
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
        Main Page
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${secret.apiKey}`
})(MainPage);
