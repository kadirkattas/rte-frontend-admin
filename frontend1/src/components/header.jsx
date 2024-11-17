// src/components/Header.js
import React from "react";
import { TbLogout } from "react-icons/tb";
import useAuthStore from "../stores/authStore";

const Header = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    <div>
      <div className="3xl:mt-[-2%] mt-[-2.5%] flex justify-between items-center p-6">
        <h1 className="text-[110%] ml-[-2%] font-bold">
          Remote-tech Admin Page
        </h1>
        <button
          className="font-bold mr-[-2%] text-[110%] flex items-center"
          onClick={handleLogout}
        >
          Logout
          <TbLogout className="ml-2" />
        </button>
      </div>
      <div
        className="mt-[-1.2%] border-[1.2px] border-[#E5F0F2] w-[calc(100% + 2rem)] mx-[-1rem] mb-6"
        style={{ boxShadow: "0px 3px 3px #9CD0CE" }}
      />
    </div>
  );
};

export default Header;
