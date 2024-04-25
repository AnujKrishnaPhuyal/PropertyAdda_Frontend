import React from "react";
import styles from "./Search_Banner.module.css";

function Search_Banner() {
  return (
    <div className={`${styles.Banner}`}>
      <div>
        <h1>"Unlock Your Perfect Stay Find Your Dream Rental Today!"</h1>
      </div>
      <form className={styles.search_btn}>
        <input type="text" name="search" />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default Search_Banner;
