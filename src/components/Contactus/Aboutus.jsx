import React from "react";
import Team from "./Team";
import styles from "./Aboutus.module.css";

function Aboutus() {
  // const url = "http://localhost:3000/";
  const url = "https://rentalforyou.netlify.app/";
  return (
    <div className={styles.main_class}>
      <div className={styles.image}>
        <div className={styles.aboutus_desc}>
          <h1>About Property Adda</h1>
          <p>
            Property Adda Pvt. Ltd. is a distinguished real estate brokerage
            agency in Nepal, specializing in both buying and renting properties.
            With our commitment to excellence and integrity, we have earned the
            trust of our clients. Our slogan,{" "}
            <span>
              {" "}
              "प्रपर्टी अड्डा - प्रपर्टीको अड्डा जस्तो नाम, त्यसै काम।"{" "}
            </span>
            (Property Adda - Artistry in real estate, trust in every
            transaction), reflects our dedication to quality service and
            reliability in the industry.
          </p>
        </div>

        <img src={`${url}images/contactus.jpg`} alt="contaus" />
      </div>
      <div className={styles.more_desc}>
        <p>
          With a committed team of 50 members, Property Adda Pvt. Ltd. has
          embarked on its journey to serve clients with transparency and
          integrity. Our clients choose us because they value our commitment to
          providing trustworthy and reliable services.
        </p>
        <p>
          At Property Adda, we are dedicated to offering a diverse range of
          property options to our clients. Whether you're a student seeking a
          room for rent or a homeowner looking to buy or sell, we cater to your
          needs. With over 1000+ properties provided to date, we prioritize
          understanding our clients' requirements and matching them with
          suitable properties. Additionally, we offer legal advice through our
          experienced lawyers and provide quick loan services to genuine
          clients.
        </p>
        <p>
          If you are seeking an effective real estate brokerage service in
          Nepal, entrust your needs to Property Adda Pvt. Ltd. Contact us today
          to experience our exceptional services and expertise in the industry.
        </p>
      </div>
      <div className={styles.team_members}>
        <h1>Team Members</h1>
        <Team />
      </div>
    </div>
  );
}

export default Aboutus;
