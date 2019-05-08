import React, { Component } from "react";
import { Link } from "react-router-dom";

const UserInfo = ({ grandma, id }) => {
  return (
    <>
      <div className="granny-profile-display">
        <label htmlFor="full Name" />
        <h1> Welcome User {grandma.last_name}</h1>
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
      </div>

      <div className="edit-page">
        <Link to={`/user/edit/${id}`}>
          <input type="button" value="edit" />
        </Link>
      </div>
    </>
  );
};

export default UserInfo;
