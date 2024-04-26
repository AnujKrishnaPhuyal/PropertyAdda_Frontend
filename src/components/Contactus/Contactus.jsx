import React from "react";
import Navbar from "../Navigation/Navbar";
import styles from "./Contactus.module.css";
import Team from "./Team";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaStickyNote,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoTiktok } from "react-icons/io5";
import Daley_info from "../daley_details/Daley_info";
import Messageform from "./Messageform";

function Contactus() {
  return (
    <div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.2262186683934!2d85.30079127517226!3d27.741167723999446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18d01e40b701%3A0x1144c874912f1fff!2sNepaltar%20MicroBus%20Stop!5e0!3m2!1sen!2sus!4v1714046052744!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.footer_icons}>
        <p>Our social media handles</p>
        <a href="https://www.facebook.com">
          <FaFacebook className={styles.individual_icons} />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter className={styles.individual_icons} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram className={styles.individual_icons} />
        </a>
        <a href="https://www.Linkedin.com">
          <FaLinkedin className={styles.individual_icons} />
        </a>
        <a href="https://www.youtube.com">
          <FaYoutube className={styles.individual_icons} />
        </a>
        <a href="https://gmail.com">
          <BiLogoGmail className={styles.individual_icons} />
        </a>
        <a href="https://tiktok.com">
          <IoLogoTiktok className={styles.individual_icons} />
        </a>
      </div>
      <div className={styles.team_members}>
        <h1>Team Members</h1>
        <Team />
      </div>
      <div className={styles.form_container}>
        <h1>Send Us your message </h1>
        <div className={styles.form}>
          {" "}
          <Messageform />
        </div>
      </div>
    </div>
  );
}

export default Contactus;
