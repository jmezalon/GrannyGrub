import React, { Component } from "react";
import icon from "../../assets/icon.png";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.map = undefined;
    this.markers = [];
    this.infoWindows = [];
  }

  infoWindow = (lastname, pic, cuisine, id) => {
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
    var addressInput = document.getElementById("input");
    var autocomplete = new window.google.maps.places.Autocomplete(addressInput);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      this.props.submitFormHandler(place.formatted_address);
    });
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
        const popup = document.getElementById(grandma.id);
        popup &&
          popup.addEventListener("click", function(e) {
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

      marker.addListener("mouseover", () => {
        this.markers.map(markInfo => {
          return markInfo[1].close(this.map, markInfo[0]);
        });
        infoWindow.open(this.map, marker);
      });

      marker.addListener("click", () => {
        this.props.handleClick(grandma.id);
      });
    });
  };

  render() {
    return (
      <div className="map-main">
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
