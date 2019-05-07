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
    this.markers = [];
    this.infoWindows = [];
  }

  infoWindow = (lastname, pic, cuisine, id) => {
    const divstyle = { width: "20px", height: "20px" };
    return `
    <div id=${id} class="info">
      <div id="image">
        <img src=${pic} alt="grandma ${lastname}" />
      </div>
      <div class="info-in-window">
      <h3>Grandma  ${lastname}</h3>

      <p>${cuisine} style</p>
      </div>
    </div>`;
  };

  componentDidMount = () => {
    this.initMap();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.center.lat !== this.props.center.lat) {
      this.initMap();
    } else if (prevProps.grandmas.length !== this.props.grandmas.length) {
      this.updateMap();
    }
    // if hovred grandma
    // wait for markers SAFE
    // find the marker that matched the grandma
    // show its infowindow.

    if (this.props.hoveredGrandmaId) {
      this.markers.forEach(m => {
        if (m[0].grandmaId === this.props.hoveredGrandmaId) {
          m[1].open(this.map, m[0]);
        } else {
          m[1].close(this.map, m[0]);
        }
      });
      // const infoWindow = grandmaMapObject[1];
      // TODO open the infowindow`
    }
  };

  initMap = () => {
    const { zoom, center } = this.props;
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: zoom,
      streetViewControl: false,
      mapTypeControl: false,
      styles: [
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.business",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          stylers: [
            {
              color: "#9abad0"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        }
      ]
    });
    var addressInput = document.getElementById("pac-input");
    var autocomplete = new window.google.maps.places.Autocomplete(addressInput);
    this.updateMap();
  };

  updateMap = () => {
    if (this.markers.length) {
      this.markers.forEach(marker => {
        marker[0].setMap(null);
      });
    }
    this.markers = [];
    this.props.grandmas.forEach(grandma => {
      const infoWindow = new window.google.maps.InfoWindow({
        content: this.infoWindow(
          grandma.last_name,
          grandma.profile_pic,
          grandma.cuisine_type,
          grandma.id
        )
      });
      const handleClick = this.props.handleClick.bind(this);
      window.google.maps.event.addListener(infoWindow, "domready", function() {
        document
          .getElementById(grandma.id)
          .addEventListener("click", function(e) {
            handleClick(grandma.id);
          });
      });
      const marker = new window.google.maps.Marker({
        position: { lat: grandma.latitude, lng: grandma.longitude },
        map: this.map,
        icon,
        title: grandma.last_name,
        grandmaId: grandma.id
      });
      this.markers.push([marker, infoWindow]);

      var myListener = marker.addListener("mouseover", () => {
        this.markers.map(markInfo => {
          markInfo[1].close(this.map, markInfo[0]);
        });
        infoWindow.open(this.map, marker);
      });

      marker.addListener("click", () => {
        this.props.handleClick(grandma.id);
      });
    });
  };

  render() {
    let { grandmas, handleClick, addressInput } = this.props;
    // if (!grandmas.length) return null;
    const divStyle = {
      width: "500px",
      height: "500px"
    };
    return (
      <div className="map-main">
        <input
          id="pac-input"
          type="text"
          name="address"
          placeholder="🔍 Find a granny near by"
        />
        <div id="map" />
      </div>
    );
  }
}

export default MapView;
//
// <input
//   id="pac-input"
//   type="text"
//   name="address"
//   placeholder="🔍 Find a granny near by"
// />;
