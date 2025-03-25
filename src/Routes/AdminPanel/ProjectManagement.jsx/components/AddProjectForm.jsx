import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import calenderIcon from "../../../../assets/calenderIcon.svg";

function AddProjectForm({handleClick}) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setCurrentDate(today);
  }, []);

  const initialValues = {
    projectName: "",
    apiUrl: "",
    description: "",
    createdDate: currentDate,
    deadlineDate: "",
  };

  const validationSchema = Yup.object({
    projectName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
    apiUrl: Yup.string()
      .url("Invalid API URL format")
      .required("API URL is required"),
    description: Yup.string()
      .required("Project description is required")
      .min(10, "Description must be at least 10 characters")
      .max(300, "Description can't exceed 300 characters"),
    deadlineDate: Yup.date()
      .required("Deadline date is required")
      .min(Yup.ref("createdDate"), "Deadline must be after the creation date"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("Project Form Submitted Successfully!");
    resetForm();
  };

  return (
    <div className="w-full h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-y-4">
            <div>
              <label
                htmlFor="projectName"
                className="block font-dm-sans  text-[#323343] text-base font-medium mb-2"
              >
                Project Name
              </label>
              <Field
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              />
              <ErrorMessage
                name="projectName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/*  API URL */}
            <div>
              <label
                htmlFor="apiUrl"
                className="block font-dm-sans  text-[#323343] text-base font-medium mb-2"
              >
                API URL
              </label>
              <Field
                type="url"
                id="apiUrl"
                name="apiUrl"
                placeholder="Enter API URL"
                className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
              />
              <ErrorMessage
                name="apiUrl"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Project Description */}
            <div>
              <label
                htmlFor="description"
                className="block font-dm-sans  text-[#323343] text-base font-medium mb-2"
              >
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Describe About Your Project"
                className="w-full p-2 border  placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm h-40 resize-none"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Created Date */}
              <div>
                <label
                  htmlFor="createdDate"
                  className="block font-dm-sans  text-[#323343] text-base font-medium mb-2 appearance-none"
                >
                  Created Date
                </label>
                <div className="relative">
                  <Field
                    type="date"
                    id="createdDate"
                    name="createdDate"
                    value={currentDate}
                    readOnly
                    className="w-full py-4 px-5 border text-[#9EA3A7] focus:outline-0 placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
                  />
                  <img
                    src={calenderIcon}
                    className="w-6 bg-white pointer-events-none h-6 absolute right-4 top-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>
                <ErrorMessage
                  name="createdDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Deadline Date */}
              <div>
                <label
                  htmlFor="deadlineDate"
                  className="block font-dm-sans  text-[#323343] text-base font-medium mb-2 "
                >
                  Deadline Date
                </label>
                <div className="relative">
                  <Field
                    type="date"
                    id="deadlineDate"
                    name="deadlineDate"
                    placeholder="Select Date"
                    className="w-full py-4 px-5 border placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm appearance-none   "
                  />
                  <img
                    src={calenderIcon}
                    className="w-6 bg-white pointer-events-none h-6 absolute right-4 top-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>

                <ErrorMessage
                  name="deadlineDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                className="w-full bg-[#F5F5F5] text-[#323343] p-4 border-2 border-[#F3F3F7] duration-300  rounded-md hover:scale-105 active:scale-95 transition"
                onClick={
                  handleClick
                }
              >
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

export default AddProjectForm;
