import React, { useRef, useState } from "react";
import { IoIosSave } from "react-icons/io";
import AddDescriptionForm from "./components/AddDescriptionForm";
import { useNavigate } from "react-router";
import AddUrlForm from "./components/AddUrlForm";

const AddModule = () => {
  const descriptionRef = useRef();
  const urlRef = useRef();
  const navigate = useNavigate();
  const [isDefault, setIsDefault] = useState(true);
  const [formError, setFormError] = useState("");

  const handleExternalSubmit = async () => {
    if (descriptionRef.current && urlRef.current) {
      
      const [descErrors, urlErrors] = await Promise.all([
        descriptionRef.current.validateForm(),
        urlRef.current.validateForm(),
      ]);

      
      const isDescValid = Object.keys(descErrors).length === 0;
      const isUrlValid = Object.keys(urlErrors).length === 0;

      if (!isDescValid || !isUrlValid) {
        setFormError("Please complete all required fields in both sections.");
        
        descriptionRef.current.setTouched({
          name: true,
          isSubAttribute: true,
          subAttributes: true,
          description: true,
        });

        urlRef.current.setTouched({
          urlType: true,
          apiContent: true,
        });

        return; 
      }
      setFormError("");

     
      try {
        const [descData, urlData] = await Promise.all([
          descriptionRef.current.submitForm(),
          urlRef.current.submitForm(),
        ]);

        const combinedData = {
          ...descData,
          ...urlData,
        };

        console.log("✅ Combined Data:", combinedData);
       
        descriptionRef.current.resetForm();
        urlRef.current.resetForm();
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  return (
    <div
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col overflow-hidden no-scrollbar max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-fit ">
        {/* header */}
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h1 className="capitalize text-heading font-bold font-satoshi text-2xl ">
            Create module
          </h1>
          <div className="w-fit h-fit flex flex-row gap-2">
         
            <button
            onClick={() => navigate(-1)} 
            className="bg-[#C9C5C6] cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center active:scale-95 text-[#797677] py-3 px-7 rounded-lg">
              Cancel
            </button>
            <button
              type="button"
              onClick={handleExternalSubmit}
              className="bg-buttonBlue flex items-center cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 justify-center text-heading py-3 px-7 rounded-lg "
            >
              <IoIosSave /> Save
            </button>
          </div>
        </div>

        {/* section nav */}
        <div className="w-full h-fit  border-b flex md:justify-start mt-4 flex-row border-[#E6E1E280]">
          <button
            onClick={() => setIsDefault(true)}
            className={`capitalize font-satoshi hover:scale-105 font-medium text-base px-6 py-3 transition-all duration-300 cursor-pointer ${
              isDefault
                ? " text-buttonBlue border-b border-buttonBlue"
                : "text-commontext border-0"
            } `}
          >
            document desk
          </button>
          <button
            onClick={() => setIsDefault(false)}
            className={` uppercase font-satoshi hover:scale-105 font-medium text-base px-6 py-3 transition-all duration-300 cursor-pointer ${
              isDefault
                ? " text-commontext border-0"
                : "text-buttonBlue border-b border-buttonBlue"
            } `}
          >
            url
          </button>
        </div>
        {formError && (
              <div className="text-red-500 font-medium mb-2">{formError}</div>
            )}
        <div className="w-full h-[78vh]  overflow-y-auto no-scrollbar ">
          <div
            className={`w-full h-fit transition-all  duration-300 ${
              isDefault ? " block" : " hidden"
            }`}
          >
            <AddDescriptionForm formRef={descriptionRef} />
          </div>

          <div
            className={`w-full h-fit transition-all duration-300 ${
              isDefault ? " hidden" : " block"
            }`}
          >
            <AddUrlForm formRef={urlRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModule;
