import React from "react";
import { Globalcontext } from "../../components/Apicall";
import Card from "../../components/CardView/Card";
import styles from "./Display_Grid.module.css";
import { Rent_GLobalcontext } from "../Rent_Api";
function Display_Grid() {
  const {filter_rent_products} = Rent_GLobalcontext();
   
  return (
    <div className={styles.container}>
      <Card details={filter_rent_products} />
    </div>
  );
}

export default Display_Grid;
