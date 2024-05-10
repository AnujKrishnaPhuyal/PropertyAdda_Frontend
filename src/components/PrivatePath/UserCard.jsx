import React from "react";
import styles from "../CardView/Card.module.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../User_Api_fetch/API_FETCH";
function UserCard(props) {
  const detail = props.details;
  const navigate = useNavigate();
  // console.log(detail);
  const url = "http://127.0.0.1:8000/api/property/";

  const handleDeleteClick = async (id) => {
    const response = await axiosInstance
      .delete(`property/${id}/delete`, {})
      .then(function (response) {
        console.log("🚀 ~ handleDeleteClick ~ response:", response);
        alert("You have successfully deleted your property");
        navigate("/user/");
        window.location.reload();
      })
      .catch((error) => {
        alert("error in deleting the data");
      });
  };

  return (
    <div>
      <div className={styles.maincard}>
        {/* Map over the details array and render a card for each item */}
        {detail.map((card, index) => (
          <div>
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
            <div className={styles.user_buttons}>
              <Link to={`/EditProperty/${card.id}`}>
                <button className={styles.button1}>Edit</button>
              </Link>
              <button
                className={styles.button2}
                onClick={() => handleDeleteClick(card.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserCard;
