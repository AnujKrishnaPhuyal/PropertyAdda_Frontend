import React from "react";
import Card from "../CardView/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axiosInstance from "../User_Api_fetch/API_FETCH";
function Privatepath() {
  const [final_data, setfinal_data] = useState([]);
  const url = "http://127.0.0.1:8000/api/User_based_data/";

  // const getData = async () => {
  //   try {
  //     const response = await axios.get("User_based_data/", {
  //       headers: {
  //         Authorization: "JWT " + localStorage.getItem("access"),
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     const received = await response.data;
  //     console.log("🚀 ~ getData ~ received:", received.data);
  //     const { data } = received;
  //     setfinal_data(data);
  //   } catch (error) {
  //     console.log("🚀 ~ getData ~ error:", error);
  //   }
  // };

  const getData = async () => {
    await axiosInstance
      .get("User_based_data/", {})
      .then(function (response) {
        console.log("🚀 ~ response:", response);

        axiosInstance.defaults.headers["Authorization"] =
          "JWT " + localStorage.getItem("access");

        const { data } = response.data;
        if (data) {
          setfinal_data(data);
        }
      })
      .catch(function (error) {
        console.log("🚀 ~ Lugin ~ error:", error);
      });
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
