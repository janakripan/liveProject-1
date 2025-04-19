import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const apiFieldSchema = Yup.object().shape({
  urlType: Yup.string().required("Heading is required"),

  apiContent: Yup.string().required("This field is required"),
});

const AddUrlForm = ({ formRef }) => {
  return (
    <div className="w-full h-fit ">
      <Formik
      innerRef={formRef}
        initialValues={{
          urlType: "",
          apiContent: "",
        }}
        onSubmit={(values, actions) => {
           
            return values;
          }}
        validationSchema={apiFieldSchema}
      >
        {({}) => (
          <Form className="w-full h-fit p-4 space-y-4">
            <div className="w-full h-fit ">
              <label htmlFor="urlType" name="urlType" className="block capitalize text-base font-satoshi text-heading font-medium">
               Select Type
              </label>
              <Field
                name="urlType"
                placeholder="enter your syntax type here"
                className="w-full border border-Bghilight focus:outline-none placeholder:text-commontext text-heading focus:ring-1 focus:ring-buttonBlue rounded p-2 mt-1"
              />
              <ErrorMessage
                name="urlType"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>


            <div>
            <label htmlFor="apiContent" name="apiContent" className="block font-satoshi text-base text-heading font-medium">API Example</label>
            <Field
              as="textarea"
              name="apiContent"
              rows={8}
              placeholder={`e.g.\n$ curl -X GET 'https://www.zohoapis.com/books/v3/organizations' \\\n  -H 'Authorization: Zoho-oauthtoken 1000.xxxxx.xxxxx'`}
              className="w-full border rounded p-2 mt-1 font-satoshi border-Bghilight placeholder:text-commontext text-heading focus:outline-none focus:ring-1 focus:ring-buttonBlue  "
            />
            <ErrorMessage name="apiContent" component="div" className="text-red-500 text-sm mt-1" />
          </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUrlForm;
