import React from "react";
import Navbar from "../Navigation/Navbar";
import Search_Banner from "../SearchBanner/Search_Banner";
import Flats from "../Flats/Flats";
import Footer from "../Footer/Footer";
import Exclusives from "../Flats/Exclusives";
import CreateProperty from "../CreateProperty/CreateProperty";
import Rooms from "../Flats/Room";
function Home() {
  return (
    <div>
      <Navbar />
      <Search_Banner />
      <Flats />
      <Rooms />
      <Exclusives />
      <Footer />
    </div>
  );
}

export default Home;
