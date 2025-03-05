import { Formik, Form, Field } from "formik";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ placeholder = "Search...", onSearch }) => {
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
          className="flex items-center border rounded-lg p-2 shadow-md w-full h-10 max-w-md bg-white"
        >
          
          <Field
            type="text"
            name="query"
            placeholder={placeholder}
            className="w-full p-2 outline-none bg-transparent"
          />
          <button type="submit" className="" >
          <FiSearch className="text-gray-500 mx-2" />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
