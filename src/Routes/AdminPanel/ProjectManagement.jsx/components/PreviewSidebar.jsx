import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function PreviewSidebar({ data,scrollContainerRef }) {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);
  console.log(activeId)

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
        root:  scrollContainerRef.current,
        rootMargin: "0px",
        threshold: 0.5,
      });
  
      observerRef.current = observer;
  
      const allElements = data.flatMap((module) =>
        module.sub_modules.map((sub) => document.getElementById(sub.sub_module_id))
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
  }, [data,scrollContainerRef]);
  return (
    <div className="w-full h-full bg-Bgsecondary text-heading p-1.5 space-y-4">
      {data.map((module) => (
        <div key={module.module_id}>
          {/* Parent Item */}
          <div
            onClick={() => toggleDropdown(module.name)}
            className={`flex items-center justify-between px-2 py-3 rounded-md hover:bg-[#3B3D43] transition-all duration-100 cursor-pointer  ${
              module.sub_modules.some((sub) => sub.sub_module_id == activeId)
                      ? "bg-Bghilight text-buttonBlue"
                      : "hover:bg-gray-700"
                  }`}
          >
            <span className="capitalize">{module.name}</span>
            {openDropdowns[module.name] ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </div>

          {/* Children */}
          {openDropdowns[module.name] && (
            <div className="space-y-1 mt-1 flex flex-col">
              {module.sub_modules.map((child) => (
                <button
                  key={child.sub_module_id}
                  className={`block w-full text-left px-2 py-1 rounded capitalize transition-all duration-100 ${
                    activeId == child.sub_module_id
                      ? "bg-[#9747FF0A] text-[#9747FF]"
                      : "hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    const element = document.getElementById(child.sub_module_id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    };
                    
                    
                  }}
                >
                  {child.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
