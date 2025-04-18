import React, { useRef, useState } from "react";
import { IoIosSave } from "react-icons/io";
import AddDescriptionForm from "./components/AddDescriptionForm";
import { useNavigate } from "react-router";




const AddModule = () => {
  const formikRef = useRef();
  const navigate = useNavigate()
  const [isDefault , setIsDefault] = useState(true)

  const handleExternalSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  const handleFormSubmit = (values) => {
    console.log("Form submitted with:", values);
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
            
            className="bg-[#C9C5C6] cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center active:scale-95 text-[#797677] py-3 px-7 rounded-lg">
              Cancel
            </button>
            <button 
             onClick={handleExternalSubmit}
            className="bg-buttonBlue flex items-center cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-95 justify-center text-heading py-3 px-7 rounded-lg ">
              <IoIosSave /> Save
            </button>
          </div>
        </div>

        {/* section nav */}
        <div className="w-full h-fit  border-b flex md:justify-start mt-4 flex-row border-[#E6E1E280]">
            <button 
            onClick={()=>setIsDefault(true)}
            className={`capitalize font-satoshi hover:scale-105 font-medium text-base px-6 py-3 transition-all duration-300 cursor-pointer ${isDefault ?" text-buttonBlue border-b border-buttonBlue" :"text-commontext border-0"} `}> 
            document desk
            </button>
            <button 
            onClick={()=>setIsDefault(false)}
            className={` uppercase font-satoshi hover:scale-105 font-medium text-base px-6 py-3 transition-all duration-300 cursor-pointer ${isDefault ?" text-commontext border-0" :"text-buttonBlue border-b border-buttonBlue"} `} > 
              url
              </button>
        </div>

        <div className="w-full h-[78vh]  overflow-y-auto no-scrollbar ">
          {
            isDefault
            ?(<div className="w-full h-fit">
              <AddDescriptionForm onSubmit={handleFormSubmit} formRef={formikRef}/>
            </div>)
            :(<div></div>)
          }
        </div>
       
        
      </div>
    </div>
  );
};

export default AddModule;
