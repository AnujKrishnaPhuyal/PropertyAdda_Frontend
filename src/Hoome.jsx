import React, { useEffect } from "react";
import { Globalcontext } from "./components/Apicall";
import { useParams } from "react-router-dom";
function Home() {
  const url = "http://127.0.0.1:8000/api/property/";
  const { get_Single_Data, single_product } = Globalcontext();
  const { id } = useParams();
  console.log(single_product);
  useEffect(() => {
    get_Single_Data(`${url}${id}`);
  }, []);
  return (
    <div>
      <h1>hi is the single product page</h1>
    </div>
  );
}

export default Home;
