import React, { useState } from "react";
import styles from "./flats.module.css";
import { Link, NavLink } from "react-router-dom";
import Card from "../CardView/Card";
import { Globalcontext } from "../Apicall";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";
function Flats() {
  const { filter_Apartment_products } = Rent_GLobalcontext();
  const limited_product = filter_Apartment_products.slice(0, 3);
  return (
    <div className={styles.container}>
      <div className={styles.headings}>
        <h1>Flats and Apartments</h1>
        <Link to="/FlatsANdApartments/">
          <button className="btn">View All</button>
        </Link>
      </div>
      <Card details={filter_Apartment_products} />
    </div>
  );
}

export default Flats;
