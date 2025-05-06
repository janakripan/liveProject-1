import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { projectData } from "../../constants/Projects/ProjectConstant";


function EditModuleForm({ handleEditClick, editId,editModuleId }) {

  console.log(editModuleId)
  const [initialValues, setInitialValues] = useState({
    moduleName: "",
   
  });

 
  useEffect(() => {
    if (editId) {
      const selectedProject = projectData.find(
        (project) => String(project.project_id) === String(editId)
      );

      if (selectedProject) {
        const selectedModule = selectedProject.modules.find(mod=>String(mod.module_id) === String(editModuleId))
        console.log(selectedModule)

        setInitialValues({
          moduleName: selectedModule.name || "",
          
        });
      }
    }
  }, [editModuleId,editId]);

  

  const validationSchema = Yup.object({
    moduleName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
   
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
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-4">
            <div>
              <label
                htmlFor="moduleName"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Module Name
              </label>
              <Field
                type="text"
                id="moduleName"
                name="moduleName"
                placeholder="Enter module name"
                className="w-full py-4 px-5 border text-heading placeholder:text-commontext focus:outline-none focus:ring-1 focus:ring-buttonBlue placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="moduleName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
           

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
              type="button"
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

export default EditModuleForm;
