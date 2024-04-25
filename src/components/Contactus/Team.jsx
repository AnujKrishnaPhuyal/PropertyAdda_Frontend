import React from "react";
import styles from "./Team.module.css";
import { teammembers } from "./TeamMembers";
function Team() {
  const url = "http://localhost:3000/";

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        {teammembers.map((curr, index) => (
          <div key={index}>
            <img src={curr.img} alt="teamimg" />
            <div className={styles.team_details}>
              <p>{curr.Name}</p>
              <p>{curr.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
