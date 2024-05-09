import React, { useEffect, useState } from "react";
import { Globalcontext } from "../Apicall";
import { useParams } from "react-router-dom";

function UserDelete() {
  const url = "http://127.0.0.1:8000/api/AllData/";
  const { get_Single_Data, single_product } = Globalcontext();
  const { id } = useParams();
  return (
    <div>
      <h1>u r deleted</h1>
    </div>
  );
}

export default UserDelete;
