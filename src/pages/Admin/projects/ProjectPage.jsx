import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImSortAmountAsc } from "react-icons/im";
import ProjectTable from "./components/ProjectTable";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import AddProjectForm from "./components/AddProjectForm";
import { IoMdClose } from "react-icons/io";
import EditProjectForm from "./components/EditProjectForm";
import SearchBar from "../../../components/Shared/SearchBar";
import { useSidebar } from "../../../contexts/admin/SidebarContext";



function ProjectPage() {
  const [displayData, setDisplayData] = useState(projectData);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editId , setEditId] = useState("");
  const {isOpen} = useSidebar()
  

  const handleSearch = (query) => {
    

    if (!query.trim()) {
      setDisplayData(projectData || []);

      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = projectData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setDisplayData(filteredResults);
  };
  const handleClick = () => {
    setAdd(!add);
  };
  const handleEditClick = () =>{
    setEdit(false)
  }
  return (
    <div
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col  max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-fit ">
        <div className="w-full h-fit flex flex-row justify-between items-center  ">
          <h1 className="font-satoshi font-bold lg:text-2xl text-heading md:text-xl text-lg tracking-tight ">
            API Project Management
          </h1>

          <button
            onClick={handleClick}
            className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-xs md:text-base text-white flex flex-row items-center justify-center active:scale-95 gap-x-2.5 px-3 md:px-4 py-2 md:py-3 rounded-lg hover:scale-105 transition-transform duration-300 "
          >
            <FaPlus />
            <span className="hidden md:block"> Add New Project</span>
          </button>
        </div>

        {/* searchbar and sort button */}

        <div className="w-full h-fit mt-10  flex flex-row justify-between items-center gap-x-5 gap-y-0 py-0 ">
          <div className="w-full h-full flex-1  ">
            <SearchBar
              placeholder="Search Projects"
              onSearch={handleSearch}
              className="py-3 h-[46px]"
            />
          </div>
          <div>
            <button className="md:text-base text-xs cursor-pointer font-satoshi hover:scale-105 transition-all duration-300 text-heading bg-[#5A5D63] rounded-xl font-medium flex items-center justify-center gap-2.5 px-3.5 py-3 ">
              <ImSortAmountAsc />
              Sort
            </button>
          </div>
        </div>

        {/* projects table */}
        <div className="w-full h-[75vh] lg:h-[63vh] overflow-y-auto my-5 no-scrollbar rounded-lg border border-[#4C4F55]">
          <ProjectTable data={displayData} setEditId={setEditId} editId={editId} setEdit={()=>setEdit(true)} />
        </div>
      </div>
      {/* add project popup */}
      {add && (
        <div className={`w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  transition-all duration-300 md:p-8 p-4 ${isOpen?"md:pl-[290px] ":""}`}>
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between  items-center ">
              <h3 className="lg:text-2xl md:text-xl text-lg text-heading font-medium font-manrope capitalize ">
                add new project
              </h3>
              <button
                className="md:text-xl text-base p-1.5 h-fit cursor-pointer bg-buttonBlue text-heading rounded-lg "
                onClick={() => setAdd(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-[#F1F1F1] mt-1 mb-4" />
            <AddProjectForm handleClick={handleClick} />
          </div>
        </div>
      )}
      {/* Edit project popup */}
      {edit && (
        <div className={`w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  transition-all duration-300 md:p-8 p-4 ${isOpen?"md:pl-[290px] ":""}`}>
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row items-center justify-between ">
              <h3 className="lg:text-2xl md:text-xl text-heading text-lg font-medium font-manrope capitalize ">
                edit project
              </h3>
              <button
                className="md:text-xl text-base p-1.5 h-fit cursor-pointer bg-buttonBlue text-heading rounded-lg  "
                onClick={() => setEdit(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-[#F1F1F1] mt-1 mb-4" />
            <EditProjectForm handleEditClick={handleEditClick} editId={editId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
