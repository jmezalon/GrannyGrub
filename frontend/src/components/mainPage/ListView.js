import React, { Component } from "react";
import icon from "../../assets/icon.png";
import axios from "axios";
import MapView from "./MapView";

class ListView extends Component {
  render() {
    let { grandmas, handleClick } = this.props;
    if (!grandmas.length) return null;
    const grannies = grandmas.map(granny => {
      return (
        <div
          className="list-view-item"
          key={granny.id}
          onClick={() => handleClick(granny.id)}
        >
          <h3>Grandma {granny.last_name}</h3>
          <img src={granny.profile_pic} alt="" />
          <p>{granny.cuisine_type} style</p>
        </div>
      );
    });
    return (
      <div className="list-view-page">
        <div className="list-view-container">{grannies}</div>
        <div className="map-list">
          <MapView handleClick={handleClick} grandmas={grandmas} />
        </div>
      </div>
    );
  }
}

export default ListView;
