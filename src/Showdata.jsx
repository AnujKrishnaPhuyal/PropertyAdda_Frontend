import React, { useEffect, useState } from "react";
import axios from "axios";
function Showdata() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const datas = await axios.get("http://127.0.0.1:8000/api/property/");
        // console.log(datas.data);
        setHouses(datas.data); // Update the state with fetched data
      } catch (error) {
        console.log("error is", error);
      }
    }
    getData();
  }, []);
  // const path = "http://localhost:3000/";
  console.log(houses);
  return (
    <div>
      {houses.map((house, index) => (
        <div key={index}>
          <h1>{house.id}</h1>
          <h2>{house.name}</h2>
          <h3>{house.daley_name}</h3>
          <img src={house.img1} alt="Image 1" height={200} width={200} />
          <img src={house.img2} alt="Image 2" height={200} width={200} />
          <img src={house.img3} alt="Image 3" height={200} width={200} />
          <img
            src={house.daley_image}
            alt="Daley Image"
            height={200}
            width={200}
          />{" "}
        </div>
      ))}
    </div>
  );
}

export default Showdata;
