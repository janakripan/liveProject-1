import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { editProjectValidation } from "../../../../validations/editProjectValidation";
import { useProjects } from "../../../../contexts/admin/ProjectApiContext";
import { useUpdateProjects } from "../../../../api/admin/hooks";
import { useQueryClient } from "@tanstack/react-query";


function EditProjectForm({ handleEditClick, editId }) {
  const { projects } = useProjects();
  const { mutate, isPending } = useUpdateProjects();
  const queryClient = useQueryClient()
  const [initialValues, setInitialValues] = useState({
    projectName: "",
    projectDescription: "",
    isActive: "",
  });

  useEffect(() => {
    if (editId) {
      const selectedProject = projects.find(
        (project) => String(project.projectAID) === String(editId)
      );

      if (selectedProject) {
        setInitialValues({
          projectName: selectedProject.projectName || "",
          isActive: selectedProject.isActive || "",
          projectDescription: selectedProject.projectDescription || "",
        });
      }
    }
  }, [editId, projects]);

  const handleEditSubmit = (values, { resetForm, setSubmitting }) => {
    const formattedValues = {
    ...values,
    isActive: values.isActive === "true", 
    command: "UPDATE", 
  };
    console.log(values, editId);
    mutate(
      {
        id: editId,
        data: formattedValues,
      },
      {
        onSuccess: (data) => {
          console.log("Update successful", data);
          queryClient.invalidateQueries(["getProjects"]);
          handleEditClick()
          resetForm();
        },
        onError: (error) => {
          console.error("Update failed:",  error?.response?.data || error?.message || error);
        },
        onSettled: () => {
          setSubmitting(false);
        },
      }
    );
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={editProjectValidation}
        enableReinitialize
        onSubmit={handleEditSubmit}
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
            {/* descripton */}
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
                htmlFor="isActive"
                className="block font-dm-sans capitalize text-heading   text-sm md:text-base font-medium mb-2"
              >
                status
              </label>
              <Field
                as="select"
                id="isActive"
                name="isActive"
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
                name="isActive"
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

export default EditProjectForm;
