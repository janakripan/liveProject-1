import { Formik, Form, Field } from "formik";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder = "Search anything", onSearch }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, { setSubmitting }) => {
        if (onSearch) {
          onSearch(values.query); 
        }
        setSubmitting(false);
      }}
    >
      {({ handleSubmit }) => (
        <Form 
          onSubmit={handleSubmit} 
          className="flex items-center border border-[#9A9A9A] rounded-lg p-2  w-full h-[38px] max-w-md "
        >
          
          <Field
            type="text"
            name="query"
            placeholder={placeholder}
            className="w-full p-2 outline-none placeholder:font-poppins placeholder:text-[#9A9A9A] placeholder:text-xs  bg-transparent"
          />
          <button type="submit" className=" text-[20px] text-[#727272]" >
          <FiSearch className="" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
