import * as Yup from "yup";

export const editModuleValidation = Yup.object({
    moduleName: Yup.string()
      .required("Module name is required")
      .min(3, "Module name must be at least 3 characters")
      .max(50, "Module name can't exceed 50 characters"),
    moduleDescription: Yup.string()
      .required("Module description is required")
      .min(10, "Module description must be at least 3 characters")
      .max(150, "Module description can't exceed 50 characters"),
   
  });