import React from "react";
import { useParams } from "react-router-dom";
import cardsData from "./files";
function Trails() {
  const { id } = useParams();
  console.log({id})
  const house = cardsData.find((house) => house.id === parseInt(id));
  const img_path = "http://localhost:3000";
  if (!house) {
    return <div>House not found</div>;
  }
  const imagee = parseFloat(house.img);

  console.log(house.img);

  return (
    <div>
      {/* <img src={require("./images/banner.jpg")} alt="" srcset="" /> */}
      <img src={`${img_path}/${house.img}`} alt={house.id} height={200}width={200} />
      <h2>{house.type}</h2>
      <p>{house.location}</p>
      <p>{house.price}</p>
      <p>{house.daley_name}</p>
      <p>{house.daley_number}</p>
    </div>
  );
}

export default Trails;
