import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { addModuleValdation } from "../../../../validations/addModuleValidation";
import {  usePostModules } from "../../../../api/admin/hooks";
import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

function AddModuleForm({ handleClick }) {
  const {mutate , isPending ,error } = usePostModules()
  const {projectId} = useParams()
  console.log(projectId)
  const queryClient = useQueryClient()

  
  const initialValues = {
   
    moduleName: "",
    moduleDescription:"",
  };



  const handleSubmit = (values, { resetForm,setSubmitting }) => {
    const payload = {
      ...values,
       projectAID:Number(projectId),
    }
   mutate(payload,{
   onSuccess: () => {
        queryClient.invalidateQueries(["getModules"]);
        resetForm();
        setSubmitting(false);
        handleClick();
      },
      onError: () => {
        console.log(error);
        setSubmitting(false);
      },

   })
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={addModuleValdation}
        enableReinitialize
        onSubmit={handleSubmit}
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

            <div>
              <label
                htmlFor="moduleDescription"
                className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2"
              >
                Module Name
              </label>
              <Field
                type="text"
                id="moduleDescription"
                name="moduleDescription"
                placeholder="Enter module description"
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm"
              />
              <ErrorMessage
                name="moduleDescription"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={handleClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-2  md:p-4 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting || isPending}
              >
                {isSubmitting || isPending ? "Adding..." : "Add"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddModuleForm;
