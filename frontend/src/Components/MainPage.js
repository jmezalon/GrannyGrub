import React, { Component } from "react";
import MapContainer from "./Map/MapContainer";

class MainPage extends Component {
  componentDidMount() {
    this.props.getAllUsers();
    this.props.getAllGrandmas();
  }

  render() {
    if (!this.props.grandmas.grandmas.length) return null;
    const locations = this.props.grandmas.grandmas.map(granny => {
      return { lat: granny.latitude, lng: granny.longitude };
    });
    return (
      <div>
        <MapContainer locations={locations} />
      </div>
    );
  }
}

export default MainPage;
