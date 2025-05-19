import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
// import calenderIcon from "../../../../assets/calenderIcon.svg";
import { addProjectFormValidation } from "../../../../validations/addProjectFormValidation";
import { useQueryClient } from "@tanstack/react-query";
import { usePostProjects } from "../../../../api/admin/hooks";

function AddProjectForm({ handleClick }) {
  const queryClient = useQueryClient();
  const { mutate, isError, error } = usePostProjects();
  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
  //   setCurrentDate(today);
  // }, []);

  const initialValues = {
    projectName: "",
    projectDescription: "",
    status: "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    mutate(values, {
      onSuccess: () => {
        queryClient.invalidateQueries(["getProjects"]);
        resetForm();
        setSubmitting(false);
        handleClick();
      },
      onError: () => {
        console.log(error);
        setSubmitting(false);
      },
    });
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={addProjectFormValidation}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-4">
            <div>
              <label
                htmlFor="projectName"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Project Name
              </label>
              <Field
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="projectName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* description */}

            <div>
              <label
                htmlFor="projectDescription"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Project Name
              </label>
              <Field
                type="text"
                id="projectDescription"
                name="projectDescription"
                placeholder="Enter project description"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="projectDescription"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/*status selector */}
            <div>
              <label
                htmlFor="status"
                className="block font-dm-sans capitalize text-heading   text-sm md:text-base font-medium mb-2"
              >
                status
              </label>
              <Field
                as="select"
                id="status"
                name="status"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled value="">
                  {" "}
                  Status
                </option>
                <option value="true">In progress</option>
                <option value="false">Completed</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Created Date */}
            {/* <div>
              <label
                htmlFor="createdDate"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2 appearance-none"
              >
                Created Date
              </label>
              <div className="relative">
                <Field
                  type="date"
                  id="createdDate"
                  name="createdDate"
                  readOnly
                  className="w-full  md:py-4 py-2 px-2.5 md:px-5 border text-commontext bg-Bgprimary focus:outline-0 placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#C8CACD80]/50 rounded-sm"
                />
                <img
                  src={calenderIcon}
                  className="w-6 bg-Bgprimary pointer-events-none h-6 absolute right-4 top-1/2 -translate-y-1/2"
                  alt=""
                />
              </div>
              <ErrorMessage
                name="createdDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div> */}

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                type="button"
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={handleClick}
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

export default AddProjectForm;
