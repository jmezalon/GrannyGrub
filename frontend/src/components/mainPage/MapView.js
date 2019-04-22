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
  }

  componentDidUpdate(prevProps) {
    this.updateMap();
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

  infoWindow = (lastname, pic, cuisine) => {
    const divstyle = { width: "20px", height: "20px" };
    return `
<div class="info">
  <p>Grandma  ${lastname}</p>
  <div id="image">
  <img src=${pic}   alt="" />
  </div>
  <p>${cuisine} style</p>
</div>
`;
  };

  componentDidMount() {
    const zoom = this.props.showingMap ? 11 : 10;
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.639286, lng: -73.951499 },
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

    this.updateMap();
  }

  updateMap = () => {
    if (this.markers.length) {
      this.markers.forEach(marker => {
        marker[0].setMap(null);
      });
    }

    this.markers = [];

    this.props.grandmas.forEach(grandma => {
      // console.log(grandma.latitude, grandma.longitude);

      const infoWindow = new window.google.maps.InfoWindow({
        content: this.infoWindow(
          grandma.last_name,
          grandma.profile_pic,
          grandma.cuisine_type
        )
      });

      const marker = new window.google.maps.Marker({
        position: { lat: grandma.latitude, lng: grandma.longitude },
        map: this.map,
        icon,
        title: grandma.last_name
      });
      this.markers.push([marker, infoWindow]);

      var myListener = marker.addListener("mouseover", () => {
        this.markers.map(markInfo => {
          markInfo[1].close(this.map, markInfo[0]);
        });
        infoWindow.open(this.map, marker);
      });

      // marker.addListener("mouseout", () => {
      //   infoWindow.close(this.map, marker);
      //   // console.log(marker);
      // });
      marker.addListener("click", () => {
        this.props.handleClick(grandma.id);
      });
    });
  };

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
      <div className={showingMap ? "map-main" : "map-list-veiw"}>
        <div id="map" />
      </div>
    );
  }
}

export default MapView;
