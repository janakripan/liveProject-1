import * as Yup from "yup";


export const searchBarValidation =  Yup.string()
.trim()
.min(2, "Search term must be at least 2 characters")
.max(50, "Search term must be at most 50 characters")
.required("Search term is required");