import * as Yup from "yup";

export const AuthSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4, "At least 4 characters").required("Required"),

});
