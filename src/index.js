import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/Apicall";
import Home from "./components/Display_mode/Home";
import SIngleDescription from "./components/Display_mode/SIngleDescription";
import Signup from "./components/LoginSignup/Signup";
import Lugin from "./components/LoginSignup/Lugin";
import NavRent from "./components/Display_mode/NavRent";
import { RentAppprovider } from "./Rent/Rent_Api";
import CreateProperty from "./components/CreateProperty/CreateProperty";
import AddProperty from "./components/Display_mode/AddProperty";
import Contactus from "./components/Contactus/Aboutus";
import Contact from "./components/Display_mode/Contact";
import About from "./components/Display_mode/About";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import Privatepath from "./components/PrivatePath/Privatepath";
import USERDASH from "./components/Display_mode/USERDASH";
import EditProperty from "./components/CreateProperty/EditProperty";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RentAppprovider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup/" element={<Signup />} />
            <Route path="/Lugin/" element={<Lugin />} />
            <Route path="/user/" element={<USERDASH />} />
            <Route path="/Rent/" element={<NavRent />} />
            <Route path="/Contact/" element={<Contact />} />
            <Route path="/About/" element={<About />} />{" "}
            {/* <Route path="/private/" element={<Privatepath />}>
              <Route path="UserDashboard" element={<UserDashboard />} />
            </Route> */}
            <Route path="/AddProperty/" element={<AddProperty />} />
            <Route
              path="/SIngleDescription/:id/"
              element={<SIngleDescription />}
            />
            <Route path="/EditProperty/:id/" element={<EditProperty />} />
          </Routes>
        </Router>
      </RentAppprovider>
    </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
