import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { withRouter } from "react-router-dom";
import MarkerDisplay from "./MarkerDisplay";

const LocationsMap = withScriptjs(
  withGoogleMap(props => {
    //map through props and pass it down
    const { locations } = props;

    if (!locations) {
      return null;
    }
    let markers = locations.map((location, i) => {
      return (
        <MarkerDisplay
          key={i}
          location={{ lat: parseFloat(location.lat), lng: location.lng }}
        />
      );
    });
    return (
      <GoogleMap
        defaultZoom={11}
        center={{ lat: 40.7329992, lng: -73.9539064 }}
      >
        {markers}
      </GoogleMap>
    );
  })
);

export default withRouter(LocationsMap);
