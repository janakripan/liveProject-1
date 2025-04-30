import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RichTextField from "./RichTextField";





//  Validation Schema
const ModuleSchema = Yup.object({
  name: Yup.string().required("Module name is required"),
  isSubAttribute: Yup.boolean(),
  description: Yup.mixed().test(
    'is-tiptap-doc',
    'Description is required',
    value => value && typeof value === 'object' && value.type === 'doc'
  )
});


const AddDescriptionForm = ({ formRef,initialValues,editorRef  }) => {

  const defaultValues = {
    name: "",
    isSubAttribute: true,
    description:  {
      type: "doc",
      content: [],
    },
  };
  
  const mergedInitialValues = { ...defaultValues, ...initialValues };
  
  return (
    <Formik
      innerRef={formRef}
      initialValues={mergedInitialValues}
      enableReinitialize
      validationSchema={ModuleSchema}
      onSubmit={(values) => {
        console.log("Submitted values:", values);
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
            <RichTextField name="description"  editorRef={editorRef} />
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
