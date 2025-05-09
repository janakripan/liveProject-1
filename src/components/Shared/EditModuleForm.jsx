import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { projectData } from "../../constants/Projects/ProjectConstant";
import { editModuleValidation } from "../../validations/editModuleValidation";


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

  

  

  const handleEditSubmit = (values, { resetForm }) => {
    console.log("Form edited:", values);
    alert("Project Form edited Successfully!");
    resetForm();
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={editModuleValidation}
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
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
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
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={handleEditClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-2  md:p-4 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 duration-300 transition"
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
