import React from "react";
import styles from "./Single_card_desc.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

// import FaLocation   from "react-icons/fa";
function Single_card_desc(props) {
  const selectedItem = props.details;
  return (
    <div className={styles.container}>
      <div className={styles.head_container}>
        <h1 className={styles.first_h1}>{selectedItem.type}</h1>
        <h1 className={styles.first_h2}>{selectedItem.price}</h1>
      </div>
      <div className={styles.location}>
        <IoLocationOutline />

        <h3>{selectedItem.location}</h3>
      </div>
      <div className={styles.icons_container}>
        <button className={styles.fb_btn}>
          <a href="https://www.facebook.com">
            <FaFacebook />
            <h5>Facebook</h5>
          </a>
        </button>
        <button className={styles.insta_btn}>
          {" "}
          <a href="https://www.instagram.com">
            <FaInstagram />
            <h5>Instagram</h5>
          </a>
        </button>
        <button className={styles.phone_btn}>
          {" "}
          <a href="https://www.instagram.com">
            <FaPhone />
            <h5>Phone</h5>
          </a>
        </button>
      </div>
     
    </div>
  );
}

export default Single_card_desc;
