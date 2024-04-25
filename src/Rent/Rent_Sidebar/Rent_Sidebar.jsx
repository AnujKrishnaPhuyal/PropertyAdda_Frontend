import React, { useEffect } from "react";
import { Globalcontext } from "../../components/Apicall";
import styles from "./Rent_Sidebar.module.css";
import { Rent_GLobalcontext } from "../Rent_Api";
function Rent_Sidebar() {
  const {
    all_rent_products,
    Update_fields,
    activeButton,
    setActiveButton,
    filters: { text },
    filter_rent_products,
    suggestion,
  } = Rent_GLobalcontext();

  const getUniquename = (data, value) => {
    let new_data = data.map((currelem) => {
      return currelem[value].toUpperCase();
    });
    new_data = ["All", ...new Set(new_data)];
    return new_data;
  };
  const Unique_name = getUniquename(all_rent_products, "name");
  // console.log("🚀 ~ Rent_Sidebar ~ Unique_name:", Unique_name);

  useEffect(() => {
    setActiveButton("All");
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Category</h1>
      </div>
      <div className={styles.btn_container}>
        {Unique_name.map((currelem, index) => {
          return (
            <button
              key={index}
              type="button"
              name="name"
              value={currelem}
              onClick={Update_fields}
              className={
                activeButton === currelem ? styles.active : styles.nonactive
              }
            >
              {currelem}
            </button>
          );
        })}
      </div>
      <form
        action={(e) => {
          e.preventDefault();
        }}
        onChange={Update_fields}
      >
        <input type="text" name="text" value={text} />
        {text && (
          <ul>
            {suggestion.map((curr, index) => (
              <li key={index}>{curr.location}</li>
            ))}
          </ul>
        )}
      </form>

      {/* {suggestion} */}
    </div>
  );
}

export default Rent_Sidebar;
