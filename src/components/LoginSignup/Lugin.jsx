import React from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Loginschema } from "../../schemas/Loginschema";
import { signUpSchema } from "../../schemas/schemas";
// import axios from "axios";
import CreateProperty from "../CreateProperty/CreateProperty";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../User_Api_fetch/API_FETCH";
function Lugin() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [Signup_data, setSignup_data] = useState([]);
  const [Success_msg, setSuccess_msg] = useState(null);
  const [errordata, seterrordata] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loginuser, setloginuser] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {}, [userData]);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Loginschema,
      onSubmit: (values) => {
        console.log("🚀 ~ Lugin ~ values:", values);
        // const logindata = {
        //   email: values.email,
        //   password: values.password,
        // };
        // console.log("🚀 ~ Lugin ~ logindata:", logindata);

        setSignup_data(values);

        axiosInstance
          .post("Loginview/", {
            email: values.email,
            password: values.password,
          })
          .then(function (response) {
            console.log("🚀 ~ response:", response);
            setSuccess_msg("You are being logged in created");
            setUserData(response.data);
            const { access, refresh } = response.data;
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + localStorage.getItem("access");

            setTimeout(() => {
              setSuccess_msg(null);
              // navigate("/private/", {
              //   state: { userData: response.data },
              // });
              navigate("/user/");
            }, 2000);
          })
          .catch(function (error) {
            console.log("🚀 ~ Lugin ~ error:", error);
            seterrordata("Credentials doesn't match");
            setTimeout(() => {
              seterrordata(null);
            }, 5000);
          });
      },
    });

  return (
    <div>
      <div className={`${styles.container}`}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.input_fields}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className={styles.error_msg}>{errors.email}</p>
            ) : null}
          </div>
          <div className={styles.input_fields}>
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <p className={styles.error_msg}>{errors.password}</p>
            ) : null}
          </div>

          <button type="submit" className={styles.submit_btn}>
            Login
          </button>
        </form>
        <p className={styles.success_msg}> {Success_msg}</p>
        <p className={styles.error_msg}> {errordata}</p>

        <br />
        <p>Already have an account</p>

        <Link to="/Signup/">Signup</Link>
      </div>
    </div>
  );
}

export default Lugin;
