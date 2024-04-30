import React from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loginschema } from "../../schemas/Loginschema";
import { signUpSchema } from "../../schemas/schemas";
import axios from "axios";
import CreateProperty from "../CreateProperty/CreateProperty";
import { useNavigate } from "react-router-dom";
function Lugin() {
  const initialValues = {
    email: "",
    password: "",
  };
  const [Signup_data, setSignup_data] = useState([]);
  const [Success_msg, setSuccess_msg] = useState(null);
  const [errordata, seterrordata] = useState(null);

  const navigate = useNavigate();
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Loginschema,
      onSubmit: (values) => {
        setSignup_data(values);
        axios
          .post("http://127.0.0.1:8000/api/login/", {
            values,
          })
          .then(function (response) {
            console.log("🚀 ~ response:", response);
            setSuccess_msg("You are being logged in created");
            setTimeout(() => {
              setSuccess_msg(null);
              navigate("/UserDashboard/");
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
  );
}

export default Lugin;
