import React, { Component } from "react";
import icon from "../../assets/icon.png";
import axios from "axios";
import "../../css/mainpage/ListView.css";

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
          <p>{granny.last_name}</p>
          <img src={granny.profile_pic} alt="" />
        </div>
      );
    });
    return (
      <div className="list-view-container">
        <h2>Grandmas near you</h2>
        {grannies}
      </div>
    );
  }
}

export default ListView;
