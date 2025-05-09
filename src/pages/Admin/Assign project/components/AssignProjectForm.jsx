import React from "react";
import { developers } from "../../../../constants/Developers/DevelopersConstant";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { projectData } from "../../../../constants/Projects/ProjectConstant";
import calenderIcon from "../../../../assets/calenderIcon.svg";
import * as Yup from "yup";

const validationSchema = Yup.object({
  developer: Yup.string().required("Please select a developer"),
  project: Yup.string().required("Please select a project"),
});

const AssignProjectForm = ({ setAssign, projectName }) => {
  const today = new Date().toISOString().split("T")[0];

  const initialValues = {
    developer: "",
    project:projectName || "",
    updatedDate: today,
  };
  return (
    <div className="w-full h-fit ">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Assigned Values:", values);

          setSubmitting(false);
          resetForm();
          setAssign(false);
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-y-6">
            <div>
              <label
                htmlFor="developer"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Developer
              </label>
              <Field
                as="select"
                id="developer"
                name="developer"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled className="text-[#9EA3A7]" value="">
                  Select Developer
                </option>
                {developers.map((dev) => (
                  <option key={dev.developer_id} value={dev.developer_id}>
                    {dev.name}{" "}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="developer"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="project"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Project
              </label>
              <Field
                as="select"
                id="project"
                name="project"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled className="text-[#9EA3A7]" value="">
                  Select project
                </option>
                {projectData.map((project) => (
                  <option key={project.project_id} value={project.project_id}>
                    {project.name}{" "}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="project"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="updatedDate"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2 appearance-none"
              >
                Assigned Date
              </label>
              <div className="relative">
                <Field
                  type="date"
                  id="updatedDate"
                  name="updatedDate"
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
                name="updatedDate"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={() => {
                  resetForm();
                  setAssign(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-2  md:p-4 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Assigning..." : "Assign"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AssignProjectForm;
