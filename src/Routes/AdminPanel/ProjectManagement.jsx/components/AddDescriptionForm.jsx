import React from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import RichTextField from "./RichTextField";
import { Checkbox, FormControlLabel } from "@mui/material";

//  Conditionally show Sub Attributes Textarea
const SubAttributesField = () => {
  const { values } = useFormikContext();

  if (!values.isSubAttribute) return null;

  return (
    <div className="mt-4">
      <Field
        as="textarea"
        name="subAttributes"
        placeholder="Enter sub attributes"
        className="w-full border border-Bghilight px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-buttonBlue text-heading min-h-[100px]"
      />
    </div>
  );
};

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
        isSubAttribute: false,
        subAttributes: "",
        description: "",
      }}
      validationSchema={ModuleSchema}
      onSubmit={(values, actions) => {
        
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

          {/* Toggle for Sub Attribute */}
          <div className="flex items-center text-heading gap-2">
            <Field name="isSubAttribute">
              {({ field, form }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                      onChange={(e) =>
                        form.setFieldValue("isSubAttribute", e.target.checked)
                      }
                      sx={{
                        color: "#E2E2E2",
                        "&.Mui-checked": {
                          color: "#E2E2E2",
                        },
                        "& .MuiSvgIcon-root": {
                          fontSize: 24,
                        },
                      }}
                    />
                  }
                  label="Sub Attribute"
                />
              )}
            </Field>
          </div>

          <SubAttributesField />
          {errors.subAttributes && touched.subAttributes && (
            <div className="text-red-500 text-sm">{errors.subAttributes}</div>
          )}

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
