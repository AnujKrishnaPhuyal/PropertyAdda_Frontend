import React from "react";
import Navbar from "../Navigation/Navbar";
import styles from "./Contactus.module.css";
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
      </div>{" "}
    </div>
  );
}

export default Contactus;
