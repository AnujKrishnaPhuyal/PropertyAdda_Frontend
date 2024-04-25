import React from "react";
import cardsData from "./files";
import { Link } from "react-router-dom";
function TrailsDesc() {
  return (
    <div>
      {cardsData.map((cards, index) => (
        <Link to={`Trails/${cards.id}`} key={index}>
          <h1 key={index}>{cards.id}</h1>
        </Link>
      ))}
    </div>
  );
}

export default TrailsDesc;
