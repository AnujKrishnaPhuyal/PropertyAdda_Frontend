import { useLocation } from "react-router-dom";
import styles from "./UserDashboard.module.css";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import isLoggedin from "../LoginSignup/Loginlogic";

function UserDashboard() {
  const [newdata, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [final_data, setfinal_data] = useState(null);
  const url = "http://127.0.0.1:8000/api/home/";
  const location = useLocation();
  let userData = location.state?.userData;
  // console.log("🚀 ~ UserDashboard ~ userData:", userData);
  const { data } = userData;
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url); // Replace '/api/data' with your actual backend endpoint
        setData(response.data.value);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData(url);
  }, []);

  const filteredData = newdata.filter(
    (item) => item.user.username === userData.user
  );
  console.log("🚀 ~ UserDashboard ~ filteredData:", filteredData);

  console.log("🚀 ~ UserDashboard ~ newdata:", newdata);

  if (!userData) {
    // Handle case where user data is not available
    return <div>Loading...</div>;
  }

  // Use userData to display user information
  return (
    <div className={styles.container}>
      <h2>Welcome to the Dashboard page</h2>
      <h2>Mr. {userData.user}</h2>
      {filteredData &&
        filteredData.map((curr, index) => (
          <div key={index} className={styles.info}>
            <p>property type is:{curr.name}</p>
            <p>propertydescription:{curr.description}</p>
          </div>
        ))}
      <br />
      <br />
    </div>
  );
}
export default UserDashboard;
