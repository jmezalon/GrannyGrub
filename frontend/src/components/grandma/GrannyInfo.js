import React from "react";
import { Link } from "react-router-dom";

const GrannyInfo = ({ grandma, id }) => {
  return (
    <>
      <div className="granny-profile-display">
        <label htmlFor="full Name" />
        <h1> Welcome Granny {grandma.last_name}</h1>
      </div>

      <img
        id="granny-view-granny-pic"
        alt=""
        src={
          grandma.profile_pic
            ? grandma.profile_pic
            : "http://icons.iconarchive.com/icons/pelfusion/long-shadow-media/256/Contact-icon.png"
        }
      />
      <div id="info-box">
        <p>Your Info</p>
        <label htmlFor="contact" />
        <h3> Contact information: </h3>
        <p>{grandma.email}</p>
        <p>{grandma.phone_number}</p>
        <div id="granny-address">
          <label htmlFor="address" />
          <h3> Operating Address: </h3>
          <h6>
            {grandma.building_number} {grandma.address} {grandma.zip_code}
          </h6>
        </div>
        <div id="granny-bio">
          <label htmlFor="bio" />
          <h3> About you: </h3>
          <p>{grandma.bio}</p>
        </div>
      </div>

      <div className="edit-page">
        <Link to={`/grandma/edit/${id}`}>
          <input type="button" value="edit" />
        </Link>
      </div>
    </>
  );
};

export default GrannyInfo;
