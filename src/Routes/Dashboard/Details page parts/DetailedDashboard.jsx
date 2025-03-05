import React from "react";
import DetailsSidebar from "./DetailsSidebar";
import { SlOptionsVertical } from "react-icons/sl";
import { detailNav } from "../../../constants/detailsconstant";
import { Link } from "react-router";
import Apitester from "./Apitester";

function DetailedDashboard() {
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-[80vh] pb-10 flex flex-col   ">
      <div className="w-full h-fit flex items-center justify-between mb-6">
        <h1 className="font-medium font-poppins text-4xl ">
          Swagger Pet Store
        </h1>
        <button className=" p-3">
          <SlOptionsVertical />
        </button>
      </div>
      <p className="font-poppins font-normal text-base mb-6">
        This is a sample Pet Store Server based on the OpenAPI 3.0
        specification. You can find out more about Swagger at http://swagger.io.
        In the third iteration of the pet store, we've switched to the design
        first approach! You can now help us improve the API whether it's by
        making changes to the definition itself or to the code. That way, with
        time, we can improve the API in general, and expose some of the new
        features in OAS3.
      </p>
      <ul className="w-6/12 h-fit flex flex-row justify-between">
        {detailNav.map((items, index) => (
          <Link key={index} to={items.path}>
            <li className=" px-2 py-1 bg-gray-300 text-base font-medium font-poppins rounded-lg ">
              {items.title}
            </li>
          </Link>
        ))}
      </ul>

      <div className="w-full h-full flex flex-row gap-x-2 pt-3  ">
        <div className="h-full  w-80 relative   ">
          <DetailsSidebar />
        </div>
        <div className="w-full h-full mt-2 ">
          <h2 className="font-medium font-poppins text-2xl ">
            Update an existing pet
          </h2>
          <p className="font-poppins text-base font-normal my-5">
            Update an existing pet by Id
          </p>
          <h4 className="text-2xl font-poppins font-normal mt-4">
            Request Body
          </h4>
          <div className=" w-full h-fit flex flex-col p-4 gap-4 ">
            <div className=" h-fit w-full">
              <Apitester />
            </div>
            <div className=" h-fit w-full">
              <Apitester />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedDashboard;
