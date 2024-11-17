import React from "react";
import { FiSearch } from "react-icons/fi";

const InputBox = ({ placeholder = "Enter text...", onChange }) => {
  return (
    <div className="w-[280px] h-[35px] bg-white rounded-[25px] border-2 border-[#9dd0ce] flex items-center">
      <input
        type="text"
        className="w-full h-full px-4 py-1 rounded-l-[25px] focus:outline-none flex items-center"
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
      <span className="pr-3 text-[100%] text-[#9dd0ce] font-semibold flex items-center">
        <FiSearch />
      </span>
    </div>
  );
};

export default InputBox;
