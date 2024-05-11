import React from "react";
import Rent_upbar from "../../Rent/Rent_upbar/Rent_upbar";
import Navbar from "../Navigation/Navbar";
import Card from "../CardView/Card";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";
import styles from "./flats.module.css";

function SpecificPropertyAll() {
  const {
    Apartment_products,
    Update_fields,
    filters: { text },
    suggestion,
  } = Rent_GLobalcontext();
  let number = Apartment_products.length;

  return (
    <div>
      <Navbar />
      <Rent_upbar details={number} />
      <br />
      <br />
      <Card details={Apartment_products} />
    </div>
  );
}

export default SpecificPropertyAll;
