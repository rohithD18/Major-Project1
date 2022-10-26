import React from "react";
import { Link } from "react-router-dom";

const Openingpage = () => {
  return (
    <div className="sample">
      <center>
        <h1 className="samh1">TOUCH</h1>
        <Link to="/login">
          <h3 className="loginlink">Login</h3>
        </Link>
      </center>
    </div>
  );
};

export default Openingpage;
