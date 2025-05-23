import React, { useEffect, useRef, useState } from "react";
import { FaCaretRight, FaPlus } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { ImSortAmountAsc } from "react-icons/im";
import SearchBar from "../../../components/Shared/SearchBar";
import SubmodulesTable from "./components/SubmodulesTable";
import { useModules } from "../../../contexts/admin/ModulesApiContext";
import { useSubmodule } from "../../../contexts/admin/SubmodulesApiContext";
import loader from '../../../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg'

const ModuleDetails = () => {
  const [selectOpen, setSelectOpen] = useState(false);
  const { projectId, moduleId } = useParams();
  const {modules} = useModules()
  const {submodules , isLoading , error} = useSubmodule()
  const navigate = useNavigate();
  const selectRef = useRef(null);

  const projectModules = modules?.filter((mod) => Number(mod.projectAID) === Number(projectId))
  const relatedSubmodules = submodules?.filter(mod =>Number(mod.moduleID)=== Number(moduleId))

  console.log(relatedSubmodules)

  const module = projectModules?.find(
    (module) => Number(module.moduleID) === Number(moduleId)
  );
  
  const [displayData, setDisplayData] = useState(relatedSubmodules|| []);

useEffect(() => {
  if (JSON.stringify(displayData) !== JSON.stringify(relatedSubmodules)) {
    setDisplayData(relatedSubmodules || []);
  }
}, [relatedSubmodules,displayData]);

  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (moduleId !== selectedId) {
      navigate(`/admin/project/${projectId}/modules/${selectedId}`);
      selectRef.current?.blur();
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setDisplayData(modules || []);

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
      className={`h-screen w-full p-5 relative  transition-all duration-300 flex flex-col  max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-full">
        <div className="w-full h-fit flex flex-row justify-between items-center  ">
          <div className="flex flex-col md:flex-row md:items-center items-start md:gap-x-2 ">
            <span className="font-satoshi text-[#40CBE0] font-medium text-xs md:text-base ">
              Module
            </span>
            <div className="flex flex-row md:gap-2 items-center">
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
                  value={moduleId}
                  className=" text-heading border-0 appearance-none transition-all  font-satoshi font-bold md:text-base text-xs capitalize bg-Bgprimary focus:outline-0  p-2 rounded-md"
                >
                  {projectModules?.map((mod) => (
                    <option key={mod.moduleID} value={mod.moduleID}>
                      {mod.moduleName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              navigate(
                `/admin/project/${projectId}/modules/${moduleId}/add-submodule`
              )
            }
            className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-xs md:text-base text-white flex flex-row items-center justify-center active:scale-95 gap-x-2.5 px-3 md:px-4 py-2 md:py-3 rounded-lg hover:scale-105 transition-transform duration-300 "
          >
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
            <button className="md:text-base text-xs cursor-pointer font-satoshi hover:scale-105 transition-all duration-300 text-heading bg-[#5A5D63] rounded-xl font-medium flex items-center justify-center gap-2.5 px-3.5 py-3">
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
