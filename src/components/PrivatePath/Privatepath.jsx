import React from "react";
import Card from "../CardView/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
function Privatepath() {
  const [final_data, setfinal_data] = useState([]);
  const url = "http://127.0.0.1:8000/api/User_based_data/";

  const getData = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "JWT " + localStorage.getItem("access"),
          "Content-Type": "multipart/form-data",
        },
      });
      const received = await response.data;
      console.log("🚀 ~ getData ~ received:", received.data);
      const { data } = received;
      setfinal_data(data);
    } catch (error) {
      console.log("🚀 ~ getData ~ error:", error);
    }
  };

  useEffect(() => {
    getData(url);
    // console.log(getData(url));
  }, []);

  return (
    <div>
      {final_data && (
        <div>
          <h3>welcome to user interface</h3>
          <h2>YOur added properties are:</h2>
          <UserCard details={final_data} />
        </div>
      )}
    </div>
  );
}

export default Privatepath;
