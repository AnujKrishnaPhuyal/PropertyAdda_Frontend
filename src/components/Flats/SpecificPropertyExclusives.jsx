import React from "react";
import Rent_upbar from "../../Rent/Rent_upbar/Rent_upbar";
import Navbar from "../Navigation/Navbar";
import Card from "../CardView/Card";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";
function SpecificPropertyExclusives() {
    const { Exclusives_products } = Rent_GLobalcontext();
    let number = Exclusives_products.length;
  return (
    <div>
    <Navbar />
    <Rent_upbar details={number} />
    <Card details={Exclusives_products} />
  </div>
  )
}

export default SpecificPropertyExclusives
