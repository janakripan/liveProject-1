import React from "react";
import { useSidebar } from "../../contexts/admin/SidebarContext";
import sidebarLogo from "../../assets/zudoku-logo-full-light 1 (1).svg";
import { LuChevronsRight } from "react-icons/lu";
import { sidebarNavlist } from "../../constants/Admin/sibarNavlist";
import { NavLink, useLocation } from "react-router";
import { MdPersonOutline } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useToken } from "../../contexts/auth/UserDataContext";

function AdminSidebar() {
  const location = useLocation();

  const { isOpen, setIsOpen } = useSidebar();
  const {logout} = useToken()
  return (
    <div
      className={`h-screen z-20  fixed overflow-hidden top-0 left-0 bg-Bgsecondary flex flex-col justify-between transition-all duration-300 ${
        isOpen ? "w-[280px]" : "w-[60px] md:w-[80px] "
      } `}
    >
      {/* dashboard navigations and logo */}
      <div className="w-full h-[80px] px-3">
        <div
          className={`w-full h-full  flex flex-row items-center  ${
            isOpen ? "justify-between px-4" : " justify-center px-0"
          }`}
        >
          {isOpen ? (
            <img
              src={sidebarLogo}
              className={` h-[24px] ${
                isOpen ? "w-[120px] opacity-100" : "w-0 opacity-0"
              } `}
              alt="sidebar logo"
            />
          ) : (
            ""
          )}
          <div className="border border-[#CCCCCC] bg-[#7F828A] rounded-md">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={` cursor-pointer text-base text-[#CCCCCC] flex items-center justify-center p-[5px] transition-all duration-300 ${
                isOpen ? "-rotate-180" : "rotate-0"
              }  `}
            >
              <LuChevronsRight />
            </button>
          </div>
        </div>
        <div className=" w-full border border-[#E6E1E2] h-[1px] " />
        {/* sidebar navigations */}
        <div>
          <ul className="w-full h-fit flex flex-col items-center mt-5 ">
            {sidebarNavlist.map((items, index) => {
              const isActive = location.pathname.endsWith(items.path);
              return (
                <NavLink
                  key={index}
                  to={items.path}
                  className={`w-full h-[40px] md:h-[54px] flex flex-row items-center group gap-x-1.5 my-2 md:my-0 md:p-4 p-2 py-4 transition-all duration-300 ${
                    isActive
                      ? "text-buttonBlue bg-Bghilight rounded-[10px] drop-shadow-lg font-bold "
                      : "text-commontext font-medium hover:text-buttonBlue hover:scale-105"
                  }`}
                >
                  {isActive ? (
                    <div>
                      <svg
                        className={`w-[22px] h-[22px] fill-buttonBlue transition-all duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d={items.iconPath} />
                      </svg>
                    </div>
                  ) : (
                    <div>
                      <svg
                        className={`w-[22px] h-[22px] group-hover:fill-buttonBlue fill-commontext transition-all duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d={items.iconPath} />
                      </svg>
                    </div>
                  )}
                  {isOpen ? (
                    <span
                      className={` capitalize whitespace-nowrap font-satoshi transition-all duration-500 ${
                        isOpen ? "w-fit opacity-100" : "w-0 opacity-0"
                      }`}
                    >
                      {items.title}
                    </span>
                  ) : (
                    ""
                  )}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      {/* account and logout buttons */}
      <div className="w-full  h-fit px-3 mb-6">
        <div>
          <NavLink
            to={"account"}
            className={({ isActive }) =>
              `w-full h-[40px] md:h-[54px] flex flex-row items-center  justify-start group gap-x-1.5 pl-2 py-3 md:py-0 md:pl-4 transition-all duration-300 ${
                isActive
                  ? "text-buttonBlue bg-Bghilight rounded-[10px] drop-shadow-lg font-bold "
                  : "text-commontext font-medium hover:text-buttonBlue hover:scale-105"
              }`
            }
          >
            <div>
              <MdPersonOutline style={{ fontSize: "22px" }} />
            </div>

            <span
              className={`  whitespace-nowrap  transition-all duration-300 ${
                isOpen ? "w-fit opacity-100" : "w-0 opacity-0"
              }`}
            >
              Account
            </span>
          </NavLink>
          <button
          onClick={logout}
            className={`cursor-pointer w-full h-[40px] md:h-[54px] flex flex-row items-center group gap-x-1.5 pl-2 md:pl-4 transition-all duration-300 text-commontext font-medium hover:text-buttonBlue group  hover:scale-105"`}
          >
            <div className="group-hover:scale-105">
              <IoLogOutOutline style={{ fontSize: "22" }} />
            </div>

            <span
              className={` capitalize whitespace-nowrap font-satoshi group-hover:scale-105 transition-all duration-300 ${
                isOpen ? "w-fit opacity-100" : "w-0 opacity-0"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
