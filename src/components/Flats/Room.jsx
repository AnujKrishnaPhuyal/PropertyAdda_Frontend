import React, { useState } from "react";
import styles from "./flats.module.css";
import { NavLink, Link } from "react-router-dom";
import Card from "../CardView/Card";
import { Globalcontext } from "../Apicall";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";

function Rooms() {
  const { filter_Room_products } = Rent_GLobalcontext();
  console.log("🚀 ~ Rooms ~ Room_products:", filter_Room_products);
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>Rooms</h1>
        <Link to="/Rooms/">
          <button className="btn">View All</button>
        </Link>
      </div>
      <Card details={filter_Room_products} />
    </div>
  );
}

export default Rooms;
