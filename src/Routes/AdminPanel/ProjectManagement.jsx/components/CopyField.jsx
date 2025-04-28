import React from "react";
import { FaRegCopy } from "react-icons/fa";

const CopyField = ({ heading, content }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className=" w-full h-fit rounded-md  bg-Bgprimary shadow-sm">
      <div className="flex justify-between rounded-t-md py-3 px-5 bg-[#2B2D33] items-center ">
        <h3 className="font-satoshi text-heading font-bold capitalize text-base">{heading}</h3>
        <button
          onClick={handleCopy}
          className="text-commontext hover:underline text-sm flex items-center gap-1"
        >
          <FaRegCopy className="text-base" />
          Copy
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-5 bg-Bghilight rounded-b-md font-satoshi text-base font-normal text-heading">{content}</pre>
    </div>
  );
};

export default CopyField;