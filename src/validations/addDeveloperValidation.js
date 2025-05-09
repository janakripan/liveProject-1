import * as Yup from "yup";

 
export const addDeveloperValidation = Yup.object({
    userId: Yup.string()
      .email("Invalid email format") // Email validation
      .required("Email is required"),
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name can't exceed 50 characters"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number"),
  });