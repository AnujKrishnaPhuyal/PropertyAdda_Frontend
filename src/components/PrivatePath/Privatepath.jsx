import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { isloggedin  } from "../LoginSignup/Loginlogic";
function Privatepath() {
  if (isloggedin) {
    return (
      <div>
        <h1>welcome to user interface</h1>
      </div>
    );
  } else {
    return <div> sorry hai ta</div>;
  }
}

export default Privatepath;
