import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RichTextField from "./RichTextField";





//  Validation Schema
const ModuleSchema = Yup.object({
  name: Yup.string().required("Module name is required"),
  isSubAttribute: Yup.boolean(),
  subAttributes: Yup.string().when("isSubAttribute", {
    is: true,
    then: (schema) => schema.required("Sub attributes are required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  description: Yup.string().required("Description is required"),
});

const AddDescriptionForm = ({ formRef }) => {
  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        name: "",
        isSubModule: true,
        description: "",
      }}
      validationSchema={ModuleSchema}
      onSubmit={(values) => {
        
        return values;
      }}
    >
      {({ errors, touched }) => (
        <Form className="w-full p-4 bg-Bgprimary rounded shadow space-y-4">
          {/* Module Name */}
          <div>
            <label
              htmlFor="name"
              name="name"
              className="block text-heading text-base font-medium mb-1"
            >
              Module Name
            </label>
            <Field
              name="name"
              className="w-full border border-Bghilight text-heading font-satoshi px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-buttonBlue"
              placeholder="Enter module name"
            />
            {errors.name && touched.name && (
              <div className="text-red-500 text-sm mt-1">{errors.name}</div>
            )}
          </div>

         

         

          {/* Description (Rich Text Editor) */}
          <div>
            <label
              htmlFor="description"
              name="description"
              className="block text-heading font-satoshi font-medium  mb-1"
            >
              Description
            </label>
            <RichTextField name="description" />
            {errors.description && touched.description && (
              <div className="text-red-500 text-sm mt-1">
                {errors.description}
              </div>
            )}
          </div>

          
        </Form>
      )}
    </Formik>
  );
};

export default AddDescriptionForm;
