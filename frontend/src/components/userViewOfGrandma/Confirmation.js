import React from "react";
import { withRouter, Link } from "react-router-dom";
import { Modal } from "./Modal.js";
import queryString from "query-string";

const Confirmation = ({ location: { search } }) => {
  // <img style={{ width: "300px" }} src={dish.img_url} alt={dish.name} />

  // TODO update our server side db.

  let mockGrandmaPic = "http://placekitten.com/200/300";
  let mockLasagnaPic = "http://placekitten.com/200/300";
  let lastName = "Malmberg";
  const dishType = "pick-up";
  const dishTimeframe = "dinner";
  const dishDate = "Fri May 03 2019 17:36:51 GMT-0400 (Eastern Daylight Time)";

  const { price, count, name, grandma } = queryString.parse(search);
  let formattedPrice = (parseFloat(price, 10) * parseInt(count)).toFixed(2);

  return (
    <Modal>
      <div className="confirm-info-container">
        <h1>Your receipt:</h1>
        <p>Order Total: ${formattedPrice}</p>
        <h2>
          {dishType === "pick-up" ? (
            <label>
              {count} {name}(s) for pickup
            </label>
          ) : (
            <label>
              {count} {name}(s) to sit down
            </label>
          )}
        </h2>

        <h2>From Grandma {lastName}</h2>
        <img
          className="confirm-granny-img"
          src={mockGrandmaPic}
          alt={"grandma Klein"}
        />
        <p>
          {/* Address: {dish.building_number} {dish.address} {dish.zip_code} */}
          Address: 24 Jump Street, 123 45
        </p>

        <p>
          Time: {dishType === "pick-up" ? "around" : "at"} {dishTimeframe}{" "}
          {dishDate.slice(0, 10) ? "on" : ""}{" "}
          {dishDate.slice(0, 10) ? dishDate.slice(0, 10) : ""}
        </p>
        <p>Grandma {lastName} cannot wait to see you!!!</p>
        <h1>Thank You!</h1>
      </div>
    </Modal>
  );
};

export default withRouter(Confirmation);
