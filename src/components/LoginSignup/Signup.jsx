import React from "react";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas/schemas";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [Signup_data, setSignup_data] = useState([]);
  const [MailkoError, setMailkoError] = useState(null);
  const [Success_msg, setSuccess_msg] = useState(null);
  const eee = "Email already used, please use new email";
  const fff = "Username already in us";
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        setSignup_data(values);
        axios
          .post("http://127.0.0.1:8000/api/create_user_account/", {
            values,
          })
          .then(function (response) {
            if (response.status == 201) {
              setSuccess_msg("Account successfully created");
              setTimeout(() => {
                setSuccess_msg(null);
              }, 5000);
            }
          })
          .catch(function (error) {
            switch (error.response.status) {
              case 400:
                console.log("signup data has no values passed");
                setMailkoError("signup data has no values passed");
                setTimeout(() => {
                  setMailkoError(null);
                }, 5000);
                break;

              case 401:
                console.log("Email address already in use");
                setMailkoError("Email already used, please use new emaill");
                setTimeout(() => {
                  setMailkoError(null);
                }, 5000);

              case 402:
                console.log("Username already in use");
                setMailkoError("Username already in us");
                setTimeout(() => {
                  setMailkoError(null);
                }, 5000);

                break;
              case 404:
                console.log("data not received");
                break;
              default:
                console.log(error);
                break;
            }
          });
      },
    });

  return (
    <div className={`${styles.container}`}>
      <h1>SIGNUP</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_fields}>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {touched.name && errors.name ? (
            <p className={styles.error_msg}>{errors.name}</p>
          ) : null}
        </div>
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
        <div className={styles.input_fields}>
          <label htmlFor="Password">Confirm Password</label>
          <input
            type="password"
            // autoComplete="off"
            name="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.confirmpassword ? (
            <p className={styles.error_msg}>{errors.confirmpassword}</p>
          ) : null}
        </div>
        <button type="submit" className={styles.submit_btn}>
          Register
        </button>
      </form>
      {/* {MailkoError == eee ? (
        <p className={styles.error_msg}>{MailkoError}</p>
      ) : null}
      {MailkoError == fff ? (
        <p className={styles.error_msg}>{MailkoError}</p>
      ) : null} */}
      <p className={styles.success_msg}> {Success_msg}</p>
      <br />
      <p>Already have an account</p>
      <Link to="/Lugin/">Login</Link>
    </div>
  );
}

export default Signup;

// setSignup_data(values);
// console.log("🚀 ~ Signup ~ values:", JSON.stringify(values));
// axios
//   .post("http://127.0.0.1:8000/api/create_user")
//   .then(function (response) {
//     console.log("🚀 ~ response:", response);
//   })
//   .catch(function (error) {
//     if (error.response.status === 500) {
//       // If the error is related to email uniqueness, set the error state
//       console.log("mail ko error aayo");
//       setMailkoError("Email already used, please use new email");
//       setTimeout(() => {
//         setMailkoError(null);
//       }, 5000);
//     } else {
//       console.log(error);
//     }
//   });
