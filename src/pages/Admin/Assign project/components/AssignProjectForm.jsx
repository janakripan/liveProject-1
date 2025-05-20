import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import calenderIcon from "../../../../assets/calenderIcon.svg";
import * as Yup from "yup";
import { useDevelopers } from "../../../../contexts/admin/DevApiContext";
import { useProjects } from "../../../../contexts/admin/ProjectApiContext";

const validationSchema = Yup.object({
  developerAID: Yup.string().required("Please select a developer"),
  projectAID: Yup.string().required("Please select a project"),
});

const AssignProjectForm = ({ setAssign, projectAID }) => {
 const {developers} = useDevelopers()
 const {projects} = useProjects()
console.log(projects)
  const initialValues = {
    developerAID: "",
    projectAID:projectAID || "",
    
  };

  const handleSubmit = (values,{resetForm, setSubmitting})=>{
    console.log("Assigned Values:", values);

          setSubmitting(false);
          resetForm();
          setAssign(false);

  }
  return (
    <div className="w-full h-fit ">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="flex flex-col gap-y-6">
            <div>
              <label
                htmlFor="developerAID"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Developer
              </label>
              <Field
                as="select"
                id="developerAID"
                name="developerAID"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled className="text-[#9EA3A7]" value="">
                  Select Developer
                </option>
                {developers?.map((dev) => (
                  <option key={dev.developerAID} value={dev.developerAID}>
                    {dev.developerName}{" "}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="developerAID"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="projectAID"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Project
              </label>
              <Field
                as="select"
                id="projectAID"
                name="projectAID"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled className="text-[#9EA3A7]" value="">
                  Select project
                </option>
                {projects?.map((project) => (
                  <option key={project.projectAID} value={project.projectAID}>
                    {project.projectName}{" "}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="projectAID"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {/* <div>
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
            </div> */}

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
