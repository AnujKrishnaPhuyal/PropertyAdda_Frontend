import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.css";
import styles from "./Cardinfo_display.module.css";
import Daley_info from "../daley_details/Daley_info";
import MyComponent from "../Crausal/MyComponent";
import Single_card_desc from "../Single_card_desc/Single_card_desc";

function Cardinfo_display(props) {
  const product = props.details;
  return (
    <div className={styles.overall_container}>
      <div className={styles.image_and_info}>
        <MyComponent details={product} />
        <div className={styles.image_info}>
          <Single_card_desc details={product} />
        </div>
      </div>
      <div className={styles.agent_contact}>
        <Daley_info details={product} />
      </div>
    </div>
  );
}

export default Cardinfo_display;
