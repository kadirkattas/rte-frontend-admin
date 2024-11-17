// import React, { useEffect, useState } from "react";
// import CreateButton from "../components/createButton.component";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10; // Sayfa başına 7 paket gösterilecek

//   useEffect(() => {
//     fetchPackages(); // Fetch packages when the component mounts
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id); // Fetch the package data for the selected package
//     navigate(`/edit-question-package/${id}`); // Navigate to the edit page with the package ID
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       console.log("Deleting package with ID:", id);
//       removePackage(id);
//     }
//   };

//   // Pagination logic
//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const customStyles = `
//     .custom-scrollbar::-webkit-scrollbar {
//       width: 8px;
//     }

//     .custom-scrollbar::-webkit-scrollbar-track {
//       background: #f0f4f4;
//       border-radius: 10px;
//     }

//     .custom-scrollbar::-webkit-scrollbar-thumb {
//       background-color: #D8D8DB;
//       border-radius: 10px;

//     }
//   `;

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-[100%]">
//       <style>{customStyles}</style>
//       <div className="flex justify-between items-center mb-3 mt-[-7px]">
//         <h1 className="text-xl font-bold ">Manage Question Packages</h1>
//         <CreateButton onCreate={handleCreate} />
//       </div>

//       <div className="bg-gray-100 p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[38px] w-full">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10  ml-[-85%]">#</span>
//             <div className="w-[1.5px] h-[150%] bg-[#b3b3b4] absolute ml-[-65%] mb-1"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] h-[150%] bg-[#b3b3b4] absolute ml-[350%] mb-1"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10  mr-[-199%]">Question Count</span>
//             <div className="w-[1.5px] h-[150%] bg-[#b3b3b4] absolute ml-[250%] mb-1"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>

//       <div className="custom-scrollbar overflow-y-auto h-[69.7vh] max-h-[65vh] border p-2 rounded mt-2">
//         <div className="mt-1 rounded border-[#E1E1E4] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
//           {currentPackages.map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className="flex items-center justify-between mb-2 p-4 h-auto border-[#DDDDE0] border-[1px] rounded-[5px] w-full text-sm md:text-base bg-white shadow-sm
//                    hover:bg-gray-100 hover:shadow-md hover:border-gray-300 transition duration-200"
//             >
//               {/* Number Column */}
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               {/* Package Name Column */}
//               <div className="flex flex-col w-[60%] relative">
//                 {/* Left Divider */}
//                 <div className="absolute left-[-27.2%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>

//                 {/* Text */}
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>

//                 {/* Right Divider */}
//                 <div className="absolute right-[-5.6%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-27.2%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               {/* Question Count Column */}
//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               {/* Action Column */}
//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-blue-500 hover:text-blue-700 mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>

//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-red-500 hover:text-red-700 mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center mt-[1.3%]">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {"<"}
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//               index + 1 === currentPage
//                 ? "bg-gray-100 border-2 border-gray-300 text-black"
//                 : "bg-transparent hover:bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

// import React, { useEffect, useState } from "react";
// import { TbLogout } from "react-icons/tb";
// import CreateButton from "../components/createButton.component";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useAuthStore from "../stores/authStore";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const { logout } = useAuthStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10;

//   useEffect(() => {
//     fetchPackages();
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id);
//     navigate(`/edit-question-package/${id}`);
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       removePackage(id);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/";
//   };

//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[10px] ml-[-0.5%] h-auto">
//       <div className="mt-[-2.5%] flex justify-between items-center p-6">
//         <h1 className="text-[110%] ml-[-2%] font-bold">
//           Remote-tech Admin Page
//         </h1>
//         <button
//           className="font-bold mr-[-2%] text-[110%] flex items-center"
//           onClick={handleLogout}
//         >
//           Logout
//           <TbLogout className="ml-2" />
//         </button>
//       </div>
//       <div
//         className="mt-[-1.2%]  border-[1.2px] border-[#E5F0F2] w-[calc(100% + 2rem)] mx-[-1rem] mb-6"
//         style={{ boxShadow: "0px 3px 3px #9CD0CE" }}
//       />
//       <div className="flex justify-between items-center mb-2.5 mt-[-14px]">
//         <h2 className="text-[130%] font-bold">Manage Question Packages</h2>
//         <CreateButton onCreate={handleCreate} />
//       </div>

//       {/* <div className="bg-[#47A7A2] p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[42px] w-full text-white"> */}
//       <div className="bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[50px] w-full text-white">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-85%]">#</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[350%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 mr-[-199%]">Question Count</span>
//             <div className="w-[1.6px] h-[157%] bg-[#e4e4ea] absolute ml-[250%]"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>

//       {/* <div className="custom-scrollbar overflow-y-auto h-[69.7vh] max-h-[65vh] border p-2 rounded mt-2">
//         <div className="mt-1 rounded border-[#E1E1E4] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
//           {currentPackages.map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className="flex items-center justify-between mb-2 p-4 h-auto border-[#DDDDE0] border-[1px] rounded-[5px] w-full text-sm md:text-base bg-white shadow-sm
//                    hover:bg-gray-100 hover:shadow-md hover:border-gray-300 transition duration-200"
//             >

//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               <div className="flex flex-col w-[60%] relative">

//                 <div className="absolute left-[-27.2%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>

//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>

//                 <div className="absolute right-[-5.6%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-27.2%] h-[180%] bottom-[-40%] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-blue-500 hover:text-blue-700 mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>

//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-red-500 hover:text-red-700 mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div> */}
//       <div className="custom-scrollbar overflow-y-auto overflow-x-auto h-[69.7vh] max-h-[64vh] p-2 mt-2.5">
//         <div className="mt-[-8px] ml-[-7px]  border-[#E1E1E4] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {currentPackages.map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className={`flex items-center justify-between p-4 h-auto w-[100%] text-sm md:text-base shadow-sm transition duration-200
//           ${
//             index % 2 !== 0
//               ? "bg-[#d0e4e5]/35 border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//               : "bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//           }
//           ${index === 0 ? "border-t-[1.5px]" : "border-t-0"}
//           ${index === 0 ? "rounded-t-[5px]" : ""}
//           ${index === currentPackages.length - 1 ? "rounded-b-[5px]" : ""}`}
//             >
//               {/* Number Column */}
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               {/* Package Name Column */}
//               <div className="flex flex-col w-[60%] relative">
//                 <div className="absolute left-[-27.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>
//                 <div className="absolute right-[-5.6%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-27.2%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               {/* Question Count Column */}
//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               {/* Action Column */}
//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-black mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-black mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-3">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {"<"}
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//               index + 1 === currentPage
//                 ? "bg-gray-100 border-2 border-gray-300"
//                 : "bg-transparent hover:bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

// import React, { useEffect, useState } from "react";
// import { TbLogout } from "react-icons/tb";
// import CreateButton from "../components/createButton.component";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useAuthStore from "../stores/authStore";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const { logout } = useAuthStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10;

//   useEffect(() => {
//     fetchPackages();
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id);
//     navigate(`/edit-question-package/${id}`);
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       removePackage(id);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/";
//   };

//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const customStyles = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #FFFFFF;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #E5F0F2;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
// `;

//   return (
//     <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[10px] h-auto">
//       <style>{customStyles}</style>
//       <div className="mt-[-2.5%] flex justify-between items-center p-6">
//         <h1 className="text-[110%] ml-[-2%] font-bold">
//           Remote-tech Admin Page
//         </h1>
//         <button
//           className="font-bold mr-[-2%] text-[110%] flex items-center"
//           onClick={handleLogout}
//         >
//           Logout
//           <TbLogout className="ml-2" />
//         </button>
//       </div>
//       <div
//         className="mt-[-1.2%] border-[1.2px] border-[#E5F0F2] w-full mx-0 mb-6 lg:w-[calc(100% + 2rem)] lg:mx-[-1rem]"
//         style={{ boxShadow: "0px 3px 3px #9CD0CE" }}
//       />
//       <div className="flex justify-between items-center mb-2.5 mt-[-14px]">
//         <h2 className="text-[130%] font-bold">Manage Question Packages</h2>
//         <CreateButton onCreate={handleCreate} />
//       </div>
//       <div className="bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[50px] w-full text-white">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-85%]">#</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[350%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 mr-[-199%]">Question Count</span>
//             <div className="w-[1.6px] h-[157%] bg-[#e4e4ea] absolute ml-[250%]"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>
//       <div className="custom-scrollbar overflow-y-auto overflow-x-auto h-[69.7vh] max-h-[64vh] p-2 mt-2.5 w-full">
//         <div className="mt-[-8px] ml-[-8px] mr-[-6px] border-[#E1E1E4] flex-1">
//           {currentPackages.map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className={`flex items-center justify-between p-4 h-auto w-full text-sm md:text-base shadow-sm transition duration-200
//                 ${
//                   index % 2 !== 0
//                     ? "bg-[#d0e4e5]/35 border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//                     : "bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//                 }
//                 ${index === 0 ? "border-t-[1.5px]" : "border-t-0"}
//                 ${index === 0 ? "rounded-t-[5px]" : ""}
//                 ${
//                   index === currentPackages.length - 1 ? "rounded-b-[5px]" : ""
//                 }`}
//             >
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               <div className="flex flex-col w-[60%] relative">
//                 <div className="absolute left-[-27.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>
//                 <div className="absolute right-[-5.6%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-27.2%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-black mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-black mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-3">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {"<"}
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//               index + 1 === currentPage
//                 ? "bg-gray-100 border-2 border-gray-300"
//                 : "bg-transparent hover:bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

//önemliiii

// import React, { useEffect, useState } from "react";
// import { TbLogout } from "react-icons/tb";
// import CreateButton from "../components/createButton.component";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useAuthStore from "../stores/authStore";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const { logout } = useAuthStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10;

//   useEffect(() => {
//     fetchPackages();
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id);
//     navigate(`/edit-question-package/${id}`);
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       removePackage(id);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/";
//   };

//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const customStyles = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px; /* Width of the overall scrollbar */
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #FFFFFF;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #E5F0F2;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
// `;
//   return (
//     <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[23px] min-h-[100%]">
//       <style>{customStyles}</style> {/* Apply custom scrollbar styles */}
//       <div className="mt-[-2.5%] flex justify-between items-center p-6">
//         <h1 className="text-[110%] ml-[-2%] font-bold">
//           Remote-tech Admin Page
//         </h1>
//         <button
//           className="font-bold mr-[-2%] text-[110%] flex items-center"
//           onClick={handleLogout}
//         >
//           Logout
//           <TbLogout className="ml-2" />
//         </button>
//       </div>
//       <div
//         className="mt-[-1.2%] border-[1.2px] border-[#E5F0F2] w-[calc(100% + 2rem)] mx-[-1rem] mb-6"
//         style={{ boxShadow: "0px 3px 3px #9CD0CE" }}
//       />
//       <div className="flex justify-between items-center mb-2.5 mt-[-14px]">
//         <h2 className="text-[130%] font-bold">Manage Question Packages</h2>
//         <CreateButton onCreate={handleCreate} />
//       </div>
//       <div className="mt-6 bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[15px] h-[50px] w-full text-white">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-85%]">#</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] h-[157%] bg-[#e4e4ea] absolute ml-[350%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 mr-[-199%]">Question Count</span>
//             <div className="w-[1.6px] h-[157%] bg-[#e4e4ea] absolute ml-[250%]"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>
//       <div className="custom-scrollbar overflow-y-auto overflow-x-auto w-full h-[69.7vh] max-h-[64vh] p-0 mt-[-1px]">
//         <div className="border-[#E1E1E4] flex-1">
//           {currentPackages.map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className={`flex items-center justify-between p-4 h-auto w-full text-sm md:text-base shadow-sm transition duration-200
//           ${
//             index % 2 !== 0
//               ? "bg-[#d0e4e5]/35 border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//               : "bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//           }
//           ${index === 0 ? "border-t-[1.5px]" : "border-t-0"}
//           ${index === 0 ? "rounded-t-[0px]" : ""}
//           ${index === currentPackages.length - 1 ? "rounded-b-[15px]" : ""}`}
//             >
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               <div className="flex flex-col w-[60%] relative">
//                 <div className="absolute left-[-27.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>
//                 <div className="absolute right-[-5.6%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-27.2%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-black mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-black mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-center items-center mt-3">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {"<"}
//         </button>
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//               index + 1 === currentPage
//                 ? "bg-gray-100 border-2 border-gray-300"
//                 : "bg-transparent hover:bg-gray-300"
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

// import React, { useEffect, useState } from "react";
// import { TbLogout } from "react-icons/tb";
// import CreateButton from "../components/createButton.component";
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useAuthStore from "../stores/authStore";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const { logout } = useAuthStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10;

//   useEffect(() => {
//     fetchPackages();
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id);
//     navigate(`/edit-question-package/${id}`);
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       removePackage(id);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     window.location.href = "/";
//   };

//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const customStyles = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px; /* Width of the overall scrollbar */
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #FFFFFF;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #E5F0F2;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
// `;
//   return (
//     <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[23px] min-h-[100%]">
//       <style>{customStyles}</style> {/* Apply custom scrollbar styles */}
//       <div className="mt-[-2.5%] flex justify-between items-center p-6">
//         <h1 className="text-[110%] ml-[-2%] font-bold">
//           Remote-tech Admin Page
//         </h1>
//         <button
//           className="font-bold mr-[-2%] text-[110%] flex items-center"
//           onClick={handleLogout}
//         >
//           Logout
//           <TbLogout className="ml-2" />
//         </button>
//       </div>
//       <div
//         className="mt-[-1.2%] border-[1.2px] border-[#E5F0F2] w-[calc(100% + 2rem)] mx-[-1rem] mb-6"
//         style={{ boxShadow: "0px 3px 3px #9CD0CE" }}
//       />
//       <div className="flex justify-between items-center mb-2.5 mt-[-6px]">
//         <h2 className="text-[130%] font-bold">Manage Question Packages</h2>
//         <CreateButton onCreate={handleCreate} />
//       </div>
//       <div className="mt-[1.2%] bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[15px] h-[50px] w-full text-white">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-85%]">#</span>
//             <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[350%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 mr-[-199%]">Question Count</span>
//             <div className="w-[1.6px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[250%]"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>
//       {/* Limit to 8 items and remove overflow-y */}
//       <div className="custom-scrollbar w-full max-h-[64vh] p-0 mt-[-1px] flex flex-col justify-between">
//         <div className="border-[#E1E1E4] flex-1">
//           {currentPackages.slice(0, 8).map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className={`flex items-center justify-between p-4 h-auto w-full text-sm md:text-base shadow-sm transition duration-200
//           ${
//             index % 2 !== 0
//               ? "bg-[#d0e4e5]/35 border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//               : "bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB]"
//           }
//           ${index === 0 ? "border-t-[1.5px]" : "border-t-0"}
//           ${index === 0 ? "rounded-t-[0px]" : ""}
//           ${index === 7 ? "rounded-b-[15px]" : ""}`}
//             >
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               <div className="flex flex-col w-[60%] relative">
//                 <div className="absolute left-[-26.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>
//                 <div className="absolute right-[-3.8%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-24.9%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               <div className="flex items-center relative right-[1%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-black mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-black mr-[-50%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center mt-1.5 mb-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {"<"}
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//                 index + 1 === currentPage
//                   ? "bg-gray-100 border-2 border-gray-300"
//                   : "bg-transparent hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {">"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

// import React, { useEffect, useState } from "react";
// import { TbLogout } from "react-icons/tb";
// import CreateButton from "../components/createButton.component";
// import InputBox from "../components/InputBox"; // Import InputBox component
// import { FiEdit, FiTrash2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useAuthStore from "../stores/authStore";
// import Header from "../components/header";

// const QuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
//     useQuestionPackageStore();
//   const { logout } = useAuthStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const packagesPerPage = 10;
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchPackages();
//   }, [fetchPackages]);

//   const handleCreate = () => {
//     navigate("/create-question-package");
//   };

//   const handleEdit = async (id) => {
//     await fetchPackageData(id);
//     navigate(`/edit-question-package/${id}`);
//   };

//   const handleDeletePackage = (id) => {
//     if (confirm("Are you sure you want to delete this package?")) {
//       removePackage(id);
//     }
//   };

//   const indexOfLastPackage = currentPage * packagesPerPage;
//   const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
//   const currentPackages = questionPackages.slice(
//     indexOfFirstPackage,
//     indexOfLastPackage
//   );
//   const totalPages = Math.ceil(questionPackages.length / packagesPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleSearchChange = (value) => {
//     setSearchText(value);
//     // Add any filtering logic based on search text here
//   };

//   const customStyles = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #FFFFFF;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #E5F0F2;
//     border-radius: 10px;
//     border: 1.5px solid #D1D1D6;
//   }
// `;

//   return (
//     <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[23px] min-h-[100%]">
//       <style>{customStyles}</style>
//       <Header />

//       <div className="mb-2.5 mt-[-6px] flex justify-between items-center">
//         <h2 className="text-[130%] font-semibold font-['Poppins']">
//           Manage Question Packages
//         </h2>
//         <div className="flex space-x-5">
//           <InputBox
//             onChange={handleSearchChange}
//             placeholder="Search packages..."
//           />
//           <CreateButton onCreate={handleCreate} />
//         </div>
//       </div>

//       <div className="mt-[1.2%] bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[18px] h-[50px] w-full text-white">
//         <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-85%]">#</span>
//             <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 ml-[-218%]">Package Name</span>
//             <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[350%]"></div>
//           </div>
//           <div className="flex items-center justify-center relative h-full">
//             <span className="z-10 mr-[-199%]">Question Count</span>
//             <div className="w-[1.6px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[250%]"></div>
//           </div>
//           <div className="flex items-center justify-center h-full">
//             <span className="z-10 ml-[78%]">Action</span>
//           </div>
//         </div>
//       </div>

//       <div className="custom-scrollbar w-full max-h-[64vh] p-0 mt-[-1px] flex flex-col justify-between">
//         <div className="border-[#E1E1E4] flex-1">
//           {currentPackages.slice(0, 8).map((pkg, index) => (
//             <div
//               key={pkg.id || `pkg-${index}`}
//               className={`flex items-center justify-between p-4 h-auto w-full text-sm md:text-base shadow-sm transition duration-200 bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB] hover:bg-[#d0e4e5]/35
//             ${index === 7 ? "rounded-b-[18px]" : ""}`}
//             >
//               <div className="flex items-center w-[10%] relative">
//                 <span className="ml-1 cursor-pointer text-black">
//                   {index + 1 + indexOfFirstPackage}
//                 </span>
//               </div>

//               <div className="flex flex-col w-[60%] relative">
//                 <div className="absolute left-[-26.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
//                 <span className="ml-[-22.5%] text-black">
//                   {pkg.packageTitle}
//                 </span>
//                 <div className="absolute right-[-3.8%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//                 <div className="absolute right-[-24.9%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
//               </div>

//               <div className="flex items-center relative right-[2.2%]">
//                 <span className="ml-[150%] flex-none">
//                   {pkg.questions.length}
//                 </span>
//               </div>

//               <div className="flex items-center justify-end w-[1%]">
//                 <button
//                   onClick={() => handleEdit(pkg._id)}
//                   className="text-black mr-[100%]"
//                 >
//                   <FiEdit />
//                 </button>
//                 <button
//                   onClick={() => handleDeletePackage(pkg._id)}
//                   className="text-black mr-[1%]"
//                 >
//                   <FiTrash2 />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center items-center mt-1.5 mb-2">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {"<"}
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//                 index + 1 === currentPage
//                   ? "bg-gray-100 border-2 border-gray-300"
//                   : "bg-transparent hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {">"}
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default QuestionPackagePage;

import React, { useEffect, useState } from "react";
import { TbLogout } from "react-icons/tb";
import CreateButton from "../components/createButton.component";
import InputBox from "../components/InputBox"; // Import InputBox component
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useQuestionPackageStore from "../stores/questionPackageStore";
import useAuthStore from "../stores/authStore";
import Header from "../components/header";

const QuestionPackagePage = () => {
  const navigate = useNavigate();
  const { questionPackages, fetchPackages, removePackage, fetchPackageData } =
    useQuestionPackageStore();
  const { logout } = useAuthStore();
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 10;
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);

  const handleCreate = () => {
    navigate("/create-question-package");
  };

  const handleEdit = async (id) => {
    await fetchPackageData(id);
    navigate(`/edit-question-package/${id}`);
  };

  const handleDeletePackage = (id) => {
    if (confirm("Are you sure you want to delete this package?")) {
      removePackage(id);
    }
  };

  const searchedPackages = questionPackages.filter((pack) => {
    if (search != "") {
      return pack.packageTitle.includes(search);
    }
    return true; // Show all if filter is "All"
  });

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = searchedPackages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );
  const totalPages = Math.ceil(searchedPackages.length / packagesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const customStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #FFFFFF;
    border-radius: 10px;
    border: 1.5px solid #D1D1D6;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #E5F0F2;
    border-radius: 10px;
    border: 1.5px solid #D1D1D6;
  }
`;

  return (
    <div className="container mx-auto p-4 border-[2.2px] border-[#D1E4E4] bg-white rounded-[23px] min-h-[100%]">
      <style>{customStyles}</style>
      <Header />

      <div className="mb-2.5 mt-[-6px] flex justify-between items-center">
        <h2 className="text-[130%] font-semibold font-['Poppins']">
          Manage Question Packages
        </h2>
        <div className="flex space-x-5">
          <InputBox onChange={setSearch} placeholder="Search packages..." />

          <CreateButton onCreate={handleCreate} />
        </div>
      </div>

      <div className="mt-[1.2%] bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[18px] h-[50px] w-full text-white">
        <div className="grid grid-cols-4 gap-0 text-center font-bold h-full">
          <div className="flex items-center justify-center relative h-full">
            <span className="z-10 ml-[-85%]">#</span>
            <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[-65%]"></div>
          </div>
          <div className="flex items-center justify-center relative h-full">
            <span className="z-10 ml-[-218%]">Package Name</span>
            <div className="w-[1.5px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[350%]"></div>
          </div>
          <div className="flex items-center justify-center relative h-full">
            <span className="z-10 mr-[-199%]">Question Count</span>
            <div className="w-[1.6px] mb-[0.6%] h-[146%] bg-[#e4e4ea] absolute ml-[250%]"></div>
          </div>
          <div className="flex items-center justify-center h-full">
            <span className="z-10 ml-[78%]">Action</span>
          </div>
        </div>
      </div>

      <div className="custom-scrollbar w-full max-h-[64vh] p-0 mt-[-1px] flex flex-col justify-between">
        <div className="border-[#E1E1E4] flex-1">
          {currentPackages.slice(0, 8).map((pkg, index) => (
            <div
              key={pkg.id || `pkg-${index}`}
              className={`flex items-center justify-between p-4 h-auto w-full text-sm md:text-base shadow-sm transition duration-200 bg-white border-l-[1.5px] border-r-[1.5px] border-b-[1.5px] border-[#D7D7DB] hover:bg-[#d0e4e5]/35
            ${index === 7 ? "rounded-b-[18px]" : ""}`}
            >
              <div className="flex items-center w-[10%] relative">
                <span className="ml-1 cursor-pointer text-black">
                  {index + 1 + indexOfFirstPackage}
                </span>
              </div>

              <div className="flex flex-col w-[60%] relative">
                <div className="absolute left-[-26.2%] h-[240%] bottom-[-70%] w-[1.5px] border-[1.5px] bg-[#D1D1D6]"></div>
                <span className="ml-[-22.5%] text-black">
                  {pkg.packageTitle.length > 98
                    ? `${pkg.packageTitle.substring(0, 98)}...`
                    : pkg.packageTitle}
                </span>
                <div className="absolute right-[-3.8%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
                <div className="absolute right-[-24.9%] h-[240%] bottom-[-70%] border-[1.5px] w-[1.5px] bg-[#D1D1D6]"></div>
              </div>

              <div className="flex items-center relative right-[2.2%]">
                <span className="ml-[150%] flex-none">
                  {pkg.questions.length}
                </span>
              </div>

              <div className="flex items-center justify-end w-[1%]">
                <button
                  onClick={() => handleEdit(pkg._id)}
                  className="text-black mr-[100%]"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => handleDeletePackage(pkg._id)}
                  className="text-black mr-[1%]"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mb-2 fixed bottom-4 left-0 right-0 w-full ml-[4.5%]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
                index + 1 === currentPage
                  ? "bg-gray-100 border-2 border-gray-300"
                  : "bg-transparent hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-2 py-0.5 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPackagePage;
