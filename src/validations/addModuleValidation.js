import * as Yup from "yup";


export const addModuleValdation = Yup.object({
    moduleName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
  });