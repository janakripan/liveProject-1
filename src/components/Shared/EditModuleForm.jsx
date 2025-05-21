import { Formik, Form, Field, ErrorMessage } from "formik";
import { editModuleValidation } from "../../validations/editModuleValidation";
import { useModules } from "../../contexts/admin/ModulesApiContext";
import { useUpdateModules } from "../../api/admin/hooks";
import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

function EditModuleForm({ handleEditClick, editModuleId }) {
  const { modules } = useModules();
  const { projectId } = useParams();
  const { mutate, isPending} = useUpdateModules();
  const queryClient = useQueryClient()

  const selectedModule = modules?.find(
    (module) => Number(module.moduleID) === Number(editModuleId)
  );
  console.log(selectedModule);
  const initialValues = {
    moduleName: selectedModule.moduleName || "",
    moduleDescription: selectedModule.moduleDescription || "",
    status: selectedModule.isActive || "",
  };

  const handleEditSubmit = (values, { resetForm, setSubmitting }) => {
    const payload = {
      moduleName: values.moduleName,
      moduleDescription: values.moduleDescription,
      isActive: values.status === "true",
    };
    mutate(
      {
      data: payload,
      moduleID: editModuleId,
      projectAID: projectId,
    },
    {
      onSuccess: (data) => {
        console.log(data)
        queryClient.invalidateQueries(["getModules"]);
        handleEditClick()
        resetForm();
        setSubmitting(false);
      },
      onError: (error) => {
        console.error("Update failed:", error);
        setSubmitting(false);
      },
    }
  );
  };

  return (
    <div className="w-full bg-Bgprimary h-fit ">
      <Formik
        initialValues={initialValues}
        validationSchema={editModuleValidation}
        enableReinitialize
        onSubmit={handleEditSubmit}
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

            {/* status selector */}
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
                className="w-full md:py-4 py-2 px-2.5 md:px-5 focus:outline-none focus:ring-2 focus:ring-buttonBlue  border text-sm md:text-base text-heading placeholder:text-commontext placeholder:font-dm-sans placeholder:font-normal placeholder:md:text-base placeholder:text-sm border-[#7F828A80] rounded-sm bg-Bgprimary"
              >
                <option disabled value="">
                  {" "}
                  Status
                </option>
                <option value="true">In Progress</option>
                <option value="false">Completed</option>
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="w-full h-fit flex flex-row gap-x-5 ">
              <button
                type="button"
                className="w-full cursor-pointer bg-[#5A5D63] text-heading md:p-4 p-2 border border-[#5A5D63] duration-300 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 transition"
                onClick={handleEditClick}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full cursor-pointer bg-buttonBlue text-heading p-2  md:p-4 text-sm md:text-base rounded-md hover:scale-105 active:scale-95 duration-300 transition"
                disabled={isSubmitting || isPending}
              >
                {isSubmitting || isPending ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditModuleForm;
