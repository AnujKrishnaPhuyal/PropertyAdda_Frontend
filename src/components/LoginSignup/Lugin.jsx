import React from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loginschema } from "../../schemas/Loginschema";
import axios from "axios";
import CreateProperty from "../CreateProperty/CreateProperty";
function Lugin() {
  const initialValues = {
    name: "",
    password: "",
  };
  const [Login_data, setLogindata] = useState([]);
  const [MailkoError, setMailkoError] = useState(null);
  const [error_msg, seterror_msg] = useState(null);
  const [LoginSuccessfull, setLoginSuccessfull] = useState(null);

  const eee = "Email already used, please use new email";
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: Loginschema,
      onSubmit: async (values) => {
        setLogindata(values);
        try {
          // Attempt to login by sending a POST request to the login API endpoint
          const response = await axios.post(
            "http://127.0.0.1:8000/api/login_user/",
            {
              Login_data,
            }
          );
          console.log(response);

          // Check if the response status indicates successful login (assuming status code 201)
          if (response.status === 201) {
            console.log("login success");
            // If successful, set the login success message and clear it after 5 seconds
            setLoginSuccessfull("Login successfully");
            setTimeout(() => {
              setLoginSuccessfull(null);
            }, 5000);
          } else {
            // Handle other response statuses (if needed)
            console.log(response);
          }
        } catch (error) {
          // Handle errors
          switch (error.response.status) {
            case 400:
              console.log("NO logindata values");
              seterror_msg("Email and Password doesn't match");
              break;
            case 401:
              seterror_msg("Error in feteching data");
              break;
            case 410:
              seterror_msg("Method is not post request");
              break;
            default:
              console.log(error);
              break;
          }

          // Clear the error message after 5 seconds
          setTimeout(() => {
            seterror_msg(null);
          }, 5000);
        }
      },
    });
  return (
    <div className={`${styles.container}`}>
      <h1>LOGIN</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_fields}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="name"
            autoComplete="on"
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
            autoComplete="on"
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
      {MailkoError && eee ? (
        <p className={styles.error_msg}>{MailkoError}</p>
      ) : null}
      <p className={styles.success_msg}>{LoginSuccessfull}</p>
      <br />
      <p>Already have an account</p>
      <Link to="/Signup/">Signup</Link>
    </div>
  );
}

export default Lugin;
