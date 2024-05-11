import React, { useEffect, useState } from "react";
import { MdOutlinePhone } from "react-icons/md";

import styles from "./Daley_info.module.css";
function Daley_info(props) {
  const formdata = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const selectedItem = props.details;
  // const image_path = "http://localhost:5173";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can handle form submission logic here
    console.log("Form submitted!");
  };
  if (!selectedItem) return <div>Item not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.daley_info}>
        <img src={selectedItem.daley_image} alt="Owner" />

        <div className={styles.detail}>
          <p>{selectedItem.daley_name}</p>
          <div className={styles.daley_detail}>
            <MdOutlinePhone />
            <p>{selectedItem.daley_number}</p>
          </div>
        </div>
      </div>
      <h2>Contact For Enquiry</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input_fields}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={formdata.name}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div className={styles.input_fields}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formdata.email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </div>
        <div className={styles.input_fields}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={formdata.phone}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className={styles.input_fields}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={formdata.message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Hi, I am interested in this CG Hills Premium House, Bhaisepati"
          />
        </div>
        <button type="submit" className={styles.submit_btn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Daley_info;
