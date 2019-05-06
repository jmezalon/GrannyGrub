import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import GrandmasDishes from "../dishes/dishes";
import Orders from "./grandmaOrders";
import GrannyInfo from "./GrannyInfo";

class Dashboard extends Component {
  // state = {
  //   newGrandma: false
  // };

  componentWillMount() {
    this.props.getOneGrandma(this.props.id);
    // if (!this.props.hasOrder) {
    this.props.getGrandmasDishes(this.props.id);
    this.props.getAllOrdersForGrandma(this.props.id);
    // }
  }
  // <GrannyNavbar id={this.props.id} />
  render() {
    // console.log(this.props.id);
    return (
      <>
        <div className="grandma_dash">
          <div className="top-granny-dash">
            <GrannyInfo grandma={this.props.grandma} id={this.props.id} />
          </div>
          <div id="bottom-granny-dash">
            <div id="granny-orders">
              <Orders
                hasOrder={this.props.hasOrder}
                orders={this.props.orders}
              />
            </div>

            <div className="granny_dishes">
              <h2>Your current offerings:</h2>

              <GrandmasDishes
                deleteDish={this.props.deleteDish}
                dishes={this.props.dishes}
              />

              <div className="add-dish">
                <Link to={`/grandma/newdish`}>
                  <input type="button" value="Add a new dish!" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Dashboard);

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
