import React, { useEffect, useRef, useState } from "react";
import { FaCaretRight, FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import { ImSortAmountAsc } from "react-icons/im";
import SearchBar from "../AdminDashboard/Shared/SearchBar";
import SubmodulesTable from "./components/SubmodulesTable";

const ModuleDetails = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const { projectId, moduleId } = useParams();
  const navigate = useNavigate();
  const selectRef = useRef(null);

  const project = projectData.find(
    (project) => String(project.project_id) === String(projectId)
  );
  const module = project?.modules.find(module => 
    String(module.module_id) === String(moduleId))
  const [displayData, setDisplayData] = useState(module?.sub_modules || []);
  
   useEffect(() => {
      const updatedModule = project?.modules.find(
        (m) => String(m.module_id) === String(moduleId)
      );
      setDisplayData(updatedModule || []);
    }, [moduleId]);
  

  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (moduleId !== selectedId) {
      navigate(`/admin/project/${projectId}/modules/${selectedId}`);
      selectRef.current?.blur();
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (!query.trim()) {
      setDisplayData(project?.modules || []);

      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = (module?.sub_modules || []).filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setDisplayData(filteredResults);
  };
  console.log(displayData)

  return (
    <div
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col  max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-full">
        <div className="w-full h-fit flex flex-row justify-between items-center  ">
          <div className="flex flex-col md:flex-row items-center gap-2 ">
            <span className="font-satoshi text-[#40CBE0] font-medium text-base ">
              Module
            </span>
            <div className="flex flex-row gap-2 items-center">
              <span
                className={`text-xs text-[#5A5A5A] transition-all duration-200 ${
                  selectOpen ? "rotate-90" : "rotate-0"
                } `}
              >
                <FaCaretRight />
              </span>
              <div>
                <select
                  onChange={(e) => {
                    handleChange(e);
                    setSelectOpen(false);
                  }}
                  ref={selectRef}
                  onFocus={() => setSelectOpen(true)}
                  onBlur={() => setSelectOpen(false)}
                  value={projectId}
                  className=" text-heading border-0 appearance-none transition-all  font-satoshi font-bold text-base capitalize bg-Bgprimary focus:outline-0  p-2 rounded"
                >
                  {project.modules.map((project) => (
                    <option key={project.module_id} value={project.module_id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button 
          onClick={()=>navigate(`/admin/project/${projectId}/modules/${moduleId}/add-submodule`)}
          className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-base text-white flex flex-row items-center justify-center gap-x-2.5 px-4 py-3 rounded-lg hover:scale-105 transition-transform duration-300 ">
            <FaPlus />
            <span className="hidden md:block"> Add New Sub Module</span>
          </button>
        </div>

        {/* searchbar and sort button */}

        <div className="w-full h-fit mt-10  flex flex-row justify-between items-center gap-x-5 gap-y-0 py-0 ">
          <div className="w-full h-full flex-1  ">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search modules"
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

        <div className="w-full max-h-[75vh] h-fit  lg:max-h-[63vh] overflow-y-auto my-5 no-scrollbar rounded-lg border border-[#4C4F55]">
          <SubmodulesTable displayData={displayData} />
        </div>
      </div>
    </div>
  );
};

export default ModuleDetails;
