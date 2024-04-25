import React from "react";
import Navbar from "../components/Navigation/Navbar";
import styles from "./Rent.module.css";
import Rent_Sidebar from "./Rent_Sidebar/Rent_Sidebar";
import Rent_upbar from "./Rent_upbar/Rent_upbar";
import { Globalcontext } from "../components/Apicall";
import Display_Grid from "./Display_all/Display_Grid";
import { Rent_GLobalcontext } from "./Rent_Api";

function Rent() {
  return (
    <div className={styles.container}>
      <div className={styles.sortwala}>
        <Rent_upbar />
      </div>
      <div className={styles.grid_sidebar}>
        <div className={styles.sidebar}>
          <Rent_Sidebar />
        </div>
        <div className={styles.gridview}>
          <Display_Grid  />
        </div>
       
      </div>
    </div>
  );
}

export default Rent;
