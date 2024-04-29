import React from "react";
import styles from "./More_details.module.css";
import { FaCarAlt } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";

import { GiShower } from "react-icons/gi";
import { FaToilet } from "react-icons/fa6";

function More_details() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {" "}
        <h1>Overview</h1>
      </div>
      <div className={styles.overview}>
        {" "}
        <div className={styles.overview_items}>
          <p>
            Parking
            <FaCarAlt className={styles.icon} />:<span>2</span>
          </p>
          <p>
            Parking <RiMotorbikeFill className={styles.icon} />:<span>2</span>
          </p>
        </div>
        <div className={styles.overview_items}>
          <p>
            Bedroom <MdOutlineBedroomParent />:<span>2</span>
          </p>
          <p>
            Kitchen <TbToolsKitchen2 />:<span>available</span>
          </p>
        </div>
        <div className={styles.overview_items}>
          <p>
            Attached Bathroom <GiShower />:<span>available</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default More_details;
