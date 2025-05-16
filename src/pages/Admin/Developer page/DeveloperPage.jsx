import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ImSortAmountAsc } from "react-icons/im";
import SearchBar from "../../../components/Shared/SearchBar";
import DeveloperTable from "./components/DeveloperTable";
import AddDeveloperForm from "./components/AddDeveloperForm";
import { IoMdClose } from "react-icons/io";
import EditDeveloperForm from "../../../components/Shared/EditDeveloperForm";
import { useSidebar } from "../../../contexts/admin/SidebarContext";
import { useDevelopers } from "../../../contexts/admin/DevApiContext";
import loader from "../../../assets/loding animation/Dual Ball@1x-1.0s-200px-200px.svg";

function DeveloperPage() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const { developers, isLoading, error } = useDevelopers();
  const [editData, setEditData] = useState({
    userId: "",
    name: "",
    role: "",
    password: "",
  });
  const { isOpen } = useSidebar();

  console.log(developers)

  const [displayData, setDisplayData] = useState(developers);

  useEffect(()=>{
    setDisplayData(developers)
  },[developers])

  const handleSearch = (query) => {
    if (!query.trim()) {
      setDisplayData(developers || []);

      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filteredResults = developers.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setDisplayData(filteredResults);
    console.log(displayData);
  };

  const handleClick = () => {
    setAdd(!add);
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
          Error fetching developers
        </p>
      </div>
    );
  return (
    <div
      className={` h-full p-5 relative  transition-all duration-300 flex flex-col w-full max-w-screen-xl  mx-auto`}
    >
      <div className="w-full h-fit ">
        <div className="w-full h-fit flex flex-row justify-between items-center ">
          <h1 className="font-satoshi font-bold text-xl text-heading md:text-xl  lg:text-2xl tracking-tight ">
            Developer Management
          </h1>

          <button
            onClick={handleClick}
            className=" bg-buttonBlue cursor-pointer font-satoshi font-bold text-xs md:text-base text-white flex flex-row items-center justify-center active:scale-95 gap-x-2.5 px-3 md:px-4 py-2 md:py-3 rounded-lg hover:scale-105 transition-transform duration-300 "
          >
            <FaPlus />{" "}
            <span className="hidden md:block">Add New Developer</span>
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
            <button className="md:text-base text-xs cursor-pointer font-satoshi hover:scale-105 transition-all duration-300 text-heading bg-[#5A5D63] rounded-xl font-medium flex items-center justify-center gap-2.5 px-3.5 py-3  ">
              <ImSortAmountAsc />
              Sort
            </button>
          </div>
        </div>

        {/* developer table */}
        <div className="w-full lg:h-[63vh] overflow-y-auto no-scrollbar my-5 bg-Bgprimary rounded-lg border border-Bghilight">
          <DeveloperTable
            data={displayData}
            setEdit={setEdit}
            setEditData={setEditData}
          />
        </div>
      </div>
      {add && (
        <div
          className={`w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  transition-all duration-300 md:p-8 p-4 ${
            isOpen ? "md:pl-[290px] " : ""
          }`}
        >
          {" "}
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between ">
              <h3 className="lg:text-2xl text-heading md:text-xl text-lg font-medium font-manrope capitalize ">
                add new developer
              </h3>
              <button
                className="md:text-xl text-base p-1.5 h-fit cursor-pointer bg-buttonBlue text-heading rounded-lg "
                onClick={() => setAdd(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-Bghilight mt-1 mb-4" />
            <AddDeveloperForm
              handleClick={() => {
                handleClick();
              }}
            />
          </div>
        </div>
      )}
      {edit && (
        <div
          className={`w-full h-screen fixed inset-1 top-0  backdrop-blur-md flex items-center  transition-all duration-300 md:p-8 p-4 ${
            isOpen ? "md:pl-[290px] " : ""
          }`}
        >
          {" "}
          <div
            className={`ml-[50px] mr-[10px] md:mx-auto w-full h-fit md:w-9/12 md:h-10/12 lg:w-[750px] lg:h-11/12 max-h-fit overflow-y-auto  bg-Bgprimary drop-shadow-2xl p-4 rounded-[10px] `}
          >
            <div className="w-full flex flex-row justify-between ">
              <h3 className="lg:text-2xl text-heading md:text-xl text-lg font-medium font-manrope capitalize ">
                Edit Developer details
              </h3>
              <button
                className="md:text-xl text-base p-1.5 h-fit cursor-pointer bg-buttonBlue text-heading rounded-lg"
                onClick={() => setEdit(false)}
              >
                <IoMdClose />
              </button>
            </div>
            <hr className="border-Bghilight mt-1 mb-4" />
            <EditDeveloperForm setEdit={setEdit} editData={editData} />
          </div>
        </div>
      )}
    </div>
  );
}

export default DeveloperPage;
