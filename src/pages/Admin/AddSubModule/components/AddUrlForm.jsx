import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import * as Yup from "yup";
import RichTextField from "../../../../components/Shared/RichTextField";

const apiFieldSchema = Yup.object().shape({
  urlType: Yup.string().required("Type is required"),
  apiContent: Yup.object()
    .required("API content is required")
    .test(
      "not-empty",
      "API content cannot be empty",
      (value) => value && value.content && value.content.length > 0
    ),
});

const AddUrlForm = ({ formRef, initialValues,editorRef }) => {
  const defaultValues = {
    urlType: "",
    apiContent: { type: "doc", content: [] },
  };
  

  const mergedInitialValues = { ...defaultValues, ...initialValues };
  return (
    <div className="w-full h-fit">
      <Formik
        innerRef={formRef}
        initialValues={mergedInitialValues}
        enableReinitialize
        validationSchema={apiFieldSchema}
        onSubmit={(values) => {
          return values;
        }}
      >
        {(errors, touched) => (
          <Form className="w-full h-fit p-4 space-y-4">
            {/* Type Field */}
            <div className="w-full h-fit">
              <label
                htmlFor="urlType"
                className="block capitalize text-base font-satoshi text-heading font-medium"
              >
                Select Type
              </label>
              <Field
                name="urlType"
                placeholder="Enter your syntax type here"
                className="w-full border border-Bghilight focus:outline-none placeholder:text-commontext text-heading focus:ring-1 focus:ring-buttonBlue rounded p-2 mt-1"
              />
              <ErrorMessage
                name="urlType"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* API Content Field */}
            <div>
              <label
                htmlFor="apiContent"
                name="apiContent"
                className="block text-heading font-satoshi font-medium  mb-1"
              >
                Api Content
              </label>
              <RichTextField name="apiContent" editorRef={editorRef} />
              {errors.apiContent && touched.apiContent && (
                <div className="text-red-500 text-sm mt-1">
                  {errors.apiContent}
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUrlForm;
