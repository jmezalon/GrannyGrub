import React, { Component } from "react";

class MainPage extends Component {
  componentDidMount() {
    debugger;
    this.props.getAllUsers();
    this.props.getAllGrandmas();
  }

  render() {
    if (!this.props.grandmas.grandmas.length) return null;
    const locations = this.props.grandmas.grandmas.map(granny => {
      return { lat: granny.latitude, lng: granny.longitude };
    });
    debugger;
    console.log(locations);
    return <div>Main Page</div>;
  }
}

export default MainPage;
