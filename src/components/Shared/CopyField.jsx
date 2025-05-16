import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";


const CopyField = ({ heading, content }) => {
  const [copied, setCopied] = useState(false);
  const [isError , setError] = useState()
  const handleCopy = async () => {
    setError("")
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setError("Failed to copy: ", err)
    }
  };

  return (
    <div className=" w-full h-fit rounded-md  bg-Bgprimary shadow-sm">
      <div className="flex justify-between rounded-t-md py-3 px-5 bg-[#2B2D33] items-center ">
        <h3 className="font-satoshi text-heading font-bold capitalize text-base">
          {heading}
        </h3>
        <button
          onClick={handleCopy}
          className="text-commontext active:bg-Bghilight hover:underline text-sm flex items-center gap-1"
        >
          {copied ? (
            <IoCheckmarkDone className="text-[#BFC1C4] text-base" />
          ) : (
            <MdOutlineContentCopy className="text-[#BFC1C4] text-base" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap p-5 bg-Bghilight rounded-b-md font-satoshi text-base font-normal text-heading">
        {content}
      </pre>
      {isError&&(<p className="text-sm text-red-500">{isError}</p>)}
    </div>
  );
};

export default CopyField;
