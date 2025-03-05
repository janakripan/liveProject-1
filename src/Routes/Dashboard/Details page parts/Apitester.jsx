import { Formik, Form, Field, ErrorMessage } from "formik";
import { RiPlayListAddFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";

const options = [
  { value: "csharp", label: "C#" },
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
];

const ApiTester = () => {
  const initialvalues = {
    Name: "",
    photoUrls: [""],
    id: "",
    category: [""],
    status: "",
  };
  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };
  return (
    <>
      <h4 className="text-2xl font-poppins font-normal mb-2 ">Request Body</h4>

      <Formik initialValues={initialvalues} onSubmit={handleSubmit}>
        {({ isSubmitting, values }) => (
          <Form className="w-full h-fit flex flex-row gap-x-6">
            {/* Left side input field */}
            <div className="w-8/12 h-fit bg-[#F9FAFC] font-inter border border-[#DDDDDD] rounded-xl ">
              <div className="w-full">
                <Field
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className=" w-full h-12 outline-0 border font-inter placeholder:font-inter border-[#DDDDDD] focus:outline-none px-4 rounded-t-xl "
                />
                <ErrorMessage
                  name="Name"
                  component="p"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full">
                <Field
                  type="text"
                  name="PhotoUrls"
                  placeholder="PhotoUrls"
                  className=" w-full h-12 outline-0 border border-[#DDDDDD] font-inter placeholder:font-inter focus:outline-none px-4 "
                />
                <ErrorMessage
                  name="PhotoUrls"
                  component="p"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full">
                <Field
                  type="int"
                  name="id"
                  placeholder="Id"
                  className=" w-full h-12 outline-0 border border-[#DDDDDD] font-inter placeholder:font-inter focus:outline-none px-4 "
                />
                <ErrorMessage
                  name="id"
                  component="p"
                  className="text-red-500 text-xs"
                />
              </div>
              <div className="w-full border border-[#DDDDDD]">
                <Field
                  type="text"
                  name="category"
                  placeholder="Categoty"
                  className=" w-full h-12 outline-0 font-inter placeholder:font-inter focus:outline-none px-4 "
                />
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-red-500 text-xs"
                />
                <button className="flex flex-row items-center font-inter px-4 gap-2 rounded-lg py-3 m-4 mt-0 border border-[#DDDDDD] ">
                  <RiPlayListAddFill /> Show nested Properties
                </button>
              </div>
              <div className="w-full border border-[#DDDDDD] rounded-b-xl ">
                <Field
                  type="text"
                  name="status"
                  placeholder="status"
                  className=" w-full h-12 outline-0 font-inter placeholder:font-inter focus:outline-none px-4 "
                />
                <ErrorMessage
                  name="status"
                  component="p"
                  className="text-red-500 text-xs"
                />
                <p className="text-[#363636] font-inter ml-4 mb-4">
                  pet status in the store
                </p>
              </div>
            </div>

            {/* Right side output box */}
            <div className="w-4/12 flex-1 flex flex-col justify-between bg-[#F9FAFC] rounded-lg border contain-content border-[#DDDDDD]">
              <div className="w-full h-12 border border-[#DDDDDD] flex flex-row items-center justify-between px-4">
                <h4 className=" text-lg font-semibold text-[#FACC15] ">
                  PUT <span className="text-gray-900">/pet</span>
                </h4>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center px-3 py-1 disabled:bg-gray-300 disabled:cursor-not-allowed bg-[#4E80ED] text-white gap-1 font-medium text-sm rounded-lg "
                >
                  Test {""}
                  <FaPlay />
                </button>
              </div>
              <div className="w-full flex-1 "></div>
              <div className="w-full h-12 border border-[#DDDDDD] flex flex-row gap-1 p-4 items-center justify-end ">
                <label htmlFor="language" className=" font-base font-inter">
                  Show example in
                </label>

                <Field
                  as="select"
                  name="language"
                  className="border p-1 rounded w-4/12 flex items-center font-inter border-[#DFDFDF] font-medium text-sm bg-[#FAFAFA] justify-center"
                >
                  {options.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="font-inter font-medium text-sm"
                    >
                      {option.label}
                    </option>
                  ))}
                </Field>

                <ErrorMessage
                  name="language"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <div className="w-full h-[1px] bg-[#A7A7A7] mt-6 " />
    </>
  );
};

export default ApiTester;
