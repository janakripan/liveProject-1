import * as Yup from "yup";

export const AuthSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5, "At least 5 characters").required("Required"),

});
