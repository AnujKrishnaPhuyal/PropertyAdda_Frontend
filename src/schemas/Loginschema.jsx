import * as Yup from "yup";
export const Loginschema = Yup.object().shape({
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Please enter your email"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[!@#$%^&*()-+0-9]).{8,}$/,
      "Password must contain at least 1 special character"
    )
    .required("Password is required"),
});
