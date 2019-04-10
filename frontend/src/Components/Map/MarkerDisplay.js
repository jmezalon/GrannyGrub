import React from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default class MarkerDisplay extends React.Component {
  state = {
    isOpen: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <>
        <Marker
          position={this.props.location}
          icon={{
            url: "https://furtaev.ru/preview/current_location_small.png",
            scaledSize: { width: 40, height: 40 }
          }}
        />
      </>
    );
  }
}
