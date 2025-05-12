import React, { useState } from "react";
import logo from "../../assets/zudoku-logo-full-light 1 (1).svg";
import { useLocation, useNavigate, useParams } from "react-router";
import { projectData } from "../../constants/Projects/ProjectConstant";
import { IoNotifications } from "react-icons/io5";
import { useToken } from "../../contexts/auth/UserDataContext";
import { LuLogOut } from "react-icons/lu";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { userToken, logout } = useToken();

  const authToken = userToken?.FullName;

  const userProjects = projectData.filter((project) =>
    project.developers.some((dev) => dev.name === authToken)
  );

  const handleChange = (e) => {
    const selectedId = e.target.value;
    if (projectId !== selectedId) {
      navigate(`/user/${selectedId}`);
    }
  };

  const getDeveloperInitials = (name) => {
    if (!name || name.trim() === "") return "NA";

    const words = name.trim().split(" ").filter(Boolean);

    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    } else {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
  };

  return (
    <div className="w-full h-fit bg-Bgsecondary box-border ">
      <div className="w-full max-w-screen-xl mx-auto flex flex-row items-center px-5 py-0 justify-between box-border relative ">
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
                className=" text-heading border-0  font-satoshi font-bold text-base capitalize bg-Bgsecondary focus:outline-0  p-2 rounded"
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
            <IoNotifications />
          </div>
          <button
            type="buton"
            onClick={() => setIsOpen(!isOpen)}
            className=" cursor-pointer w-6 aspect-square rounded-full flex items-center justify-center text-heading text-[10px] font-bold  bg-buttonBlue "
          >
            {getDeveloperInitials(authToken)}
          </button>
        </div>
        {isOpen && (
          <div
            className={`w-fit h-fit bg-Bghilight  p-1 rounded-lg absolute top-15 right-0 transition-all duration-300`}
          >
            <button
              onClick={logout}
              className="w-fit h-fit px-5 py-3 gap-2 cursor-pointer flex flex-row items-center hover:bg-Bgprimary transition-all duration-300 rounded-md text-heading hover:text-buttonBlue"
            >
              <span className=" text-md font-satoshi font-medium  transition-all duration-300 ">
                Log Out
              </span>
              <span className="text-md font-satoshi font-medium  transition-all duration-300 ">
                {" "}
                <LuLogOut />{" "}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
