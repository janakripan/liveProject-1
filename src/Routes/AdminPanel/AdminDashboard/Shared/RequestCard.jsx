import React from "react";

function RequestCard({ request }) {
  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const date = new Date(parseInt(timestamp) * 1000);
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return "Just now";
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <div className="w-full h-fit px-4 bg-white">
      <div className=" w-full h-fit p-4  flex flex-row gap-x-2  ">
        <img
          src={request.image}
          className="w-[54px] h-[54] "
          alt="profile photo"
        />
        <div className="w-full h-full min-h-[56px] flex flex-col justify-between items-start">
          <h5 className="font-satoshi font-medium text-base text-black">
            {request.name} updated {request.projectName} documentation
          </h5>
          <span className="font-satoshi font-medium text-[#797677] text-base ">{formatTimeAgo(request.time)}</span>
        </div>
      </div>
      <hr  className="bg-[#C9C5C6] border border-[#C9C5C6]  w-full "/>
    </div>
  );
}

export default RequestCard;
