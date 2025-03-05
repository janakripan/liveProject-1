import * as Yup from "yup";

export const AuthSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "At least 8 characters").required("Required"),

});
