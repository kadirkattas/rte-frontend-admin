// import React, { useEffect, useState } from "react";
// import { TextArea } from "./input.component";
// import useVideoPageStore from "../stores/videoStore";
// import { FiInfo } from "react-icons/fi";

// const VideoPlayer = ({
//   videoUrl,
//   notes,
//   setNotes,
//   rejected,
//   approved,
//   setApproved,
//   setRejected,
//   videoId,
//   time,
//   setTime,
// }) => {
//   const { videoInfo, getVideoInfo, personalInfo, getPersonalInfo } =
//     useVideoPageStore();

//   const [showTooltip, setShowTooltip] = useState(false);

//   useEffect(() => {
//     getVideoInfo(videoId);
//   }, [videoId, getVideoInfo]);

//   useEffect(() => {
//     if (videoInfo) {
//       setNotes(videoInfo.note || "");
//       setApproved(videoInfo.approved || false);
//       setRejected(videoInfo.rejected || false);
//       setTime(videoInfo.time || []);
//     }
//   }, [videoInfo, setNotes, setApproved, setRejected, setTime]);

//   useEffect(() => {
//     if (videoInfo && videoInfo.intervieweeId) {
//       getPersonalInfo(videoInfo.intervieweeId);
//     }
//   }, [getPersonalInfo, videoInfo]);

//   const handleApprovedChange = () => {
//     setApproved(!approved);
//     setRejected(false);
//   };

//   const handleRejectedChange = () => {
//     setRejected(!rejected);
//     setApproved(false);
//   };

//   const ToggleSwitch = ({ isOn, handleToggle }) => {
//     return (
//       <label className="flex items-center cursor-pointer">
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="toggle"
//             className="sr-only"
//             checked={isOn}
//             onChange={handleToggle}
//           />
//           <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
//           <div
//             className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
//               isOn ? "translate-x-full bg-green-500" : "bg-red-500"
//             }`}
//           ></div>
//         </div>
//       </label>
//     );
//   };

//   return (
//     <div className="flex p-1 container mx-auto bg-gray-200 rounded-[10px] h-[96%] ">
//       {/* Video Bölümü */}

//       <div className="flex w-full h-full">
//         <div className="relative w-2/3 h-full pr-0">
//           {" "}
//           {/* Sağdaki padding sıfırlandı */}
//           {/* Info Butonu - Video'nun Sağ Üst Köşesinde */}
//           <button
//             className="absolute top-2 right-6 text-white rounded-full p-2 z-10"
//             onMouseEnter={() => setShowTooltip(true)}
//             onMouseLeave={() => setShowTooltip(false)}
//           >
//             <FiInfo className="text-lg" />
//           </button>
//           {/* Tooltip */}
//           {showTooltip && personalInfo && (
//             <div className="absolute top-12 right-2 w-64 p-4 bg-gray-700 text-white text-sm rounded-lg shadow-lg z-20">
//               <div>
//                 <strong>Name:</strong> {personalInfo.name}
//               </div>
//               <div>
//                 <strong>Surname:</strong> {personalInfo.surname}
//               </div>
//               <div>
//                 <strong>Phone:</strong> {personalInfo.phone}
//               </div>
//               <div>
//                 <strong>Email:</strong> {personalInfo.email}
//               </div>
//             </div>
//           )}
//           <video
//             className="w-full h-full object-cover rounded-l-lg"
//             controls
//             src={videoUrl}
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Sağ Taraf: Form ve Bilgi Alanı */}
//         <div className="w-1/3 p-4 bg-gray-50 shadow-inner rounded-r-lg flex flex-col justify-between">
//           {" "}
//           {/* p-6 padding azaltıldı */}
//           {/* Notlar ve Time Alanı */}
//           <div className="relative mb-0">
//             {" "}
//             {/* Alt boşluk sıfırlandı */}
//             <TextArea
//               placeholderText="Notes..."
//               val={notes}
//               onChange={(e) => setNotes(e.target.value)}
//               className="border border-gray-300 rounded-md p-3 w-full h-[200%] overflow-y-auto resize-none"
//             />
//             {/* Time Bilgileri - TextArea'nın Altında */}
//             <div className="text-sm text-gray-800 mt-2">
//               {time.map((t, index) => (
//                 <div key={index}>
//                   <strong>Question {t.questionNumber}:</strong> {t.minutes}{" "}
//                   minutes
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Slider Butonları */}
//           <div className="flex justify-between mt-4 border-t pt-4">
//             {" "}
//             {/* mt-6 yerine mt-4 */}
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium">Approved</span>
//               <ToggleSwitch
//                 isOn={approved}
//                 handleToggle={handleApprovedChange}
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium">Rejected</span>
//               <ToggleSwitch
//                 isOn={rejected}
//                 handleToggle={handleRejectedChange}
//               />
//             </label>
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { useEffect, useState } from "react";
// import { TextArea } from "./input.component";
// import useVideoPageStore from "../stores/videoStore";

// const VideoPlayer = ({
//   videoUrl,
//   notes,
//   setNotes,
//   rejected,
//   approved,
//   setApproved,
//   setRejected,
//   videoId,
//   time,
//   setTime,
// }) => {
//   const { videoInfo, getVideoInfo, personalInfo, getPersonalInfo } =
//     useVideoPageStore();

//   const [activeTab, setActiveTab] = useState("questions");

//   useEffect(() => {
//     getVideoInfo(videoId);
//   }, [videoId, getVideoInfo]);

//   useEffect(() => {
//     if (videoInfo) {
//       setNotes(videoInfo.note || "");
//       setApproved(videoInfo.approved || false);
//       setRejected(videoInfo.rejected || false);
//       setTime(videoInfo.time || []);
//     }
//   }, [videoInfo, setNotes, setApproved, setRejected, setTime]);

//   useEffect(() => {
//     if (videoInfo && videoInfo.intervieweeId) {
//       getPersonalInfo(videoInfo.intervieweeId);
//     }
//   }, [getPersonalInfo, videoInfo]);

//   const handleApprovedChange = () => {
//     setApproved(!approved);
//     setRejected(false);
//   };

//   const handleRejectedChange = () => {
//     setRejected(!rejected);
//   };

//   const ToggleSwitch = ({ isOn, handleToggle }) => {
//     return (
//       <label className="flex items-center cursor-pointer">
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="toggle"
//             className="sr-only"
//             checked={isOn}
//             onChange={handleToggle}
//           />
//           {/* Arka plan kutusu */}
//           <div className="block bg-gray-80 border-[1.6px] border-[#b0dad9] w-10 h-5 rounded-full"></div>

//           {/* İçteki yuvarlak buton */}
//           <div
//             className={`dot absolute top-[10.4px] left-[3.5px] bg-[#47A7A2] w-[14.8px] h-[15px] rounded-full transition-transform transform -translate-y-1/2 ${
//               isOn ? "translate-x-[18px]" : ""
//             }`}
//           ></div>
//         </div>
//       </label>
//     );
//   };

//   return (
//     <div className="flex p-1 container mx-auto bg-gray-200 rounded-[10px] h-[96%] ">
//       <div className="flex w-full h-full">
//         <div className="relative w-2/3 h-full pr-0">
//           {/* Video Etrafındaki Siyah Çizgi Kaldırıldı */}
//           <video
//             className="w-full h-full object-cover rounded-l-lg outline-none"
//             controls
//             src={videoUrl}
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="w-1/3 bg-white shadow-inner rounded-r-lg flex flex-col justify-between">
//           {/* Tab Buttonları */}
//           <div className="flex w-full">
//             <button
//               onClick={() => setActiveTab("questions")}
//               className={`p-2 flex-1 text-center border border-gray-200 ${
//                 activeTab === "questions"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Questions
//             </button>
//             <button
//               onClick={() => setActiveTab("notes")}
//               className={`p-2 flex-1 text-center border border-gray-200 ${
//                 activeTab === "notes"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Notes
//             </button>
//             <button
//               onClick={() => setActiveTab("personalForm")}
//               className={`p-2 flex-1 text-center border border-gray-200 ${
//                 activeTab === "personalForm"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Personal Form
//             </button>
//           </div>

//           <div className="p-4 relative flex-1">
//             {activeTab === "questions" && (
//               <div className="text-l text-gray-800 mt-2">
//                 {time.map((t, index) => (
//                   <div key={index} className="mt-1">
//                     <strong>Question {t.questionNumber}:</strong> {t.minutes}{" "}
//                     minutes
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === "notes" && (
//               <TextArea
//                 placeholderText="Notes..."
//                 val={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="border border-gray-300 rounded-md p-3 w-full h-[60%] overflow-y-auto resize-none"
//               />
//             )}

//             {activeTab === "personalForm" && personalInfo && (
//               <div className="text-l text-gray-800 mt-2">
//                 <div className="mt-1">
//                   <strong>Name:</strong> {personalInfo.name}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Surname:</strong> {personalInfo.surname}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Phone:</strong> {personalInfo.phone}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Email:</strong> {personalInfo.email}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between mt-4 border-t pt-4 p-4 bg-white rounded-md">
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium text-sm">
//                 Approved
//               </span>
//               <ToggleSwitch
//                 isOn={approved}
//                 handleToggle={handleApprovedChange}
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium text-sm">
//                 Rejected
//               </span>
//               <ToggleSwitch
//                 isOn={rejected}
//                 handleToggle={handleRejectedChange}
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

// import React, { useEffect, useState } from "react";
// import { TextArea } from "./input.component";
// import useVideoPageStore from "../stores/videoStore";

// const VideoPlayer = ({
//   videoUrl,
//   notes,
//   setNotes,
//   rejected,
//   approved,
//   setApproved,
//   setRejected,
//   videoId,
//   time,
//   setTime,
// }) => {
//   const { videoInfo, getVideoInfo, personalInfo, getPersonalInfo } =
//     useVideoPageStore();

//   const [activeTab, setActiveTab] = useState("questions");

//   useEffect(() => {
//     getVideoInfo(videoId);
//   }, [videoId, getVideoInfo]);

//   useEffect(() => {
//     if (videoInfo) {
//       setNotes(videoInfo.note || "");
//       setApproved(videoInfo.approved || false);
//       setRejected(videoInfo.rejected || false);
//       setTime(videoInfo.time || []);
//     }
//   }, [videoInfo, setNotes, setApproved, setRejected, setTime]);

//   useEffect(() => {
//     if (videoInfo && videoInfo.intervieweeId) {
//       getPersonalInfo(videoInfo.intervieweeId);
//     }
//   }, [getPersonalInfo, videoInfo]);

//   const handleApprovedChange = () => {
//     setApproved(!approved);
//     if (!approved) {
//       setRejected(false); // Approved seçilirse, Rejected false yapılır
//     }
//   };

//   const handleRejectedChange = () => {
//     setRejected(!rejected);
//     if (!rejected) {
//       setApproved(false); // Rejected seçilirse, Approved false yapılır
//     }
//   };

//   const ToggleSwitch = ({ isOn, handleToggle }) => {
//     return (
//       <label className="flex items-center cursor-pointer">
//         <div className="relative">
//           <input
//             type="checkbox"
//             id="toggle"
//             className="sr-only"
//             checked={isOn}
//             onChange={handleToggle}
//           />
//           <div className="block bg-gray-80 border-[1.6px] border-[#b0dad9] w-10 h-5 rounded-full"></div>

//           <div
//             className={`dot absolute top-[10.4px] left-[3.5px] bg-[#47A7A2] w-[14.8px] h-[15px] rounded-full transition-transform transform -translate-y-1/2 ${
//               isOn ? "translate-x-[18px]" : ""
//             }`}
//           ></div>
//         </div>
//       </label>
//     );
//   };

//   return (
//     <div className="flex p-1 container mx-auto bg-gray-200 rounded-[10px] h-[96%] ">
//       <div className="flex w-full h-full">
//         <div className="relative w-2/3 h-full pr-0">
//           <video
//             className="w-full h-full object-cover rounded-l-lg outline-none"
//             controls
//             src={videoUrl}
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         <div className="w-1/3 bg-white shadow-inner rounded-r-lg flex flex-col justify-between">
//           <div className="flex w-full">
//             <button
//               onClick={() => setActiveTab("questions")}
//               className={`p-2 flex-1 text-center border border-gray-200 font-semibold ${
//                 activeTab === "questions"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Questions
//             </button>
//             <button
//               onClick={() => setActiveTab("notes")}
//               className={`p-2 flex-1 text-center border border-gray-200 font-semibold ${
//                 activeTab === "notes"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Notes
//             </button>
//             <button
//               onClick={() => setActiveTab("personalForm")}
//               className={`p-2 flex-1 text-center border border-gray-200 font-semibold ${
//                 activeTab === "personalForm"
//                   ? "bg-[#47A7A2] text-white"
//                   : "bg-white text-gray-800"
//               }`}
//             >
//               Personal Form
//             </button>
//           </div>

//           <div className="p-4 relative flex-1">
//             {activeTab === "questions" && (
//               <div className="text-l text-gray-800 mt-1">
//                 {time.map((t, index) => (
//                   <div key={index} className="mt-1">
//                     <strong>Question {t.questionNumber}:</strong> {t.minutes}{" "}
//                     minutes
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === "notes" && (
//               <TextArea
//                 placeholderText="Notes..."
//                 val={notes}
//                 onChange={(e) => setNotes(e.target.value)}
//                 className="border border-gray-300 rounded-md p-3 w-full h-[80%] overflow-y-auto resize-none"
//               />
//             )}

//             {activeTab === "personalForm" && personalInfo && (
//               <div className="text-l text-gray-800 mt-1">
//                 <div className="mt-1">
//                   <strong>Name:</strong> {personalInfo.name}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Surname:</strong> {personalInfo.surname}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Phone:</strong> {personalInfo.phone}
//                 </div>
//                 <div className="mt-1">
//                   <strong>Email:</strong> {personalInfo.email}
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="flex justify-between mt-4 border-t pt-4 p-4 bg-white rounded-md">
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium text-sm">
//                 Approved
//               </span>
//               <ToggleSwitch
//                 isOn={approved}
//                 handleToggle={handleApprovedChange}
//               />
//             </label>
//             <label className="flex items-center space-x-2">
//               <span className="text-gray-700 font-medium text-sm">
//                 Rejected
//               </span>
//               <ToggleSwitch
//                 isOn={rejected}
//                 handleToggle={handleRejectedChange}
//               />
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

import React, { useEffect, useState } from "react";
import { TextArea } from "./input.component";
import useVideoPageStore from "../stores/videoStore";
import useInterviewListStore from "../stores/interviewListStore";

const VideoPlayer = ({
  videoUrl,
  notes,
  setNotes,
  rejected,
  approved,
  setApproved,
  setRejected,
  videoId,
  time,
  setTime,
  interviewId,
}) => {
  const { videoInfo, getVideoInfo, personalInfo, getPersonalInfo } =
    useVideoPageStore();

  const { fetchInterviewQuestions, questions } = useInterviewListStore();

  const [activeTab, setActiveTab] = useState("questions");
  const [showControls, setShowControls] = useState(false);
  const videoRef = React.createRef();

  useEffect(() => {
    getVideoInfo(videoId);
  }, [videoId, getVideoInfo]);

  useEffect(() => {
    console.log(interviewId);
    fetchInterviewQuestions(interviewId);
  }, [interviewId, fetchInterviewQuestions]);

  useEffect(() => {
    if (videoInfo) {
      setNotes(videoInfo.note || "");
      setApproved(videoInfo.approved || false);
      setRejected(videoInfo.rejected || false);
      setTime(videoInfo.time || []);
    }
  }, [videoInfo, setNotes, setApproved, setRejected, setTime]);

  useEffect(() => {
    if (videoInfo && videoInfo.intervieweeId) {
      getPersonalInfo(videoInfo.intervieweeId);
    }
  }, [getPersonalInfo, videoInfo]);

  const handleApprovedChange = () => {
    setApproved(!approved);
    if (!approved) {
      setRejected(false);
    }
  };

  const handleRejectedChange = () => {
    setRejected(!rejected);
    if (!rejected) {
      setApproved(false);
    }
  };

  const customStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #F0F4F4;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #D8D8DB;
      border-radius: 10px;
    }
  `;

  const ToggleSwitch = ({ isOn, handleToggle }) => (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isOn}
          onChange={handleToggle}
        />
        <div className="block bg-gray-80 border-[1.6px] border-[#b0dad9] w-10 h-5 rounded-full"></div>
        <div
          className={`dot absolute top-[10.4px] left-[3.5px] bg-[#47A7A2] w-[14.8px] h-[15px] rounded-full transition-transform transform -translate-y-1/2 ${
            isOn ? "translate-x-[18px]" : ""
          }`}
        ></div>
      </div>
    </label>
  );

  const handlePlay = () => {
    setShowControls(true);
    videoRef.current.play();
  };

  return (
    <div className="flex p-1 container mx-auto bg-gray-200 rounded-[10px] h-[96%]">
      <div className="flex w-full h-full relative">
        <div className="relative w-2/3 h-full pr-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-l-lg rounded-tl-[8px] rounded-bl-[8px] outline-none"
            controls={showControls}
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>

          {!showControls && (
            <div
              className="absolute inset-0 flex items-center rounded-tl-[8px] rounded-bl-[8px] justify-center bg-black bg-opacity-50"
              onClick={handlePlay}
            >
              {/* video player */}
              <div className="w-[24%] h-[37%] border-[2px] border-white rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <svg
                  className="w-28 h-28 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.5 4.5v11l9-5.5-9-5.5z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* sağ taraf bilgiler kutucuğu */}
        <div className="w-1/3 bg-white shadow-inner rounded-tr-[8px] rounded-br-[8px] flex flex-col justify-between">
          {/* kutucuğun buttonları */}
          <div className="flex w-full">
            <button
              onClick={() => setActiveTab("questions")}
              className={`p-2 flex-1 text-center border border-gray-200 font-semibold ${
                activeTab === "questions"
                  ? "bg-[#47A7A2] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Questions
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`p-2 flex-1 text-center border border-gray-200 font-semibold ${
                activeTab === "notes"
                  ? "bg-[#47A7A2] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Notes
            </button>
            <button
              onClick={() => setActiveTab("personalForm")}
              className={`p-2 flex-1 text-center border rounded-tr-[8px] border-gray-200 font-semibold ${
                activeTab === "personalForm"
                  ? "bg-[#47A7A2] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Personal Form
            </button>
          </div>

          {/* kutucuğun içindeki bilgiler */}
          <div className="p-4 relative flex-1">
            {/* kutucuğun içindeki sorular */}
            {activeTab === "questions" && (
              <div className="text-l text-gray-800 bg-white h-full">
                {/* question kutucuğu  */}
                <div className="mt-[7px] overflow-y-auto max-h-[395px] custom-scrollbar">
                  {time.map((t, index) => (
                    <div key={index} className="relative">
                      {questions[index] ? (
                        <>
                          <div>
                            <strong>Question {index + 1}: </strong>
                            <span className="font-semibold">
                              {questions[index].question}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">
                              Ends at {t.minutes}
                            </span>
                            <hr className="mt-2 mb-2 border-t border-gray-300" />
                          </div>
                        </>
                      ) : (
                        <div>Loading question...</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* kutucuğun içindeki notlar */}
            {activeTab === "notes" && (
              <TextArea
                placeholderText="Notes..."
                val={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border border-gray-300 rounded-md p-3 w-full h-[80%] overflow-y-auto resize-none"
              />
            )}

            {/* kutucuğun içindeki form */}
            {activeTab === "personalForm" && personalInfo && (
              <div className="text-l text-gray-800 mt-1">
                <div className="mt-1">
                  <strong>Name:</strong> {personalInfo.name}
                </div>
                <div className="mt-1">
                  <strong>Surname:</strong> {personalInfo.surname}
                </div>
                <div className="mt-1">
                  <strong>Phone:</strong> {personalInfo.phone}
                </div>
                <div className="mt-1">
                  <strong>Email:</strong> {personalInfo.email}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between  mt-1 border-t pt-4 p-4 bg-gray-100 rounded-tr-[8px] rounded-br-[8px] rounded-tl-[8px] ">
            <label className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium text-sm">
                Approved
              </span>
              <ToggleSwitch
                isOn={approved}
                handleToggle={handleApprovedChange}
              />
            </label>
            <label className="flex items-center space-x-2">
              <span className="text-gray-700 font-medium text-sm">
                Rejected
              </span>
              <ToggleSwitch
                isOn={rejected}
                handleToggle={handleRejectedChange}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
