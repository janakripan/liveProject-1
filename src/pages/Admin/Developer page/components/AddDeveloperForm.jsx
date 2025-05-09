import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addDeveloperValidation } from "../../../../validations/addDeveloperValidation";

function AddDeveloperForm({ handleClick }) {
  const initialValues = {
    userId: "",
    name: "",
    role: "",
    password: "",
  };

  

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    resetForm(); // Clear the form after submission
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="w-full h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={addDeveloperValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-y-6">
            <div>
              <label
                htmlFor="userId"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                User ID
              </label>
              <Field
                type="email"
                id="userId"
                name="userId"
                placeholder="Enter Email ID"
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
                  handleClick();
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
}

export default AddDeveloperForm;
