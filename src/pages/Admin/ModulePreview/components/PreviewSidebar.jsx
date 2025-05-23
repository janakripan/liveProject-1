import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export default function PreviewSidebar({ data, scrollContainerRef, edit,setEditProject,setEditModuleId }) {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);


  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  useEffect(() => {
    const handleIntersect = (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // most visible first

      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(handleIntersect, {
        root: scrollContainerRef.current,
        rootMargin: "0px",
        threshold: 0.5,
      });

      observerRef.current = observer;

      const allElements = data.flatMap((module) =>
        module.subModules.map((sub) =>
          document.getElementById(sub.subModuleID)
        )
      );

      allElements.forEach((el) => {
        if (el) observer.observe(el);
      });
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [data, scrollContainerRef]);
  
  
  return (
    <div className="w-full h-full bg-Bgsecondary text-heading p-1.5 space-y-4">
      {data?.map((module) => (
        <div key={module.moduleID}>
          {/* Parent Item */}
          <div
            onClick={() => toggleDropdown(module.moduleID)}
            className={`flex items-center justify-between px-2 py-3 rounded-md hover:bg-[#3B3D43] transition-all duration-100 cursor-pointer  ${
              module.subModules.some((sub) =>Number( sub.subModuleID )== Number(activeId))
                ? "bg-Bghilight text-buttonBlue"
                : "hover:bg-gray-700"
            }`}
          >
            <span className="capitalize">{module.moduleName}</span>
            <span>
              {edit ? (
                <button
                onClick={()=>{setEditProject(true);setEditModuleId(module.moduleID)}}
                 className="h-full aspect-square rounded-md cursor-pointer flex items-center justify-center hover:bg-Bghilight p-2 active:scale-95 transition-all duration-150">
                  <FiEdit />
                </button>
              ) 
              : openDropdowns[module.moduleID] ? (
                <FaChevronUp size={16} />
              ) : (
                <FaChevronDown size={16} />
              )}
            </span>
          </div>

          {/* Children */}
          {openDropdowns[module.moduleID] && (
            <div className="space-y-1 mt-1 flex flex-col">
              {module.subModules?.map((child) => (
                <button
                  key={child.subModuleID}
                  className={`block w-full text-left px-2 py-1 rounded capitalize transition-all duration-100 ${
                    activeId == child.subModuleID
                      ? "bg-[#9747FF0A] text-[#9747FF]"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    const element = document.getElementById(
                      child.subModuleID
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {child.subModuleID}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
