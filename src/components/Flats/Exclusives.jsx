import React, { useState } from "react";
import styles from "./flats.module.css";
import { NavLink, Link } from "react-router-dom";
import Card from "../CardView/Card";
import { Globalcontext } from "../Apicall";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";
function Exclusives() {
  const { filter_Exclusives_products } = Rent_GLobalcontext();
  console.log("🚀 ~ Exclusives ~ Exclusives_products:", filter_Exclusives_products);

  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>Exclusives</h1>
        <Link to="/Exclusives/">
          <button className="btn">View All</button>
        </Link>
      </div>
      <Card details={filter_Exclusives_products} />
    </div>
  );
}

export default Exclusives;
