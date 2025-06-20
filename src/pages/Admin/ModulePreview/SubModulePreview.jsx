import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import PreviewSidebar from "./components/PreviewSidebar";
import DescriptionRenderer from "../../../components/Shared/DescriptonRenderer";
import CopyField from "../../../components/Shared/CopyField";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import EditModuleForm from "../../../components/Shared/EditModuleForm";
import { useModules } from "../../../contexts/admin/ModulesApiContext";
import { useSubmodule } from "../../../contexts/admin/SubmodulesApiContext";
import loader from "../../../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg";

const SubModulePreview = () => {
  const [edit, SetEdit] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [editModuleId, setEditModuleId] = useState("");
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { modules } = useModules();
  const { submodules, isLoading, error } = useSubmodule();

  const validModules = modules?.filter(
    (mod) => Number(mod.projectAID) === Number(projectId)
  );
  const combinedSidebarData = validModules?.map((mod) => {
    const filteredResult = submodules.filter(
      (sub) => Number(sub.moduleID) === Number(mod.moduleID)
    );
    return {
      ...mod,
      subModules: filteredResult,
    };
  });

  const handleEditClick = (moduleId, subModuleId) => {
    navigate(
      `/admin/project/${projectId}/preview/module/${moduleId}/submodule/${subModuleId}/edit`
    );
  };
  const handleEditModuleClick = () => {
    setEditProject(false);
  };

  if (isLoading)
    return (
      <div className="w-full h-screen bg-Bgprimary flex flex-row items-center justify-center">
        {" "}
        <img src={loader} alt="loading animation" className="w-20 h-20" />{" "}
      </div>
    );
  if (error)
    return (
      <div className="w-full h-screen flex flex-row bg-Bgprimary items-center justify-center">
        {" "}
        <p className="font-bold text-xl font-satoshi text-white">
          Error fetching details
        </p>
      </div>
    );
  return (
    <div
      className={` max-h-screen w-full  relative  transition-all duration-300 flex flex-col  max-w-screen-xl overflow-hidden mx-auto`}
    >
      <div className="w-full h-full p-4">
        <div className="w-full h-fit flex flex-row justify-between items-center  ">
          <span className="font-satoshi text-heading font-bold  text-3xl capitalize ">
            Project management
          </span>

          <button
            onClick={() => SetEdit(!edit)}
            className={`  cursor-pointer font-satoshi font-bold text-base text-heading flex flex-row items-center justify-center gap-x-2.5 px-4 py-3 rounded-lg hover:scale-105 active:scale-95 transition-transform duration-300 ${
              edit ? "bg-gray-400 " : "bg-[#30D158]"
            }  `}
          >
            {edit ? <IoClose /> : <FaEdit />}
            {edit ? (
              <span className="hidden md:block">cancel</span>
            ) : (
              <span className="hidden md:block"> Edit Project</span>
            )}
          </button>
        </div>
        <div className="w-full h-[85vh]  mt-8 flex flex-row gap-y-5">
          {/* preview sidebar */}
          <div className="w-1/5 h-full min-h-full overflow-y-auto">
            <PreviewSidebar
              data={combinedSidebarData}
              scrollContainerRef={scrollContainerRef}
              edit={edit}
              setEditProject={setEditProject}
              setEditModuleId={setEditModuleId}
            />
          </div>

          {/* preview conent */}
          <div
            ref={scrollContainerRef}
            className="w-4/5  h-full min-h-full px-4 overflow-hidden overflow-y-scroll "
          >
            {validModules?.map((module) => {
              const relatedSubmodule = submodules?.filter(
                (mod) => Number(mod.moduleID) === Number(module.moduleID)
              );
              console.log(relatedSubmodule);
              return (
                <section className="w-full h-fit  " key={module.moduleID}>
                  {relatedSubmodule.map((sub) => (
                    <section
                      key={sub.subModuleID}
                      className="w-full h-full max-h-[80vh] min-h-[60vh] pb-5  my-5 border-b overflow-hidden border-[#E6E1E280] gap-5"
                      id={sub.subModuleID}
                    >
                      {edit && (
                        <div className="w-full h-fit flex justify-end mb-2 gap-5">
                          <button
                            onClick={() =>
                              handleEditClick(module.moduleID, sub.subModuleID)
                            }
                            className=" px-3 py-1 rounded-md transition-all duration-100 cursor-pointer active:bg-Bgsecondary hover:scale-105 active:scale-95 text-heading text-xl "
                          >
                            <FiEdit />
                          </button>
                          <button className="  px-3 py-1 rounded-md active:bg-red-400 transition-all duration-100 active:scale-95 hover:scale-105 bg-red-600 text-heading text-xl">
                            <MdOutlineDeleteForever />
                          </button>
                        </div>
                      )}
                      <div className="w-full h-full min-h-[60vh] mb-5 overflow-hidden max-h-[78vh] flex flex-row ">
                        <div className="w-full lg:w-1/2 flex flex-col overflow-y-scroll no-scrollbar ">
                          <h1 className="text-heading mb-4 font-bold font-satoshi capitalize text-[26px]">
                            {sub.name || "no name yet"}
                          </h1>
                          <DescriptionRenderer
                            content={sub.subModuleDescription}
                          />
                        </div>

                        <div className="w-full lg:w-1/2 flex flex-col gap-5 overflow-y-scroll no-scrollbar p-4 ">
                          {sub.customAttributes?.map((items, index) => (
                            <div key={index} className="w-full h-fit py-2 ">
                              <CopyField
                                heading={items.urlType}
                                content={items.apiContent}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  ))}
                </section>
              );
            })}
          </div>
        </div>
      </div>
      {/* Edit project popup */}
      {editProject && (
        <div className="w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  p-8 ">
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between ">
              <h3 className="lg:text-2xl md:text-xl text-heading text-lg font-medium font-manrope capitalize ">
                edit project
              </h3>
              <button
                className="text-xl p-1.5 cursor-pointer bg-buttonBlue text-heading rounded-lg "
                onClick={() => setEditProject(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-[#F1F1F1] mt-1 mb-4" />
            <EditModuleForm
              handleEditClick={handleEditModuleClick}
              editId={projectId}
              editModuleId={editModuleId}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubModulePreview;
