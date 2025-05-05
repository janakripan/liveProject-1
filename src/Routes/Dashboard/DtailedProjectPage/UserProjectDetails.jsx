import React, { useRef } from "react";
import {  useParams } from "react-router";
import { projectData } from "../../../constants/Projects/ProjectConstant";
import PreviewSidebar from "../../AdminPanel/ProjectManagement.jsx/components/PreviewSidebar";
import DescriptionRenderer from "../../AdminPanel/AdminDashboard/Shared/DescriptonRenderer";
import CopyField from "../../AdminPanel/ProjectManagement.jsx/components/CopyField";

const UserProjectDetails = () => {

  const scrollContainerRef = useRef(null);
  const { projectId } = useParams();
  const project = projectData.find(
    (project) => String(project.project_id) === String(projectId)
  );
  console.log(project)


  if (!project.modules){return(<div className="w-full h-screen flex flex-col items-center justify-center">
    <span className="text-heading text-6xl font-bold font-satoshi">Oops</span>
    <span className="text-commontext font-normal font-satoshi text-base capitalize mt-2">there are no modules added yet</span>
  </div>)}
  return (
    <div
      className={` max-h-screen w-full  relative  transition-all duration-300 flex flex-col  max-w-screen-xl overflow-hidden mx-auto`}
    >
      <div className="w-full h-full p-4">
        
        <div className="w-full h-[85vh]  mt-8 flex flex-row gap-y-5">
          {/* preview sidebar */}
          <div className="w-1/5 h-full min-h-full overflow-y-auto">
            <PreviewSidebar
              data={project.modules}
              scrollContainerRef={scrollContainerRef}
              
            />
          </div>

          {/* preview conent */}
          <div
            ref={scrollContainerRef}
            className="w-4/5  h-full min-h-full px-4 overflow-hidden overflow-y-scroll "
          >
            {project.modules?.map((module) => (
              <section className="w-full h-fit  " key={module.module_id}>
                {module.sub_modules.map((sub) => (
                  <section
                    key={sub.sub_module_id}
                    className="w-full h-full max-h-[80vh] min-h-[60vh] pb-5  my-5 border-b overflow-hidden border-[#E6E1E280] gap-5"
                    id={sub.sub_module_id}
                  >
                  
                    <div className="w-full h-full min-h-[60vh] mb-5 overflow-hidden max-h-[78vh] flex flex-row ">
                      <div className="w-full lg:w-1/2 flex flex-col overflow-y-scroll no-scrollbar ">
                        <h1 className="text-heading mb-4 font-bold font-satoshi capitalize text-[26px]">
                          {sub.name}
                        </h1>
                        <DescriptionRenderer content={sub.description} />
                      </div>

                      <div className="w-full lg:w-1/2 flex flex-col gap-5 overflow-y-scroll no-scrollbar p-4 ">
                        {sub.urlSets?.map((items, index) => (
                          <div key={index} className="w-full h-fit py-2 ">
                            <CopyField
                              heading={items.urlType}
                              content={items.urlContent}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UserProjectDetails;
