import React from "react";
import Navbar from "../Navigation/Navbar";
import Search_Banner from "../SearchBanner/Search_Banner";
import Flats from "../Flats/Flats";
import Footer from "../Footer/Footer";
import Apartment from "../Flats/Apartment";
import Exclusives from "../Flats/Exclusives";
import CreateProperty from "../CreateProperty/CreateProperty";

function Home() {
  return (
    <div>
      <Navbar />
      <Search_Banner />
      <Flats />
      <Apartment/>
      <Exclusives/>
      <Footer />
      
    </div>
  );
}

export default Home;
