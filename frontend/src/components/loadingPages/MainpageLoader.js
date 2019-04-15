import React from "react";
import logo from "../../assets/logo.png";

export const MainPageLoader = () => {
  return (
    <div className="loading">
      <img id="loading-logo" alt="" src={logo} />
      <br />
      <h3>Loading Grandmas...</h3>
    </div>
  );
};
