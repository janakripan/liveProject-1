import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { addDeveloperValidation } from "../../../../validations/addDeveloperValidation";
import { useQueryClient } from "@tanstack/react-query";
import { usePostDevelopers } from "../../../../api/admin/hooks";

function AddDeveloperForm({ handleClick }) {
  const queryClient = useQueryClient();

  const { mutate,  isError, error } = usePostDevelopers();

  const initialValues = {
    userID: "",
    developerName: "",
    developerRole: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm,setSubmitting }) => {
    
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(["getDevelopers"]);
        resetForm();
        setSubmitting(false)
      },
      onError:()=>{
        console.log(error)
         setSubmitting(false)
      }
    });
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
                htmlFor="userID"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                User ID
              </label>
              <Field
                type="email"
                id="userID"
                name="userID"
                placeholder="Enter Email ID"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="userID"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="developerName"
                className="block font-dm-sans text-sm md:text-base text-heading font-medium mb-2"
              >
                User Name
              </label>
              <Field
                type="text"
                id="developerName"
                name="developerName"
                placeholder="Enter Name"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="developerName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="developerRole"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Role
              </label>
              <Field
                as="select"
                id="developerRole"
                name="developerRole"
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
                name="developerRole"
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
            {isError && (
              <div className="text-red-600 mt-2">
                {error?.response?.data?.message ||
                  error?.response?.data?.error ||
                  error?.message ||
                  "Something went wrong"}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddDeveloperForm;
