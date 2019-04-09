import React, { Component } from "react";

class MainPage extends Component {
  componentDidMount() {
    debugger;
    this.props.getAllUsers();
  }

  render() {
    debugger;
    return <div>Main Page</div>;
  }
}

export default MainPage;
