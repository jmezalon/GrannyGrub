import React from "react";
import { Link } from "react-router-dom";

const CookPortal = () => {
  return (
    <>
      <div className="cookPortal">
        <h3> Cook Portal </h3>
        <div>
          <Link to="/login">
            <button> Log In</button>
          </Link>{" "}
          <Link to="/signup">
            <button> Sign Up </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CookPortal;
