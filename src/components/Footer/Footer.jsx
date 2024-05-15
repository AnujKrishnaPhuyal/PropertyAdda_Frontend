import React from "react";
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
import styles from "./Footer.module.css";
function Footer() {
  const url = "https://rentalforyou.netlify.app/";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.first_col}>
          <div className={styles.footer_intro}>
            <img src={`${url}/images/d00.png`} alt="logo" />
            <p>
              Welcome to Property Adda, your ultimate stop for rental properties
              in Nepal. Whether you're a student in search of a cozy room or a
              settled individual seeking a comfortable living space, our company
              offers a diverse range of options to cater to your needs. From
              rooms, flats, and apartments to houses, we provide a seamless,
              user-friendly experience that ensures transparency and efficiency
              in the rental process. Property Adda Pvt. Ltd. is dedicated to
              providing you with the best deals possible, ensuring a smooth and
              satisfying rental experience.
              <br />{" "}
              <span>
                "प्रपर्टी अड्डा - प्रपर्टीको अड्डा... जस्तो नाम, त्यसै काम।"
              </span>
            </p>
          </div>
          <div className={styles.footer_icons}>
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
        </div>
        <div className={styles.second_col}>
          <h3>Our Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>{" "}
            <li>
              <a href="#">All Properties</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Rooms</a>
            </li>
            <li>
              <a href="#">Flats and Apartments</a>
            </li>
            <li>
              <a href="#">Exclusives</a>
            </li>
          </ul>
        </div>
        <div className={styles.third_col}>
          <h1>Contact us</h1>
          <div className={styles.infos}>
            <p>propertyadda123@gmail.com</p>
            <p>Nepaltar,Kathmandu</p>
            <p>Nepal</p>
            <p>+977-9860937580,</p>
            <p>+977-9849144003,</p>
            <p>+977-9861282823</p>
          </div>
        </div>
      </div>
      <div className={styles.lower_part}>
        <p className={styles.p1}>
          © 2024 <span>Property Adda</span>. All Right Reserved
        </p>
        <p className={styles.p2}>
          Developed By-{" "}
          <span>
            <a href="https://www.anujkrishna.com.np/" target="_blank">
              Er. Anuj Krishna Phuyal
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
