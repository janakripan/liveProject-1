import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import calenderIcon from "../../../../assets/calenderIcon.svg";

function AddProjectForm({handleClick}) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setCurrentDate(today);
  }, []);
 
  const initialValues = {
    projectName: "",
    status:"",
    createdDate: currentDate,
   
  };

  const validationSchema = Yup.object({
    projectName: Yup.string()
      .required("Project name is required")
      .min(3, "Project name must be at least 3 characters")
      .max(50, "Project name can't exceed 50 characters"),
    status:Yup.string()
      .required("select a status")

   
  });

  const handleSubmit = (values, { resetForm }) => {
    const unixDate = Math.floor(new Date(values.createdDate).getTime() / 1000); // ✅ to UNIX

    const finalValues = {
      ...values,
      createdDate: unixDate,
    };
    console.log("Form Submitted:", finalValues);
    alert("Project Form Submitted Successfully!");
    resetForm();
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
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
                <option disabled value=""> Status</option>
              <option value="Progress">In progress</option>
              <option value="Completed">Completed</option>
              
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>


           

           

            
              {/* Created Date */}
              <div>
                <label
                  htmlFor="createdDate"
                  className="block font-dm-sans  text-heading text-sm md:text-base font-medium mb-2 appearance-none"
                >
                  Created Date
                </label>
                <div className="relative">
                  <Field
                    type="date"
                    id="createdDate"
                    name="createdDate"
                    
                    readOnly
                    className="w-full py-4 px-5 border text-commontext bg-Bgprimary focus:outline-0 placeholder:text-[#9EA3A7] placeholder:font-dm-sans placeholder:font-normal placeholder:text-base border-[#C8CACD80]/50 rounded-sm"
                  />
                  <img
                    src={calenderIcon}
                    className="w-6 bg-Bgprimary pointer-events-none h-6 absolute right-4 top-1/2 -translate-y-1/2"
                    alt=""
                  />
                </div>
                <ErrorMessage
                  name="createdDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              
            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                className="w-full cursor-pointer bg-[#5A5D63] text-heading p-4 border border-[#5A5D63] duration-300  rounded-md hover:scale-105 active:scale-95 transition"
                onClick={
                  handleClick
                }
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-4 rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding..." : "Add"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProjectForm;
