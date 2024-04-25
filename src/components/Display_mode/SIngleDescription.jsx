import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Cardinfo_display from "../Cardinfo_display/Cardinfo_display";
import SingleProductDesc from "../SingleProductDesc/SingleProductDesc";

function SIngleDescription() {
  return (
    <div>
      <Navbar />
      <SingleProductDesc />
      <br />
      <Footer />
    </div>
  );
}

export default SIngleDescription;
