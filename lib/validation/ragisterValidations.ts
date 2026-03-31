import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Wrong email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(32, "Name must be no more than 32 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Wrong email format")
    .max(64, "Email must be no more than 64 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be no more than 128 characters")
    .required("Password is required"),
});
