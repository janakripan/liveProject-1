import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { AuthSchema } from "../../validations/authValidation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../queries/login";
import { useNavigate } from "react-router";
import { useToken } from "../../contexts/auth/UserDataContext";

function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [credError, SetCredError] = useState("")
  const navigate = useNavigate()
  const {setUserToken} = useToken()


  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response, variable) => {
      const data = response.data[0]
      const storage = variable.rememberMe? localStorage : sessionStorage ;
      storage.setItem("userData", JSON.stringify(data));
      storage.setItem("token", data.Role);
      

      setUserToken(data)

     
      if (data.Role === "User") {
        navigate("/user");
      } else if (data.Role === "admin" || data.Role === "manager") {
        navigate("/admin");
      } else {
        console.warn("Unknown role:", data.Role);
        navigate("/");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error.response?.data || error.message);
      SetCredError(error.response?.data.message )
    },
  });

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const handleSubmit = (values) => {
    mutation.mutate(values);
  };


  
  return (
    <div className="w-full h-full  ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={AuthSchema}
      >
        
        {({  handleChange, handleBlur}) => (
          <Form className="w-full h-fit flex flex-col gap-y-2">
          
            <div>
              <label className="block text-xl font-semibold font-open my-2 text-gray-900">
                Email
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your Email"
                autoComplete="username"
                 onChange={(e) => {
                  handleChange(e);
                  SetCredError(""); 
                }}
                onBlur={handleBlur}
                className="w-full p-2 px-4 min-h-12 border bg-[#F4F9FC] placeholder:font-inter placeholder:tracking-tight placeholder:text-base border-[#BAE4FF] rounded-lg outline-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="relative">
              <label className="block text-xl font-semibold font-open my-2 text-gray-900">
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  onChange={(e) => {
                  handleChange(e);
                  SetCredError(""); 
                }}
                  className="w-full p-2 px-4 border  min-h-12 bg-[#F4F9FC] border-[#BAE4FF] placeholder:tracking-tight placeholder:font-inter placeholder:text-base rounded-lg outline-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="button"
                  className="absolute right-3 top-4 text-lg text-[#A7A7A7]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mt-4">
              <Field
                type="checkbox"
                name="rememberMe"
                className="mr-2 h-4 w-4 accent-[#232321]"
              />
              <label className="text-sm font-open  font-semibold">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-[#3399FF] mt-8 h-12 text-white text-sm py-2 font-rubik rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-5 
              disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? "Logging in..." : "Login"} <FaArrowRight />
            </button>
            {credError&&(<p className="text-xs text-red-500  ">{credError}</p>)}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AuthForm;
