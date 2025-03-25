import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import * as Yup from "yup";

function SearchBar({ onSearch, placeholder, className = "" }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const schema = Yup.string()
    .trim()
    .min(2, "Search term must be at least 2 characters")
    .max(50, "Search term must be at most 50 characters")
    .required("Search term is required");

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value || "");
    
    if (value === "") {
      setError("");
      if (onSearch) {
        onSearch("");
      }
      return;
    }

    try {
      await schema.validate(value);
      setError("");
      if (onSearch) {
        onSearch(value);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleClear = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };

  const handleBlur = () => {
    setError("");
  };

  return (
    <div className={` w-full h-full `}>
      <div className="relative w-full h-full flex flex-col justify-center">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full h-[46px] px-4 pl-8 pr-10 border border-[#AEAAAB] placeholder:font-medium placeholder:font-satoshi placeholder:text-[#797677] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#025964] transition  ${className}`}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition"
          >
            <IoClose size={18} />
          </button>
        )}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2  text-2xl text-[#797677]">
          <IoSearchOutline />
        </div>
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}

export default SearchBar;
