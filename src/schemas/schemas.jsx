// import * as Yup from "yup";

// export const signUpSchema = Yup.object({
//   name: Yup.string().min(2).max(25).required("Please enter your name"),
//   email: Yup.string().email().required("Please enter your email"),
//   password: Yup.string().min(6).required("Password must be at least 6 characters"),
//   confirmpassword: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "Password must match"),
// });

import * as Yup from "yup";
export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[!@#$%^&*()-+0-9]).{8,}$/,
      "Password must contain at least 1 special character"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
