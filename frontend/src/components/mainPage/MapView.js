import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
//import secret from "../../secret.js";
// import { MainPageLoader } from "./loadingPages/MainpageLoader";
import icon from "../../assets/icon.png";
import axios from "axios";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.map = undefined;
  }

  onMouseoverMarker = (props, marker, e) => {};

  onMouseLeave = (props, marker, e) => {};

  // getCoords = address => {
  //   axios
  //     .get(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
  //         secret.apiKey
  //       }`
  //     )
  //     .then(res => {
  //       this.setState({
  //         coords: res.data.results[0].geometry.location
  //       });
  //     });
  // };

  // onMapClicked = props => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // };

  infoWindow = id => {
    return `
<div>Grandma!
  <a href="/grandma/${id}">I want her food!</a>
</div>
`;
  };

  componentDidMount() {
    console.log("CDM");
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.639286, lng: -73.951499 },
      zoom: 11
    });

    for (const grandma of this.props.grandmas) {
      console.log(grandma.latitude, grandma.longitude);

      const infoWindow = new window.google.maps.InfoWindow({
        content: this.infoWindow(grandma.id)
      });

      const marker = new window.google.maps.Marker({
        position: { lat: grandma.latitude, lng: grandma.longitude },
        map: this.map,
        icon,
        title: grandma.last_name
      });

      var myListener = marker.addListener("mouseover", () => {
        infoWindow.open(this.map, marker);
      });
      marker.addListener("mouseout", () => {
        infoWindow.close(this.map, marker);
      });

      // remove listeners when no longer used.
      // maybe store the markers away in an array in state or something.
    }
  }

  render() {
    console.log("mapview render");
    let { grandmas, handleClick, showingMap } = this.props;

    if (!grandmas.length) return null;
    // const locations = grandmas.map(granny => {
    //   return (
    //     <Marker
    //       key={granny.id}
    //       onClick={() => handleClick(granny.id)}
    //       onMouseover={this.onMouseoverMarker}
    //       onMouseout={this.onMouseLeave}
    //       pic={granny.profile_pic}
    //       name={granny.last_name}
    //       icon={icon}
    //       position={{
    //         lat: granny.latitude,
    //         lng: granny.longitude
    //       }}
    //     />
    //   );
    // });
    // TODO Markers
    const divStyle = {
      width: "500px",
      height: "500px"
    };
    return (
      <div className="map-main">
        <div id="map" />
      </div>
    );
  }
}

export default MapView;
