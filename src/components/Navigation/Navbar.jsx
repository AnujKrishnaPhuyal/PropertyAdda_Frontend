import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { isloggedin } from "../LoginSignup/Loginlogic";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const url = "http://localhost:3000";
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const [isLoggenIn, setisLoggenIn] = useState(false);

  useEffect(() => {
    setisLoggenIn(isloggedin());
  }, []);

  const logout = () => {
    localStorage.clear("access");
    localStorage.clear("refresh");
    alert("you are logged out ");
    navigate("/");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.logo}`}>
        <Link to="/">
          <img src={`${url}/images/d00.png`} alt="logo" />
        </Link>
      </div>
      <ul className={showMenu ? "show" : ""}>
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
        {isLoggenIn ? (
          <Link to="/AddProperty/">
            <button className={`${styles.nav_btn}`}>List your Property</button>
          </Link>

        ) : (
          <Link to="/lugin/">
            <button className={`${styles.nav_btn}`}>List your Property</button>
          </Link>
        )}

        {isLoggenIn ? (
          <button className={`${styles.nav_btn}`} onClick={logout}>
            Logout
          </button>
        ) : (
          <Link to="/signup/">
            <button className={`${styles.nav_btn}`}>Login/SignUp</button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
