import React, { Children, useState, useEffect } from "react";
import Cardinfo_display from "../Cardinfo_display/Cardinfo_display";
import { useParams } from "react-router";
import { Globalcontext } from "../Apicall";
function SingleProductDesc() {
  // const url = "http://127.0.0.1:8000/api/property/";
  const url = "http://127.0.0.1:8000/api/AllData/";

  const { get_Single_Data, single_product } = Globalcontext();
  const { id } = useParams();
  // console.log("product name is", single_product);
  useEffect(() => {
    get_Single_Data(`${url}${id}`);
  }, []);

  return (
    <div>
      <Cardinfo_display details={single_product} />
    </div>
  );
}

export default SingleProductDesc;
// export { Appcontext, AppProvider, SingleProductDesc }
