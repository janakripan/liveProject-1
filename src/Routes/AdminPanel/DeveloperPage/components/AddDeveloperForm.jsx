import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function AddDeveloperForm({handleClick}) {
  const initialValues = {
    userId: "",
    name: "",
    role: "",
    password: "",
  };

  const validationSchema = Yup.object({
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

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    resetForm(); // Clear the form after submission
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="w-full h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting,resetForm }) => (
          <Form className="flex flex-col gap-y-6">
            <div>
              <label
                htmlFor="userId"
                className="block font-dm-sans  text-[#323343] text-base font-medium mb-2"
              >
                User ID
              </label>
              <Field
                type="email" 
                id="userId"
                name="userId"
                placeholder="Enter Email ID"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              />
              <ErrorMessage
                name="userId"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block font-dm-sans text-base text-[#323343] font-medium mb-2"
              >
                User Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block font-dm-sans  text-[#323343] text-base font-medium mb-2"
              >
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="role"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              >
                <option disabled className="text-[#9EA3A7]" value="">
                  Select Role
                </option>
                <option value="admin">Admin</option>
                <option value="developer">Developer</option>
                <option value="manager">Manager</option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block  text-[#323343] font-dm-sans text-base font-medium mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="w-full h-fit flex flex-row gap-x-5 ">
                <button className="w-full bg-[#F5F5F5] text-[#323343] p-4 border border-[#F3F3F7] duration-300  rounded-md hover:scale-105 active:scale-95 transition" onClick={()=>{handleClick();resetForm();}}>
                    Cancel
                </button>
              <button
                type="submit"
                className="w-full bg-[#025964] text-white p-4 rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddDeveloperForm;
