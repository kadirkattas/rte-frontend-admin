// import React, { useState } from "react";
// import { FiClipboard, FiTrash2, FiEdit3 } from "react-icons/fi";
// import { IoIosLink } from "react-icons/io";
// import ViewInterviewDetailsComponent from "./interviewDetail.component";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineDriveFileMove } from "react-icons/md";
// import Button from "../components/button.component";
// import EditInterviewComponent from "../components/EditInterviewComponent"; // EditInterviewComponent bileşenini import ediyoruz

// const InterviewCard = ({ interview, onDelete, onEdit }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [showEditPopup, setShowEditPopup] = useState(false); // Edit popup kontrolü için
//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(false);
//   };

//   const handleSeeVideos = () => {
//     navigate("/video-collection/" + interview._id);
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(
//       "localhost:5173/interview/" + interview.interviewUrl
//     );
//     alert("Link copied to clipboard!");
//   };

//   const handleEdit = () => {
//     setShowEditPopup(true); // Düzenleme popup'ını aç
//   };

//   const handleCloseEdit = () => {
//     setShowEditPopup(false); // Düzenleme popup'ını kapat
//   };

//   return (
//     <div className="relative w-[90%] h-[95%]">
//       {/* Gradient Background */}
//       <div className="absolute top-[-10%] left-0 right-0 h-[100%] w-full bg-gradient-to-br from-[#47a7a2] via-[#225654] to-[#8cccc9] rounded-[20px] z-0" />

//       {/* White Card */}
//       <div className="relative bg-white p-4 border-2 h-[111%] w-full rounded-[20px] z-10 flex flex-col justify-between">
//         <div>
//           <div className="flex mb-1 justify-between items-center">
//             {/* Left-aligned Copy Link Button */}
//             <div className="flex items-center mt-[-23%]">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 bg-white">
//                 <button
//                   onClick={copyLink}
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-[180%]"
//                   aria-label="Copy link"
//                 >
//                   <IoIosLink />
//                 </button>
//               </div>
//             </div>

//             {/* Right-aligned Buttons in Container */}
//             <div className="w-auto h-auto p-1.5 bg-[#f0f2f5] rounded-[18px] flex items-center space-x-2 mt-[-4%] ml-[50%]">
//               <button
//                 onClick={handleEdit}
//                 className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
//                 aria-label="Edit interview"
//               >
//                 <FiEdit3 />
//               </button>

//               <button
//                 onClick={onDelete}
//                 className="text-gray-500 hover:text-red-500 transition-colors duration-200"
//                 aria-label="Delete interview"
//               >
//                 <FiTrash2 />
//               </button>

//               <button
//                 onClick={handleViewDetails}
//                 className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-[110%]"
//                 aria-label="Details interview"
//               >
//                 <MdOutlineDriveFileMove />
//               </button>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             {interview.interviewTitle}
//           </h2>
//           <p className="text-gray-600 mb-2">Candidates:</p>
//           <div className="flex justify-between ml-[-3%] mt-2 w-[105%] h-[47%] bg-gray-100 p-2 rounded-md ">
//             <p className="text-gray-700 font-bold">
//               TOTAL{" "}
//               <span className="font-normal text-gray-600">
//                 {interview.totalVideos}
//               </span>
//             </p>
//             <p className="text-gray-700 font-bold">
//               ON HOLD{" "}
//               <span className="font-normal text-gray-600">
//                 {interview.onHold}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Divider Line and See Videos Button at the Bottom */}
//         <div className="flex flex-col mt-2">
//           {/* Divider Line */}
//           <div className="w-[99%] h-[1px] bg-gray-300 mx-auto mb-1"></div>

//           {/* See Videos Button */}
//           <button
//             onClick={handleSeeVideos}
//             className="w-full font-bold text-gray-600 text-sm hover:text-gray-700 py-1 rounded transition duration-200 ml-[31%]"
//           >
//             See Videos <span className="text-[120%]">&gt;</span>
//           </button>
//         </div>

//         {showDetails && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <ViewInterviewDetailsComponent
//               onClose={handleCloseDetails}
//               id={interview._id}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InterviewCard;

// import React, { useState } from "react";
// import { FiClipboard, FiTrash2, FiEdit3 } from "react-icons/fi";
// import { IoIosLink } from "react-icons/io";
// import ViewInterviewDetailsComponent from "./interviewDetail.component";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineDriveFileMove } from "react-icons/md";
// import EditInterviewComponent from "../components/EditInterviewComponent";

// const InterviewCard = ({ interview, onDelete, onEdit }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleViewDetails = () => {
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(false);
//   };

//   const handleSeeVideos = () => {
//     navigate("/video-collection/" + interview._id);
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(
//       "localhost:5173/interview/" + interview.interviewUrl
//     );
//     alert("Link copied to clipboard!");
//   };

//   const handleEdit = () => {
//     setShowEditPopup(true); // Düzenleme popup'ını aç
//   };
//   const handleCloseEdit = () => {
//     setShowEditPopup(false); // Düzenleme popup'ını kapat
//   };

//   return (
//     <div className="relative w-[90%] h-[95%]">
//       {/* Gradient Background */}
//       <div className="absolute top-[-10%] left-0 right-0 h-[100%] w-full bg-gradient-to-br from-[#47a7a2] via-[#225654] to-[#8cccc9] rounded-[20px] z-0" />

//       {/* White Card */}
//       <div className="relative bg-white p-4 border-2 h-[111%] w-full rounded-[20px] z-10 flex flex-col">
//         <div className="flex-grow">
//           <div className="flex mb-1 justify-between items-center">
//             {/* Left-aligned Copy Link Button */}
//             <div className="flex items-center mt-[-23%]">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 bg-white">
//                 <button
//                   onClick={copyLink}
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-[180%]"
//                   aria-label="Copy link"
//                 >
//                   <IoIosLink />
//                 </button>
//               </div>
//             </div>

//             {/* Right-aligned Buttons in Container */}
//             <div className="w-auto h-auto p-1.5 bg-[#f0f2f5] rounded-[18px] flex items-center space-x-2 mt-[-4%] ml-[50%]">
//               <button
//                 onClick={handleEdit}
//                 className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
//                 aria-label="Edit interview"
//               >
//                 <FiEdit3 />
//               </button>

//               <button
//                 onClick={onDelete}
//                 className="text-gray-500 hover:text-red-500 transition-colors duration-200"
//                 aria-label="Delete interview"
//               >
//                 <FiTrash2 />
//               </button>

//               <button
//                 onClick={handleViewDetails}
//                 className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-[110%]"
//                 aria-label="Details interview"
//               >
//                 <MdOutlineDriveFileMove />
//               </button>
//             </div>
//           </div>

//           <h2 className="text-xl font-semibold text-gray-800 mb-2">
//             {interview.interviewTitle}
//           </h2>
//           <p className="text-gray-600 mb-2">Candidates:</p>
//           <div className="flex justify-between ml-[-3%] mt-2 w-[105%] h-[47%] bg-gray-100 p-2 rounded-md">
//             <p className="text-gray-700 font-bold">
//               TOTAL{" "}
//               <span className="font-normal text-gray-600">
//                 {interview.totalVideos}
//               </span>
//             </p>
//             <p className="text-gray-700 font-bold">
//               ON HOLD{" "}
//               <span className="font-normal text-gray-600">
//                 {interview.onHold}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Divider Line and See Videos Button at the Bottom */}
//         <div className="mt-auto mb-2">
//           {/* Divider Line */}
//           <div className="w-[94%] h-[1px] bg-gray-300 mx-auto"></div>

//           {/* See Videos Button */}
//           <button
//             onClick={handleSeeVideos}
//             className="w-full font-bold text-gray-600 text-sm hover:text-gray-700 py-1 rounded transition duration-200"
//           >
//             See Videos <span className="text-sm">&gt;</span>
//           </button>
//         </div>
//         {/* Düzenleme Popup'ı */}
//         {showEditPopup && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <EditInterviewComponent
//               interviewId={interview._id}
//               onClose={handleCloseEdit}
//             />
//           </div>
//         )}
//         {showDetails && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <ViewInterviewDetailsComponent
//               onClose={handleCloseDetails}
//               id={interview._id}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InterviewCard;

// import React, { useState } from "react";
// import { FiClipboard, FiTrash2, FiEdit3 } from "react-icons/fi";
// import { IoIosLink } from "react-icons/io";
// import ViewInterviewDetailsComponent from "./interviewDetail.component";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineDriveFileMove } from "react-icons/md";
// import EditInterviewComponent from "../components/EditInterviewComponent";
// import { TfiWorld } from "react-icons/tfi";

// const InterviewCard = ({ interview, onDelete, onEdit }) => {
//   const [showDetails, setShowDetails] = useState(false);
//   const [showEditPopup, setShowEditPopup] = useState(false);
//   const navigate = useNavigate();
//   const [showTooltip, setShowTooltip] = useState(false);

//   const handleToggleTooltip = () => {
//     setShowTooltip(!showTooltip);
//   };

//   const handleViewDetails = () => {
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(false);
//   };

//   const handleSeeVideos = () => {
//     navigate("/video-collection/" + interview._id);
//   };

//   const copyLink = () => {
//     navigator.clipboard.writeText(
//       "localhost:5173/interview/" + interview.interviewUrl
//     );
//     alert("Link copied to clipboard!");
//   };

//   const handleEdit = () => {
//     setShowEditPopup(true);
//   };

//   const handleCloseEdit = () => {
//     setShowEditPopup(false);
//   };

//   return (
//     <div className="relative w-[90%] h-[95%]">
//       {/* Gradient Background */}
//       <div className="absolute top-[-10%] left-0 right-0 h-[100%] w-full bg-gradient-to-br from-[#47a7a2] via-[#225654] to-[#8cccc9] rounded-[20px] z-0" />

//       {/* White Card */}
//       <div className="relative bg-white p-4 border-2 h-[108%] w-full rounded-[20px] z-10 flex flex-col">
//         <div className="flex-grow">
//           <div className="flex mb-1 justify-between items-center">
//             {/* Left-aligned Copy Link Button */}
//             <div className="flex items-center mt-[-23%]">
//               <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 bg-white">
//                 <button
//                   onClick={copyLink}
//                   className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-[180%]"
//                   aria-label="Copy link"
//                 >
//                   <IoIosLink />
//                 </button>
//               </div>
//             </div>

//             {/* Right-aligned Buttons in Container */}
//             <div className="w-auto h-auto p-1.5 bg-[#f0f2f5] rounded-[18px] flex items-center space-x-2 mt-[-4%] ml-[50%]">
//               <button
//                 onClick={handleEdit}
//                 className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
//                 aria-label="Edit interview"
//               >
//                 <FiEdit3 />
//               </button>

//               <button
//                 onClick={onDelete}
//                 className="text-gray-500 hover:text-red-500 transition-colors duration-200"
//                 aria-label="Delete interview"
//               >
//                 <FiTrash2 />
//               </button>

//               <button
//                 onClick={handleViewDetails}
//                 className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-[110%]"
//                 aria-label="Details interview"
//               >
//                 <MdOutlineDriveFileMove />
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <h2
//               className="text-xl font-semibold text-gray-800 mb-4 cursor-pointer"
//               onClick={handleToggleTooltip}
//             >
//               {interview.interviewTitle.length > 19
//                 ? `${interview.interviewTitle.substring(0, 19)}...`
//                 : interview.interviewTitle}
//             </h2>

//             {/* Tooltip */}
//             {showTooltip && (
//               <div className="absolute top-full left-0 mt-1 px-4 py-2 bg-white border-2 border-gray-300 text-black text-sm rounded shadow-lg z-10">
//                 {interview.interviewTitle}
//               </div>
//             )}
//           </div>

//           <div className="mt-6">
//             <p className="text-gray-600">Candidates:</p>
//             <div className="flex justify-between ml-[-3%] mt-2 w-[105%] h-[47%] bg-gradient-to-br to-gray-200 from-gray-100 bg-gray-100 p-3 rounded-md shadow-inner">
//               <div className="absolute h-[20%] w-[2.5px] bg-[#d1d1d6] ml-[7%] mt-[-2%]"></div>
//               <p className="text-gray-700  ml-[12%] text-xs">
//                 TOTAL{" "}
//                 <span className=" text-gray-600 flex ml-[20%] font-bold text-xl">
//                   {interview.totalVideos}
//                 </span>
//               </p>
//               <div className="absolute h-[20%] w-[2.5px] bg-[#d1d1d6] ml-[48.5%] mt-[-2%]"></div>
//               <p className="text-gray-700  mr-[12%] text-xs">
//                 ON HOLD{" "}
//                 <span className=" text-gray-600 flex ml-[20%] font-bold text-xl">
//                   {interview.onHold}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           {/* Divider Line and See Videos Button at the Bottom */}
//           <div className="mt-[7%]">
//             {/* Divider Line */}
//             <div className="w-[100%] h-[1px] bg-gray-400 mx-auto"></div>
//           </div>
//           <div className="flex justify-between items-center mt-[6%] w-full">
//             {/* Published Button */}

//             <span className="font-bold text-gray-600 text-sm hover:text-gray-700 rounded transition duration-200 flex">
//               Published
//             </span>

//             {/* See Videos Button */}
//             <button
//               onClick={handleSeeVideos}
//               className="font-bold text-gray-600 text-sm hover:text-gray-700 rounded transition duration-200"
//             >
//               See Videos <span className="text-sm">&gt;</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Edit Popup */}
//       {showEditPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <EditInterviewComponent
//             interviewId={interview._id}
//             onClose={handleCloseEdit}
//           />
//         </div>
//       )}

//       {/* Details Popup */}
//       {showDetails && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <ViewInterviewDetailsComponent
//             onClose={handleCloseDetails}
//             id={interview._id}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewCard;

import React, { useState } from "react";
import { FiClipboard, FiTrash2, FiEdit3 } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import ViewInterviewDetailsComponent from "./interviewDetail.component";
import { useNavigate } from "react-router-dom";
import { MdOutlineDriveFileMove } from "react-icons/md";
import EditInterviewComponent from "../components/EditInterviewComponent";

const InterviewCard = ({ interview, onDelete, onEdit }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleSeeVideos = () => {
    navigate("/video-collection/" + interview._id);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(
      import.meta.env.VITE_USER_FRONTEND_URL + "/" + interview.interviewUrl
    );
    alert("Link copied to clipboard!");
  };

  const handleEdit = () => {
    setShowEditPopup(true);
  };

  const handleCloseEdit = () => {
    setShowEditPopup(false);
  };

  const isExpired = new Date(interview.interviewExpireDate) < new Date();

  return (
    <div className="relative w-[90%] h-[90%]">
      <div className="absolute top-[-10%] left-0 right-0 h-[100%] w-full bg-gradient-to-br from-[#53c0ba] via-[#378986] to-[#90d2cf] rounded-[20px] z-0" />

      <div className="relative bg-white p-4 border-2 h-[108%] w-full rounded-[20px] z-10 flex flex-col">
        <div className="flex-grow">
          <div className="flex mb-1 justify-between items-center">
            <div className="flex items-center mt-[-23%]">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 bg-white">
                <button
                  onClick={copyLink}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-[180%]"
                  aria-label="Copy link"
                >
                  <IoIosLink />
                </button>
              </div>
            </div>

            <div className="w-auto h-auto p-1.5 bg-[#f0f2f5] rounded-[18px] flex items-center space-x-2 mt-[-4%] ml-[50%]">
              <button
                onClick={handleEdit}
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                aria-label="Edit interview"
              >
                <FiEdit3 />
              </button>

              <button
                onClick={onDelete}
                className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                aria-label="Delete interview"
              >
                <FiTrash2 />
              </button>

              <button
                onClick={handleViewDetails}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-200 text-[110%]"
                aria-label="Details interview"
              >
                <MdOutlineDriveFileMove />
              </button>
            </div>
          </div>

          <div className="relative">
            <h2
              className="text-xl font-semibold text-gray-800 mb-4 cursor-pointer"
              onClick={handleToggleTooltip}
            >
              {interview.interviewTitle.length > 19
                ? `${interview.interviewTitle.substring(0, 19)}...`
                : interview.interviewTitle}
            </h2>

            {showTooltip && (
              <div className="absolute top-full left-0 mt-1 px-4 py-2 bg-white border-2 border-gray-300 text-black text-sm rounded shadow-lg z-10">
                {interview.interviewTitle}
              </div>
            )}
          </div>

          <div className="mt-[-3px]">
            <p className="text-gray-600">Candidates:</p>
            <div className="flex justify-between ml-[-3%] mt-2 w-[105%] h-[45%] bg-gradient-to-br to-gray-200 from-gray-100 bg-gray-100 p-2.5 rounded-md shadow-inner">
              <div className="absolute h-[21%] w-[2.5px] bg-[#d1d1d6] ml-[7%] mt-[-0.5%]"></div>
              <p className="text-gray-700  ml-[12%] text-xs">
                TOTAL{" "}
                <span className=" text-gray-600 flex ml-[20%] font-bold text-xl">
                  {interview.totalVideos}
                </span>
              </p>
              <div className="absolute h-[21%] w-[2.5px] bg-[#d1d1d6] ml-[48.5%] mt-[-0.5%]"></div>
              <p className="text-gray-700  mr-[12%] text-xs">
                ON HOLD{" "}
                <span className=" text-gray-600 flex ml-[20%] font-bold text-xl">
                  {interview.onHold}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[6%]">
            <div className="w-[100%] h-[0.5px] bg-gray-400 mx-auto"></div>
          </div>
          <div className="flex justify-between items-center mt-[3%] w-full">
            <span className="font-semibold text-gray-600 text-sm hover:text-gray-700 rounded transition duration-200 flex">
              {isExpired ? "Unpublished" : "Published"}
            </span>

            <button
              onClick={handleSeeVideos}
              className="font-semibold text-gray-600 text-sm hover:text-gray-800 rounded transition duration-200"
            >
              See Videos <span className="text-sm ">&gt;</span>
            </button>
          </div>
        </div>
      </div>

      {showEditPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <EditInterviewComponent
            interviewId={interview._id}
            onClose={handleCloseEdit}
          />
        </div>
      )}

      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ViewInterviewDetailsComponent
            onClose={handleCloseDetails}
            id={interview._id}
          />
        </div>
      )}
    </div>
  );
};

export default InterviewCard;
