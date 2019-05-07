import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
// import GrandmasDishes from "../dishes/dishes";
import PreviousOrders from "./UserOrders";
import UserInfo from "./UserInfo";

class UserDashboard extends Component {
  state = {
    hasOrder: false
  };

  componentWillMount() {
    this.props.getOneGrandma(this.props.id);
    // if (!this.props.hasOrder) {
    // this.props.getGrandmasDishes(this.props.id);
    // this.props.getAllOrdersForGrandma(this.props.id);
    // }
  }
  // <GrannyNavbar id={this.props.id} />
  render() {
    // console.log(this.props.id);
    return (
      <>
        <div className="usera_dash">
          <div className="top-user-dash">
            <UserInfo grandma={this.props.grandma} id={this.props.id} />
          </div>
          <div id="bottom-user-dash">
            <PreviousOrders hasOrder={this.state.hasOrder} />
            <div>
              <div className="add-favorite">
                <Link to={`/mainpage`}>
                  <input type="button" value="Add a new favorite dish!" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserDashboard);

// <button
// onClick={() =>
//   this.props
//   .logoutUser()
//   .then(() => this.props.history.push("/auth/login"))
// }
// >
// {" "}
// logout{" "}
// </button>
