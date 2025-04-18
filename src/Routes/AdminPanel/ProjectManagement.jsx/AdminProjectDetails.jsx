import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import { FaPlus } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { ImSortAmountAsc } from "react-icons/im";
import SearchBar from "../AdminDashboard/Shared/SearchBar";
import ProjectModulesTable from "./components/ProjectModulesTable";




const AdminProjectDetails = () => {
    const [selectOpen , setSelectOpen] = useState(false)
    const [add , setAdd] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
      
    const selectRef = useRef(null);

  const { projectId } = useParams();
  const navigate = useNavigate()
  const project = projectData.find((p) => String(p.project_id) === String(projectId));
  console.log("Project Data:", project);
  
  
  const [displayData, setDisplayData] = useState(project || []);
  useEffect(() => {
    const updatedProject = projectData.find(
      (p) => String(p.project_id) === String(projectId)
    );
    setDisplayData(updatedProject || []);
  }, [projectId]);
  console.log(displayData)

  

  const handleChange = (e) => {
    
    const selectedId = e.target.value;
    if (projectId !== selectedId) {
      navigate(`/admin/project/${selectedId}`);
      selectRef.current?.blur();
      
    }

  };

  const handleSearch = (query) =>{
     setSearchQuery(query);
    
        if (!query.trim()) {
          setDisplayData(project || []);
    
          return;
        }
        const lowerCaseQuery = query.toLowerCase();
        const filteredResults = (project?.modules || []).filter((item) =>
          Object.values(item).some((value) =>
            String(value).toLowerCase().includes(lowerCaseQuery)
          )
        );
        setDisplayData(filteredResults);

  }
  


  
  return (
    <div
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col  max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-full">
        <div className="w-full h-fit flex flex-row justify-between items-center  ">
          <div className="flex flex-col md:flex-row items-center gap-2 ">
            <span className="font-satoshi text-[#40CBE0] font-medium text-base ">
              Project
            </span>
           <div className="flex flex-row gap-2 items-center">
           <span className={`text-xs text-[#5A5A5A] transition-all duration-200 ${
                selectOpen ?"rotate-90" : "rotate-0"
            } `}>
              <FaCaretRight />
            </span>
            <div>
              <select
                onChange={(e)=>{handleChange(e);setSelectOpen(false); }}
                ref={selectRef}
                onFocus={() => setSelectOpen(true)}
                onBlur={() => setSelectOpen(false)}
                value={projectId}
                className=" text-heading border-0 appearance-none transition-all  font-satoshi font-bold text-base capitalize bg-Bgprimary focus:outline-0  p-2 rounded"
              >
                {projectData.map((project) => (
                  <option key={project.project_id} value={project.project_id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
           </div>
          </div>

          <button 
          onClick={() => navigate(`/admin/project/${projectId}/add-module`)}
          className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-base text-white flex flex-row items-center justify-center gap-x-2.5 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300 ">
            <FaPlus />
            <span className="hidden md:block"> Add New Module</span>
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
            <button className="text-base cursor-pointer font-satoshi hover:scale-105 transition-all duration-300 text-heading bg-[#5A5D63] rounded-xl font-medium flex items-center justify-center gap-2.5 px-3.5 py-3 ">
              <ImSortAmountAsc />
              Sort
            </button>
          </div>
        </div>

        {/* module details table */}
        <div className="w-full max-h-[75vh] h-fit  lg:max-h-[63vh] overflow-y-auto my-5 no-scrollbar rounded-lg border border-[#4C4F55]">
          <ProjectModulesTable displayData={displayData} />

        </div>

      </div>
    </div>
  );
};

export default AdminProjectDetails;
