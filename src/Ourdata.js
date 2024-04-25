import React, { useEffect, useState } from "react";
import axios from "axios";
function Ourdata() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const all = await axios.get("http://127.0.0.1:8000/api/property/");
        // console.log(all.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>h1</h1>
    </div>
  );
}

export default Ourdata;
