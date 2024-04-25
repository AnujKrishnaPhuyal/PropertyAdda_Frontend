import React from "react";
import styles from "./Card.module.css";
import { NavLink, Link } from "react-router-dom";
// import Flats from "../Flats/Flats";
function Card(props) {
  const detail = props.details;
  // console.log(detail);
  return (
    <div className={styles.maincard}>
      {/* Map over the details array and render a card for each item */}
      {detail.map((card, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.card_img}>
            <Link to={`/SIngleDescription/${card.id}`} key={index}>
              <img src={card.img3} alt="card_image" />
            </Link>
          </div>
          <Link to={`/SIngleDescription/${card.id}`} key={index}>
            <div className={styles.card_desc}>
              <h3>{card.type}</h3>
              <p>{card.location}</p>
              <p>{card.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Card;
