import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const EditDeveloperForm = ({setEdit,editData}) => {
    console.log(editData)
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
        initialValues={editData || initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-y-6">
            <div>
              <label
                htmlFor="userId"
                className="block font-dm-sans  text-commontext text-sm md:text-base font-medium mb-2"
              >
                User ID
              </label>
              <Field
                type="email"
                id="userId"
                name="userId"
                placeholder="Enter Email ID"
                disabled
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
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
                className="block font-dm-sans text-sm md:text-base text-heading font-medium mb-2"
              >
                User Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
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
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Role
              </label>
              <Field
                as="select"
                id="role"
                name="role"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
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
              <label
                htmlFor="password"
                className="block  text-heading font-dm-sans text-sm md:text-base font-medium mb-2"
              >
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
              type="button"
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={() => {
                  setEdit(false);
                  resetForm();
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-2  md:p-4 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 duration-300 transition"
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
};

export default EditDeveloperForm;
