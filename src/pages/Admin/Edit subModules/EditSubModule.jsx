import React, { useEffect, useRef, useState } from "react";
import { IoIosSave } from "react-icons/io";
import { useNavigate, useParams } from "react-router";
import { MdDeleteForever } from "react-icons/md";
import AddDescriptionForm from "../AddSubModule/components/AddDescriptionForm";
import AddUrlForm from "../AddSubModule/components/AddUrlForm";
import { useSubmodule } from "../../../contexts/admin/SubmodulesApiContext";
import DescriptionRenderer from "../../../components/Shared/DescriptonRenderer";
import { useUpdateSubmodules } from "../../../api/admin/hooks";
import { useQueryClient } from "@tanstack/react-query";

const EditSubModule = () => {
  const descriptionRef = useRef();
  const urlRef = useRef();
  const editorRef = useRef();
  const navigate = useNavigate();
  const [isDefault, setIsDefault] = useState(true);
  const [formError, setFormError] = useState("");
  const { projectId, moduleId, subModuleId } = useParams();
  const {submodules} = useSubmodule()
  const { mutate, isPending } = useUpdateSubmodules();
  const queryClient = useQueryClient()
 
  const [urlSets, setUrlSets] = useState([]);



  const subModule = submodules?.find(sub => Number( sub.subModuleID)===Number(subModuleId))
  console.log(subModule)

  useEffect(() => {
    if(Array.isArray(subModule?.customAttributes) && subModule.customAttributes.length > 0) {
      setUrlSets(subModule.customAttributes);
    }
    
  }, [subModule]);

  const addUrlSet = async () => {
   if (urlRef.current) {
      const urlErrors = await urlRef.current.validateForm();
      const isUrlValid = Object.keys(urlErrors).length === 0;

      if (!isUrlValid) {
        urlRef.current.setTouched({
          urlType: true,
          apiContent: true,
        });
        return;
      }

      const urlData = urlRef.current.values;

      setUrlSets((prev) => [...prev, urlData]);

      urlRef.current.resetForm();
    }
  };

  const handleExternalSubmit = async () => {
    if (descriptionRef.current) {
      const descErrors = await descriptionRef.current.validateForm();
      const isDescValid = Object.keys(descErrors).length === 0;

      if (!isDescValid) {
        setFormError(
          "Please complete all required fields in the description section."
        );
        descriptionRef.current.setTouched({
          name: true,
          description: true,
        });
        return;
      }

      if (urlSets.length === 0) {
        setFormError("Please add at least one URL set.");
        return;
      }

      setFormError("");

      try {
        const descData = await descriptionRef.current.submitForm();
        

       const combinedData = {
          
          subModuleDescription: JSON.stringify(descData.description),
          customAttributes: JSON.stringify(urlSets),
          isActive: true,
        };

        mutate(
          {
            projectAID : projectId,
            moduleID: moduleId,
            subModuleID: subModuleId,
            data:combinedData,
          },
          {
            onSuccess:(data)=>{ 
            queryClient.invalidateQueries(["getSubmodules"])
            console.log(data);
            descriptionRef.current.resetForm();
            urlRef.current.resetForm();
            editorRef.current?.commands.clearContent();
            setUrlSets([]);
            navigate(`/admin/project/${projectId}/preview`);;
          },
          onError: (error) => {
            console.error("❌ Submission failed:", error);
            setFormError("Something went wrong. Please try again.");
          },
          }
        )


      
        
       
      } catch (error) {
        console.error("Form submission error:", error);
      }
    }
  };

  const handleDeleteUrlSet = (indexToRemove) => {
    const updatedSets = urlSets.filter((_, idx) => idx !== indexToRemove);
    setUrlSets(updatedSets);
  };

  return (
    <div
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col overflow-hidden no-scrollbar max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-fit ">
        {/* header */}
        <div className="w-full h-fit flex flex-row justify-between items-center">
          <h1 className="capitalize text-heading font-bold font-satoshi text-2xl ">
            {subModule ? `Edit Submodule: ${subModule.name || "no name yet"}` : "Edit Submodule"}
          </h1>
          <div className="w-fit h-fit flex flex-row gap-2">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#C9C5C6] cursor-pointer hover:scale-105 transition-transform duration-300 flex items-center justify-center active:scale-95 text-[#797677] py-3 px-7 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleExternalSubmit}
              disabled={isPending}
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
            <AddDescriptionForm
              formRef={descriptionRef}
              initialValues={{
                name: subModule?.name || "",
                description: subModule?.subModuleDescription || "",
              }}
            />
          </div>

          <div
            className={`w-full h-fit transition-all duration-300 ${
              isDefault ? " hidden" : " block"
            }`}
          >
            <AddUrlForm
              formRef={urlRef}
              urlSets={urlSets}
              setUrlSets={setUrlSets}
              initialValues={{
                urlType: "",
                apiContent: "",
              }}
            />
          </div>

          {/* Add URL Set Button */}
          <div className="w-full flex justify-end mt-4">
            <button
              type="button"
              onClick={addUrlSet}
              className={`bg-buttonBlue hover:scale-105 transition-transform duration-300 active:scale-95 text-heading py-2 px-5 rounded-lg ${
                isDefault ? " hidden" : " block"
              }`}
            >
              + Add URL Set
            </button>
          </div>

          {/* List of Added URL Sets */}
          {urlSets.length > 0 && (
            
            <div className="mt-4">
              <h3 className="font-bold text-heading mb-2">Added URL Sets:</h3>
              <ul className="space-y-2">
                {urlSets.map((set, index) => (
                  <li
                    key={index}
                    className="bg-Bghilight rounded-md p-4 text-sm flex text-heading justify-between items-start"
                  >
                     <div className="flex-1">
                      <p>
                        <strong>Type:</strong> {set.urlType}
                      </p>
                      <span>
                        <strong>API:</strong>
                        <DescriptionRenderer
                          content={set.apiContent}
                          className="mt-1 whitespace-pre-wrap"
                        />
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteUrlSet(index)}
                      className="ml-4 text-red-600 text-3xl hover:scale-110 transition-all duration-200 "
                    >
                      <MdDeleteForever />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditSubModule;
