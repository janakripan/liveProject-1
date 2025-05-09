import * as Yup from "yup";

export const addProjectFormValidation = Yup.object({
    projectName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
    status:Yup.string()
      .required("select a status")

   
  });