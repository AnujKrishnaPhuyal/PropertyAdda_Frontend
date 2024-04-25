import React, { useState } from "react";
import styles from "./Rent_upbar.module.css";
import { Rent_GLobalcontext } from "../Rent_Api";
function Rent_upbar() {
  const {
    sorting,
    Update_fields,
    filter_rent_products,
    
  } = Rent_GLobalcontext();
  let number = filter_rent_products.length;
  // console.log("🚀 ~ Rent_upbar ~ number:", number);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
    
      <p>
        <span>{number} </span>number of products found
      </p>
      <div className={styles.sort_items}>
        <form action="#" className={styles.form_container}>
          <label htmlFor="">Sort by</label>
          <select name="sort" id="sort" onClick={sorting}>
            <option value="All">All</option>
            <option value="lowest">price(lowest)</option>
            <option value="highest">price(highest)</option>
            <option value="a-z">location(a-z)</option>
            <option value="z-a">location(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default Rent_upbar;
