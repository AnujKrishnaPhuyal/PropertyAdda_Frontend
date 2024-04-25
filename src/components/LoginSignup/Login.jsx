import React from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/schemas";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const eee = "Email and Password doesnt match";
  const success = "Login successfully";
  const [Login_data, setLogin_data] = useState([]);
  const [MailkoError, setMailkoError] = useState(null);

  const [error_msg, seterror_msg] = useState(null);
  const [LoginSuccessfull, setLoginSuccessfull] = useState(null);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values) => {
        setLogin_data(values);
        console.log(Login_data);
        try {
          // Attempt to login by sending a POST request to the login API endpoint
          const response = await axios.post(
            "http://127.0.0.1:8000/api/create_user/",
            {
              Login_data,
            }
          );

          // Check if the response status indicates successful login (assuming status code 201)
          if (response.status === 201) {
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
              seterror_msg("Email and Password doesn't match");
              break;
            case 402:
              seterror_msg("User doesn't exist");
              break;
            case 404:
              seterror_msg("Email and Password doesn't match");
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
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
            autoComplete="off"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <p className={styles.error_msg}>{errors.password}</p>
          ) : null}
        </div>
        {/* <Link to="/Signup"> */}
        <button type="submit" className={styles.submit_btn}>
          Login
        </button>
        {/* </Link> */}
      </form>
      {/* {error_msg && eee ? (
        <p className={styles.error_msg}>{error_msg}</p>
      ) : null}
      {LoginSuccessfull && success ? (
        <p className={styles.success_msg}>{LoginSuccessfull}</p>
      ) : null} */}
      <br />
      <p>Don't have an account</p>
      <Link to="/Signup/">Signup</Link>
    </div>
  );
}

export default Login;
