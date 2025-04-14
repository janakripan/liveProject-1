import React from "react";
import logo from "../../assets/zudoku-logo-full-light 1 (1).svg";
import { useLocation, useNavigate, useParams } from "react-router";
import { projectData } from "../../constants/Projects/ProjectConstant";
import { IoNotifications } from "react-icons/io5";

const DashboardHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const authToken = "Alice";

  const userProjects = projectData.filter((project) =>
    project.developers.some((dev) => dev.name === authToken)
  );



  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (projectId !== selectedId) {
      navigate(`/projects/${selectedId}`);
    }
  };

  return (
    <div className="w-full h-fit bg-Bgsecondary box-border ">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center px-5 py-0 md:justify-between box-border justify-center ">
        <div
          className={`w-fit h-fit  flex flex-row  ${
            location.pathname.endsWith("user") ? "items-end" : "items-center"
          } `}
        >
          {location.pathname.endsWith("user") ? (
            <div className=" w-fit h-fit capitalize font-satoshi font-bold text-heading p-3 pt-5  border-b-buttonBlue border-b ">
              projects
            </div>
          ) : (
            <div>
              <select
                onChange={handleChange}
                value={projectId}
                className=" text-heading border-0  font-satoshi font-bold text-base capitalize bg-Bgprimary  p-2 rounded"
              >
                {userProjects.map((project) => (
                  <option key={project.project_id} value={project.project_id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="py-4.5">
          <img src={logo} className="w-auto h-auto max-w-[120px]" alt="logo" />
        </div>
        <div className="w-fit h-fit  flex flex-row items-center justify-between gap-x-6">
          <div className="text-heading text-2xl ">
            <IoNotifications/>
          </div>
          <div className=" w-6 aspect-square rounded-full flex items-center justify-center text-heading text-[10px] font-bold  bg-buttonBlue ">
            {
              authToken?.slice(0, 2).toUpperCase()
            }

          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
