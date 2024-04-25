import React from "react";
import CreateProperty from "../CreateProperty/CreateProperty";
import Footer from "../Footer/Footer";
import Navbar from "../Navigation/Navbar";

function AddProperty() {
  return (
    <div>
        <Navbar/>
      <CreateProperty />
      <Footer/>
    </div>
  );
}

export default AddProperty;
