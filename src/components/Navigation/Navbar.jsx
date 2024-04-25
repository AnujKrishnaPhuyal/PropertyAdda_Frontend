import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const url = "http://localhost:3000";
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <Link to="/">
          <img src={`${url}/images/d00.png`} alt="logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          {/* <a href="#">Home</a> */}
        </li>
        <li>
          <Link to="/Rent/">
            <a href="#">Rent</a>
          </Link>
        </li>
        <li>
          <Link to="/About/">About us</Link>
        </li>
        <li>
          <Link to="/Contact/">Contact us</Link>
        </li>
      </ul>{" "}
      <div>
        <Link to="/AddProperty/">
          <button className={`${styles.nav_btn}`}>List your Property</button>
        </Link>
        <Link to="/signup/">
          <button className={`${styles.nav_btn}`}>Login/SignUp</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
