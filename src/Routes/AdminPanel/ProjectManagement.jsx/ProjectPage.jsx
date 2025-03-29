import React, { useState } from "react";
import { useSidebar } from "../../../contexts/admin/SidebarContext";
import { FaPlus } from "react-icons/fa6";
import { ImSortAmountAsc } from "react-icons/im";
import SearchBar from "../AdminDashboard/Shared/SearchBar";
import ProjectTable from "./components/ProjectTable";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import AddProjectForm from "./components/AddProjectForm";
function ProjectPage() {
  const { isOpen } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [displayData, setDisplayData] = useState(projectData); 
  const [add , setAdd] = useState(false)
  

  const handleSearch = (query) => {
    setSearchQuery(query);

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
    console.log(displayData)
    
  };
  const handleClick = () =>{
    setAdd(!add)
  }

  return (
    <div
      className={` h-full p-5  transition-all duration-300 ${
        isOpen ? "md:ml-[280px]" : "mx-auto ml-[44px] md:ml-[80px]"
      }`}
    >
      <div className="w-full h-fit ">
        <div className="w-full h-fit flex flex-row justify-between items-center ">
          <h1 className="font-satoshi font-bold lg:text-2xl md:text-xl text-lg tracking-tight ">
            API Project Management
          </h1>

          <button 
          onClick={handleClick}
          className=" bg-[#025964] font-satoshi font-bold text-base text-white flex flex-row items-center justify-center gap-x-2.5 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300 ">
            <FaPlus /><span className="hidden md:block"> Add New Project</span>
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
            <button className="text-base font-satoshi hover:scale-105 transition-all duration-300 text-black bg-[#C9C5C6] rounded-xl font-medium flex items-center justify-center gap-2.5 px-3.5 py-3 ">
              <ImSortAmountAsc />
              Sort
            </button>
          </div>
        </div>

      {/* projects table */}
        <div className="w-full h-fit my-5 bg-white">
          <ProjectTable data={displayData}/>



        </div>
      </div>
      {add && (
        <div className="w-full h-screen fixed  inset-0 backdrop-blur-md flex items-center justify-center ">
          <div className="ml-[70px] mr-[10px] md:mx-0 w-full h-fit md:w-6/12 md:h-7/12 lg:w-[800px] lg:h-fit bg-white drop-shadow-2xl p-4 rounded-[10px]">
            <h3 className="text-2xl font-medium font-manrope capitalize ">
              add new developer
            </h3>
            <hr className="border-[#F1F1F1] mt-1 mb-4" />
            <AddProjectForm handleClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;
