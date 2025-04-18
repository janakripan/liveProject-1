import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { projectData } from "../../../../constants/Projects/ProjectConstant";

function EditProjectForm({ handleEditClick, editId }) {
  const [initialValues, setInitialValues] = useState({
    projectName: "",
    status: "",
  });

 
  useEffect(() => {
    if (editId) {
      const selectedProject = projectData.find(
        (project) => project.project_id === editId
      );

      if (selectedProject) {
        setInitialValues({
          projectName: selectedProject.name || "",
          status: selectedProject.status || "",
        });
      }
    }
  }, [editId]);

  

  const validationSchema = Yup.object({
    projectName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
    status: Yup.string().required("select a status"),
  });

  const handleEditSubmit = (values, { resetForm }) => {
    console.log("Form edited:", values);
    alert("Project Form edited Successfully!");
    resetForm();
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleEditSubmit}
      >
        {({ isSubmitting, resetForm }) => (
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
                className="w-full py-4 px-5 border text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="projectName"
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
                className="w-full py-4 px-5 text-heading bg-Bgprimary border placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#7F828A80] rounded-sm"
              >
                <option disabled value="">
                  {" "}
                  Status
                </option>
                <option value="Progress">In progress</option>
                <option value="Completed">Completed</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                className="w-full cursor-pointer bg-[#5A5D63] text-heading p-4 border border-[#5A5D63] duration-300  rounded-md hover:scale-105 active:scale-95 transition"
                onClick={handleEditClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-4 rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditProjectForm;
