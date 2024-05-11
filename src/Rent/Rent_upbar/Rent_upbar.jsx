import React, { useState } from "react";
import styles from "./Rent_upbar.module.css";
import { Rent_GLobalcontext } from "../Rent_Api";
function Rent_upbar(props) {
  const data = props.details;
  const {
    sorting,
    Update_fields,
    filters: { text },
  } = Rent_GLobalcontext();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.search_field_bar}>
        <form
          action={(e) => {
            e.preventDefault();
          }}
          onChange={Update_fields}
        >
          <label htmlFor="">
            Location:
            <input type="text" name="text" value={text} />
          </label>
        </form>
      </div>
      <p>
        <span>{data} </span>number of products found
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
