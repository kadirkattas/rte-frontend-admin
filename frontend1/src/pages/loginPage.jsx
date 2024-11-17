import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import React from "react";
import loginImage from "../assets/login.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useAuthStore(); // Your auth store providing login function and states
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    await login(email, password); // Attempt to log in with the provided credentials
    if (!error) {
      // Check if there's no error after login attempt
      navigate("/manage-question-package"); // Navigate to the management page on successful login
    }
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <img
        src={loginImage}
        alt="Background"
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          padding: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          left: "63%",
          transform: "translateX(-50%)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="w-[218px] h-20 text-right text-[#42B5B3] text-[43px] mr-20 mb-4 font-bold font-['Roboto'] uppercase leading-none tracking-tight">
            logın
          </div>
          <div>
            <div className="text-left text-[#42B5B3] text-[17px] font-bold font-['Roboto'] uppercase leading-none tracking-tight">
              Email
            </div>
            <div className="relative mt-3">
              <input
                required
                type="email"
                name="email"
                value={email} // Set the value of the email input
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="w-[285px] h-10 pl-3 pr-3 pt-2 pb-2 border-b-[3px] border-[#B0D0CA] text-left text-[#657975] text-[17px] font-bold font-['Roboto'] leading-none"
                style={{ background: "transparent", outline: "none" }}
              />
            </div>
            <div className="mt-[50px] text-left text-[#42B5B3] text-[17px] font-bold font-['Roboto'] uppercase leading-none tracking-tight">
              Password
            </div>
            <div className="relative mt-2">
              <input
                required
                type="password"
                name="password"
                value={password} // Set the value of the password input
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                className="w-[285px] h-10 pl-3 pr-3 pt-2 pb-2 border-b-[3px] border-[#B0D0CA] text-left text-[#657975] text-[17px] font-bold font-['Roboto'] leading-none"
                style={{ background: "transparent", outline: "none" }}
              />
            </div>
          </div>
          <button
            className="w-[280px] h-[55px] bg-[#3CC3BD] rounded-[41px] mt-[60px] flex justify-center items-center"
            type="submit"
          >
            <span className="text-white font-bold text-[22px]">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
