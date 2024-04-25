import React, { useState } from "react";
import styles from "./flats.module.css";
import { NavLink } from "react-router-dom";
import Card from "../CardView/Card";
import { Globalcontext } from "../Apicall";

function Apartment() {
  const { all_Products } = Globalcontext();
  const limited_product = all_Products.slice(0, 3);
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>Rooms</h1>
        <button className="btn">View All</button>
      </div>
      <Card details={limited_product} />
    </div>
  );
}

export default Apartment;