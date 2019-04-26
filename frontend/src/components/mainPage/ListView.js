import React, { Component } from "react";
import icon from "../../assets/icon.png";
import axios from "axios";
import MapView from "./MapView";

class ListView extends Component {
  state = { hoveredGrandmaId: false };

  handleGrandmaListItemHover = hoveredGrandmaId => {
    // console.log(grandmaId);
    this.setState({ hoveredGrandmaId });
  };

  render() {
    let { grandmas, handleClick, center, zoom } = this.props;
    if (!grandmas.length) return null;

    const grannies = grandmas.map(granny => {
      return (
        <div
          className="list-view-item"
          key={granny.id}
          onMouseEnter={() => this.handleGrandmaListItemHover(granny.id)}
          onMouseLeave={() => this.handleGrandmaListItemHover(false)}
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
        {/* TODO use an <ul> */}
        <div className="list-view-container">{grannies}</div>
        <div className="map-list">
          <MapView
            zoom={zoom}
            center={center}
            handleClick={handleClick}
            hoveredGrandmaId={this.state.hoveredGrandmaId}
            grandmas={grandmas}
          />
        </div>
      </div>
    );
  }
}

export default ListView;
