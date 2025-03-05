import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoEyeOutline,IoEyeOffOutline  } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { AuthSchema } from "../../validations/authValidation";
function AuthForm({ onToggle}) {

    const [showPassword, setShowPassword] = useState(false);

    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        rememberMe: false,
    }
    const handleSubmit = (values) => {
        console.log("Form Data:", values);
      };
  return (
    <div className='w-full h-full  '>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={AuthSchema}
        >
        {({
         isSubmitting,
        })=>(
        <Form className='w-full h-fit flex flex-col gap-y-4'>
           <div>
              <label className="block text-xl font-semibold font-open my-4 text-gray-900">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full p-2 px-4 min-h-12 border placeholder:font-inter placeholder:tracking-tight placeholder:text-base border-[#BAE4FF] rounded-lg outline-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs"
              />
            </div>
            <div className="relative">
              <label className="block text-xl font-semibold font-open my-4 text-gray-900">Password</label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-2 px-4 border  min-h-12 border-[#BAE4FF] placeholder:tracking-tight placeholder:font-inter placeholder:text-base rounded-lg outline-0 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
            <div className="flex items-center">
              <Field
                type="checkbox"
                name="rememberMe"
                className="mr-2 h-4 w-4 text-[#232321]"
              />
              <label className="text-sm font-open">Remember Me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3399FF] h-12 text-white text-sm py-2 font-rubik rounded-lg hover:bg-blue-600 transition flex items-center justify-center gap-5 
              disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in" : "Email Login"}{" "} <FaArrowRight/>
            </button>


        </Form>
       )}
        </Formik>

        

      
    </div>
  )
}

export default AuthForm
