import React from "react";
import Rent_upbar from "../../Rent/Rent_upbar/Rent_upbar";
import Navbar from "../Navigation/Navbar";
import Card from "../CardView/Card";
import { Rent_GLobalcontext } from "../../Rent/Rent_Api";
function SpecificPropertyRoom() {
    const { Room_products } = Rent_GLobalcontext();
    let number = Room_products.length;
  return (
    <div>
    <Navbar />
    <Rent_upbar details={number} />
    <Card details={Room_products} />
  </div>
  )
}

export default SpecificPropertyRoom
