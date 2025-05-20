import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { AuthSchema } from "../../validations/authValidation";
import { useNavigate } from "react-router";
import { useToken } from "../../contexts/auth/UserDataContext";
import { useUserLogin } from "../../api/admin/hooks";

function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [credError, SetCredError] = useState("");
  const navigate = useNavigate();
  const { setUserToken } = useToken();
  const { mutate: handleLogin, isLoading } = useUserLogin();

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const handleSubmit = (values, { setSubmitting }) => {
    // handleLogin(values, {
    //   onSuccess: (response, variable) => {
    //     const userData = response.data[0];
    //     console.log(userData)
      
    //     const storage = variable.rememberMe ? localStorage : sessionStorage;
    //     storage.setItem("userData", JSON.stringify(userData));
    //     storage.setItem("token",  userData.Role );

    //     setUserToken(userData);

    //     if (userData.Role === "User") {
    //       navigate("/user");
    //     } else if (userData.Role === "Admin" || userData.Role === "Manager") {
    //       navigate("/admin");
    //     } else {
    //       console.warn("Unknown role:", userData.Role);
    //       navigate("/");
    //     }
    //   },
    //   onError: (error) => {
    //     if (error.response) {
    //       if (error.response.status === 401) {
    //         SetCredError("invalid username or password");
    //       } else {
    //         SetCredError(
    //           error.response.data.message || "login failed . please try again"
    //         );
    //       }
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       SetCredError("Network error. Please check your connection.");
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       SetCredError("An error occurred. Please try again later.");
    //     }
    //     setSubmitting(false);
    //   },
    //   onSettled: () => {
    //     setSubmitting(false);
    //   },
    // });

    // login simulation
     const userData = {
    UserId: 8,
    FullName: "FS",
    Email: "fs@gmail.com",
    PhoneNumber: "12345",
    Role: "Admin",
    ImageUrl: "http//image.1",
    CreatedAt: "2025-04-21T13:49:17.71",
    IsActive: true,
  };

  try {
    const storage = values.rememberMe ? localStorage : sessionStorage;
    storage.setItem("userData", JSON.stringify(userData));
    storage.setItem("token", userData.Role);

    if (userData.Role === "User" || userData.Role === "Developer") {
      navigate("/user");
    } else if (userData.Role === "Admin" || userData.Role === "Manager") {
      navigate("/admin");
    } else {
      console.warn("Unknown role:", userData.Role);
      navigate("/");
    }
  } catch (error) {
    SetCredError("Something went wrong during login simulation.");
    console.log(error)
  } finally {
    setSubmitting(false);
  }
};
  

  return (
    <div className="w-full h-full  ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={AuthSchema}
      >
        {({ handleChange, handleBlur, isSubmitting }) => (
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
              disabled={isSubmitting || isLoading}
              className="w-full bg-[#3399FF] mt-8 h-12 text-white text-sm py-2 font-rubik rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-5 
              disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting || isLoading ? "Logging in..." : "Login"}{" "}
              <FaArrowRight />
            </button>
            {credError && <p className="text-xs text-red-500  ">{credError}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AuthForm;
