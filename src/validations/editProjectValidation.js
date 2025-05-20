import * as Yup from "yup";


export  const editProjectValidation = Yup.object({
    projectName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
     projectDescription: Yup.string()
      .required("Project description is required")
      .min(3, "Project description must be at least 3 characters"),
       
    isActive: Yup.string().required("select a status"),
  });