import React, { Component } from "react";

class MainPage extends Component {
  componentDidMount = () => {
    // debugger;
    this.props.getAllGrandmas();
  };

  render() {
    // debugger;
    return <div>Main Page</div>;
  }
}

export default MainPage;
