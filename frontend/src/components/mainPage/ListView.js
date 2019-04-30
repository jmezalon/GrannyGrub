import React, { Component } from "react";
import icon from "../../assets/icon.png";
import axios from "axios";
import MapView from "./MapView";

class ListView extends Component {
  render() {
    let { grandmas, handleClick, handleGrandmaListItemHover } = this.props;
    // if (!grandmas.length) return null;

    const grannies = grandmas.map(granny => {
      return (
        <div
          className="list-view-item"
          key={granny.id}
          onMouseEnter={() => handleGrandmaListItemHover(granny.id)}
          onMouseLeave={() => handleGrandmaListItemHover(false)}
          onClick={() => handleClick(granny.id)}
        >
          <img src={granny.profile_pic} alt="" />
          <div className="grandma-list-info">
            <h3>Grandma {granny.last_name}</h3>
            <p>{granny.cuisine_type} style</p>
          </div>
        </div>
      );
    });

    return (
      <div className="list-view-page">
        {/* TODO use an <ul> */}
        <div className="list-view-container">{grannies}</div>
      </div>
    );
  }
}

export default ListView;
