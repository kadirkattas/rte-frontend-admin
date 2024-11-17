// // import { Link } from "react-router-dom";

// // const SideBar = () => {
// //   return (
// //     <div className="w-65 h-screen bg-white text-gray-500 flex flex-col z-10">
// //       <div className="p-6">
// //         <h1 className="text-3xl font-bold text-[#3cc3bd] flex items-center">
// //           Iview
// //         </h1>
// //       </div>
// //       <ul className="flex flex-col p-4 space-y-4">
// //         <li>
// //           <Link
// //             to="/manage-question-package"
// //             className="hover:bg-gray-200 p-2 rounded"
// //           >
// //             Manage Question Packages
// //           </Link>
// //         </li>
// //         <li>
// //           <Link to="/interview-list" className="hover:bg-gray-200 p-2 rounded">
// //             Interview List
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SideBar;

// // import { Link } from "react-router-dom";
// // import image from "../assets/image.png";

// // const SideBar = () => {
// //   return (
// //     <div className="w-[220px] h-[683px] bg-white rounded-[12px] border-2 border-[#E1E1E4] text-gray-500 flex flex-col mt-[6px] ml-[16px] z-10 p-2.5 font-['Poppins']">
// //       <div className="p-6 items-center justify-center">
// //         <img src={image} alt="Logo" className="w-[196px] h-auto ml-[-16px]" />
// //       </div>
// //       {/* Menu Title */}
// //       <div className="w-[99px] h-[21px] text-black text-lg font-bold mt-4">
// //         Menu
// //       </div>
// //       {/* Gradient Line */}
// //       <div className="w-[201px] h-1 bg-gradient-to-r from-[#d6d6d6] to-[#f6f6f6] mt-[20px]" />
// //       {/* Menu Items */}
// //       <ul className="mt-[10px] flex flex-col p-4 space-y-5">
// //         <li>
// //           <Link
// //             to="/manage-question-package"
// //             className="w-[166px] text-black text-base font-medium hover:bg-gray-300 p-2 rounded flex flex-col pl-3"
// //           >
// //             <span>Manage Question</span>
// //             <span>Package</span>
// //           </Link>
// //         </li>
// //         <li>
// //           <Link
// //             to="/interview-list"
// //             className="w-[103px] h-[22px] text-black text-base font-medium hover:bg-gray-300 p-2 rounded pl-3"
// //           >
// //             Interview List
// //           </Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default SideBar;

// import { Link } from "react-router-dom";
// import image from "../assets/image.png";
// import { FaEdit } from "react-icons/fa";
// import { MdOutlinePeopleAlt } from "react-icons/md";

// const SideBar = () => {
//   return (
//     <div className="w-[228px] h-[675px] bg-white rounded-[12px] border-2 border-[#E1E1E4] text-gray-500 flex flex-col mt-[6px] ml-[16px] z-10 p-2.5 font-['Poppins'] shadow-lg">
//       <div className="p-6 items-center justify-center">
//         <img src={image} alt="Logo" className="w-[196px] h-auto ml-[-16px]" />
//       </div>
//       {/* Menu Title */}
//       <div className="w-[99px] h-[21px] text-black text-lg font-bold mt-4">
//         Menu
//       </div>
//       {/* Gradient Line */}
//       <div className="w-[205px] h-1 bg-gradient-to-r from-[#d6d6d6] to-[#f6f6f6] mt-[20px] ml-[-5px]" />
//       {/* Menu Items */}
//       <ul className="mt-[10px] flex flex-col p-4 space-y-5">
//         <li>
//           <Link
//             to="/manage-question-package"
//             className="w-full text-black text-[13px] font-bold hover:bg-[#47A7A2] hover:text-white transition duration-300 p-2 rounded flex items-center ml-[-21px]"
//           >
//             <FaEdit className="mr-2 size-[14px]" />
//             <span>Question Package</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/interview-list"
//             className="w-full text-black text-[13px] font-bold hover:bg-[#47A7A2] hover:text-white transition duration-300 p-2 rounded flex items-center ml-[-21px]"
//           >
//             <MdOutlinePeopleAlt className="mr-2 size-[15px]" />
//             <span>Interview List</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;

// import { Link } from "react-router-dom";
// import image from "../assets/image.png";
// import { FaEdit } from "react-icons/fa";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// const SideBar = () => {
//   return (
//     <div className="w-[220px] h-auto bg-white rounded-[12px] border-[2.2px] border-[#D1E4E4] text-gray-500 flex flex-col mt-[15px] ml-[20px] my-4 z-10 p-2.5 font-['Poppins'] pb-4">
//       <div className="p-6 items-center justify-center">
//         <img src={image} alt="Logo" className="w-[150px] h-auto mx-auto" />
//       </div>
//       {/* Menu Title */}
//       <div className="w-full text-black text-lg font-bold mt-4 text-center">
//         Menu
//       </div>
//       {/* Gradient Line */}
//       {/* <div className="w-[90%] h-1 bg-gradient-to-r from-[#D6D6D6] to-[#F6F6F6] mt-4 mx-auto" /> */}
//       {/* Menu Items */}
//       <ul className="mt-4 flex flex-col p-4 space-y-3">
//         <li>
//           <Link
//             to="/manage-question-package"
//             className=" text-[13px] font-bold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white transition duration-300 p-2 rounded flex items-center">
//             <FaEdit className="mr-2 text-[16px]" />
//             <span>Question Package</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/interview-list"
//             className="text-white text-[13px] font-bold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] transition duration-300 p-2 rounded flex items-center">

//             <MdOutlinePeopleAlt className="mr-2 text-[16px]" />
//             <span>Interview List</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };
// export default SideBar;

// import { Link } from "react-router-dom";
// import image from "../assets/image.png";
// import { FaEdit } from "react-icons/fa";
// import { MdOutlinePeopleAlt } from "react-icons/md";

// const SideBar = () => {
//   return (
//     <div className="w-[220px] h-auto bg-white rounded-[12px] border-[2.2px] border-[#D1E4E4] text-gray-500 flex flex-col mt-[15px] ml-[20px] my-4 z-10 p-2.5 font-['Poppins'] pb-4">
//       <div className="p-6 items-center justify-center">
//         <img src={image} alt="Logo" className="w-[150px] h-auto mx-auto" />
//       </div>
//       {/* Menu Title */}
//       <div className="w-full text-black text-lg font-bold mt-4 text-center">
//         Menu
//       </div>
//       {/* Menu Items */}
//       <ul className="mt-5 flex flex-col p-4 space-y-9">
//         <li>
//           <Link
//             to="/manage-question-package"
//             className="text-[13px] font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white transition duration-300 h-[210%] w-[115%] ml-[-12px] rounded-[7px] flex items-center">
//             <FaEdit className="ml-2 mr-3 text-[18px]" />
//             <span>Question Package</span>
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/interview-list"
//             className="text-[13px] font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white transition duration-300 h-[210%] w-[115%] ml-[-12px] rounded-[7px] flex items-center">
//             <MdOutlinePeopleAlt className="ml-2 mr-3 text-[20px]" />
//             <span>Interview List</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SideBar;

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaEdit } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-[220px] h-auto bg-white rounded-[23px] border-[2.2px] border-[#D1E4E4] text-gray-500 flex flex-col mt-[15px] ml-[20px] my-4 z-10 p-2.5 font-['Poppins'] pb-4">
      <div className="items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[100%] h-[97%] object-contain mx-auto mt-[2%]"
        />
      </div>
      {/* Menu Title */}
      <div className="w-full text-black text-[140%] ml-[-63px] font-bold mt-[28%] text-center">
        Menu
      </div>
      {/* Menu Items */}
      <ul className="mt-3 flex flex-col p-4 space-y-9">
        <li>
          <Link
            to="/manage-question-package"
            className="3xl:text-[14px] text-[13px] font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white transition duration-300 h-[210%] w-[115%] ml-[-12px] rounded-[25px] flex items-center transform hover:scale-105 hover:shadow-lg hover:brightness-105"
          >
            <FaEdit className="ml-2 mr-3 text-[18px]" />
            <span>Question Package</span>
          </Link>
        </li>
        <li>
          <Link
            to="/interview-list"
            className="text-[13px] font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white transition duration-300 h-[210%] w-[115%] ml-[-12px] rounded-[25px] flex items-center transform hover:scale-105 hover:shadow-lg hover:brightness-105"
          >
            <MdOutlinePeopleAlt className="ml-2 mr-3 text-[20px]" />
            <span>Interview List</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
