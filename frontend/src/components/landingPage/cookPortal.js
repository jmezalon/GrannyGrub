import React from "react";
import { Link } from "react-router-dom";

const CookPortal = () => {
  return (
    <>
      <div className="cookPortal">
        <h3> Cook Portal </h3>
        <div>
          <Link to="/auth/login">
            <button> Log In</button>
          </Link>{" "}
          <Link to="/auth">
            <button> Sign Up </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CookPortal;
