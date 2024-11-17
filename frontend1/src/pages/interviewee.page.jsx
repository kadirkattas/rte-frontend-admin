// // import useIntervieweeStore from "../stores/intervieweeStore";
// // import VideoRecorder from "../components/videoRecorderModal";
// // import { useState, useRef, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import FormModal from "../components/userFormModal";
// // let totalElapsedTime = 0; // Toplam geçen süreyi birikimli olarak tutacak değişken
// // const IntervieweePage = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const {
// //     questionIds,
// //     fetchInterviewQuestions,
// //     question,
// //     fetchQuestion,
// //     createUser,
// //     setIntervieweeId,
// //     setTime,
// //     isActive,
// //     getInterviewStatus,
// //   } = useIntervieweeStore();
// //   const totalQuestions = questionIds.length;
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [permissionGranted, setPermissionGranted] = useState(false);
// //   const videoRecorderRef = useRef(null);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [remainingTime, setRemainingTime] = useState(0);
// //   const [countdownStarted, setCountdownStarted] = useState(false);
// //   const [timeRecords, setTimeRecords] = useState([]);

// //   useEffect(() => {
// //     // Interview durumunu alın ve sayfa yüklendiğinde güncelleyin
// //     getInterviewStatus(id);
// //   }, [id, getInterviewStatus]);

// //   useEffect(() => {
// //     // isActive durumu null değilken kontrol yapın
// //     if (isActive !== null) {
// //       if (isActive === false) {
// //         console.log("Interview is not active, redirecting...");
// //         navigate("/not-authorized");
// //       } else if (isActive === true) {
// //         console.log("Interview is active, continuing...");
// //       }
// //     }
// //   }, [isActive, navigate]);

// //   useEffect(() => {
// //     fetchInterviewQuestions(id);
// //   }, [fetchInterviewQuestions, id]);

// //   useEffect(() => {
// //     if (questionIds.length > 0) {
// //       fetchQuestion(questionIds[currentQuestionIndex]);
// //     }
// //   }, [fetchQuestion, questionIds, currentQuestionIndex]);

// //   useEffect(() => {
// //     if (question) {
// //       setRemainingTime(question.time * 60);
// //     }
// //   }, [question]);

// //   useEffect(() => {
// //     if (remainingTime > 0 && countdownStarted) {
// //       const timer = setInterval(() => {
// //         setRemainingTime((prev) => {
// //           if (prev <= 1) {
// //             clearInterval(timer);
// //             handleNextQuestion();
// //             return 0;
// //           }
// //           return prev - 1;
// //         });
// //       }, 1000);
// //       return () => clearInterval(timer);
// //     }
// //   }, [remainingTime, countdownStarted]);

// //   const handleNextQuestion = () => {
// //     if (isRecording && currentQuestionIndex < questionIds.length - 1) {
// //       const currentTime = question.time * 60 - remainingTime; // Şu anki soruda geçen süre
// //       totalElapsedTime += currentTime; // Toplam geçen süreye ekle
// //       console.log(totalElapsedTime);
// //       setTimeRecords((prevRecords) => [
// //         ...prevRecords,
// //         {
// //           questionNumber: currentQuestionIndex + 1,
// //           minutes: formatSetTime(totalElapsedTime / 60), // Birikimli süre
// //         },
// //       ]);

// //       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
// //       setRemainingTime(questionIds[currentQuestionIndex + 1].time * 60);
// //       setCountdownStarted(false);
// //       setIsRecording(true);
// //       setCountdownStarted(true);
// //     }
// //   };

// //   const requestPermissions = async () => {
// //     const permission = await videoRecorderRef.current.getCameraPermission();
// //     setPermissionGranted(permission);
// //   };

// //   const handleStartRecording = async () => {
// //     if (!isRecording) {
// //       setIsRecording(true);
// //       setCountdownStarted(true);
// //       videoRecorderRef.current.startRecording();
// //     } else if (currentQuestionIndex === totalQuestions - 1) {
// //       handleStopRecording();
// //     }
// //   };

// //   const handleStopRecording = async () => {
// //     const finalTime = question.time * 60 - remainingTime; // Son soruya harcanan süre
// //     totalElapsedTime += finalTime; // Son soruyu toplam süreye ekle

// //     const finalRecord = {
// //       questionNumber: currentQuestionIndex + 1,
// //       minutes: formatSetTime(totalElapsedTime / 60), // Birikimli süre
// //     };

// //     setTimeRecords((prevRecords) => [...prevRecords, finalRecord]);
// //     setIsRecording(false);
// //     videoRecorderRef.current.stopRecording();
// //     setCountdownStarted(false);

// //     const updatedTimeRecords = [...timeRecords, finalRecord];
// //     console.log("Güncel zaman kayıtları:", updatedTimeRecords);
// //     await setTime(updatedTimeRecords);
// //   };

// //   const currentQuestionId = questionIds[currentQuestionIndex];
// //   const formatSetTime = (minutes) => {
// //     const mins = Math.floor(minutes);
// //     const secs = Math.round((minutes - mins) * 60);
// //     return `${mins} minutes ${secs} seconds`;
// //   };

// //   const formatTime = (timeInSeconds) => {
// //     const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
// //     const seconds = String(timeInSeconds % 60).padStart(2, "0");
// //     return `${minutes}:${seconds}`;
// //   };

// //   useEffect(() => {
// //     requestPermissions();
// //   }, []);

// //   const [isModalOpen, setIsModalOpen] = useState(true);
// //   const handleFormSubmit = async (formData) => {
// //     console.log("Form verileri:", formData);
// //     const newIntervieweeId = await createUser(formData);
// //     console.log("Yeni kullanıcı ID'si:", newIntervieweeId);
// //     setIntervieweeId(newIntervieweeId);
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="w-full h-screen bg-[#05173B] flex items-center justify-center">
// //       <FormModal isOpen={isModalOpen} onSubmit={handleFormSubmit} />
// //       <div className="relative mt-[4%] mr-10">
// //         <div className="absolute top-0 right-0 h-[670px] w-[1150px] border-[6px] border-[#1D8EC8] rounded-[15px] mr-[-3.8%] mt-[-1%]"></div>
// //         <div className="w-[1150px] h-[670px] bg-[#0A2449] rounded-[15px] shadow border-2 border-[#1D8EC8] backdrop-blur-[69.05px] transform -translate-y-[50px] relative flex items-center justify-center">
// //           <div className="w-[90%] h-full bg-[#0A2449] shadow-2xl rounded-[15px]">
// //             <div className="text-white text-[32px] font-medium px-6 mt-[3%] items-center justify-between flex">
// //               <p>Video Interview</p>
// //               <div className="border-2 rounded-[8px] w-[12%] text-center border-[#1D8EC8]">
// //                 <p className="text-[#ffffff] text-[24px] font-bold">
// //                   {currentQuestionIndex + 1}/{totalQuestions}
// //                 </p>
// //               </div>
// //             </div>
// //             <div className="flex items-center justify-center bg-[#123c79]/40 w-[85%] h-[45%] ml-[7.5%] mt-[12%] shadow-lg rounded-[10px] overflow-y-auto">
// //               <p className="text-white text-[32px] font-medium text-center px-6 max-h-[100%]">
// //                 {question ? question.question : "Loading question..."}
// //               </p>
// //             </div>

// //             <div className="ml-[37%] mt-[25%] w-[150px] h-[50px]  rounded-full shadow-lg flex items-center justify-center">
// //               <button
// //                 onClick={() => {
// //                   if (
// //                     currentQuestionIndex === totalQuestions - 1 &&
// //                     isRecording
// //                   ) {
// //                     handleStopRecording();
// //                   } else if (!isRecording) {
// //                     handleStartRecording();
// //                   } else {
// //                     handleNextQuestion();
// //                   }
// //                 }}
// //                 className={` text-[30px] mb-[4px] font-semibold rounded-[8px] w-[160px] h-[45px] shadow-lg flex items-center justify-center translate-y-1/4 ${
// //                   !permissionGranted
// //                     ? "bg-gray-400 text-gray-200 cursor-not-allowed"
// //                     : isRecording
// //                     ? currentQuestionIndex === totalQuestions - 1
// //                       ? "bg-[#0A2449]  text-[#ffffff] border-2 border-[#1D8EC8] hover:bg-[#123c79]"
// //                       : "bg-[#0A2449]  text-[#ffffff] border-2 border-[#1D8EC8] hover:bg-[#123c79]"
// //                     : "bg-[#0A2449]  text-[#ffffff] border-2 border-[#1D8EC8]  hover:bg-[#123c79]"
// //                 }`}
// //                 disabled={!permissionGranted}
// //               >
// //                 {isRecording
// //                   ? currentQuestionIndex === totalQuestions - 1
// //                     ? "Stop"
// //                     : "Next"
// //                   : "Start"}
// //               </button>
// //             </div>
// //           </div>
// //           <div className="w-[950px] h-[650px] rounded-[80px] relative ml-5 mt-2">
// //             <VideoRecorder ref={videoRecorderRef} />
// //             <div className="absolute top-1 right-9 text-[#ffffff] text-[24px] font-bold">
// //               {formatTime(remainingTime)}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default IntervieweePage;

// import useIntervieweeStore from "../stores/intervieweeStore";
// import VideoRecorder from "../components/videoRecorderModal";
// import { useState, useRef, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import FormModal from "../components/userFormModal";

// let totalElapsedTime = 0;

// const IntervieweePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const {
//     questionIds,
//     fetchInterviewQuestions,
//     question,
//     fetchQuestion,
//     createUser,
//     setIntervieweeId,
//     setTime,
//     isActive,
//     getInterviewStatus,
//   } = useIntervieweeStore();

//   const totalQuestions = questionIds.length;
//   const [isRecording, setIsRecording] = useState(false);
//   const [permissionGranted, setPermissionGranted] = useState(false);
//   const videoRecorderRef = useRef(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [remainingTime, setRemainingTime] = useState(0);
//   const [countdownStarted, setCountdownStarted] = useState(false);
//   const [timeRecords, setTimeRecords] = useState([]);

//   useEffect(() => {
//     getInterviewStatus(id);
//   }, [id, getInterviewStatus]);

//   useEffect(() => {
//     if (isActive !== null) {
//       if (isActive === false) {
//         navigate("/not-authorized");
//       }
//     }
//   }, [isActive, navigate]);

//   useEffect(() => {
//     fetchInterviewQuestions(id);
//   }, [fetchInterviewQuestions, id]);

//   useEffect(() => {
//     if (questionIds.length > 0) {
//       fetchQuestion(questionIds[currentQuestionIndex]);
//     }
//   }, [fetchQuestion, questionIds, currentQuestionIndex]);

//   useEffect(() => {
//     if (question) {
//       setRemainingTime(question.time * 60);
//     }
//   }, [question]);

//   useEffect(() => {
//     if (remainingTime > 0 && countdownStarted) {
//       const timer = setInterval(() => {
//         setRemainingTime((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             handleNextQuestion();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [remainingTime, countdownStarted]);

//   const handleNextQuestion = () => {
//     if (isRecording && currentQuestionIndex < questionIds.length - 1) {
//       const currentTime = question.time * 60 - remainingTime;
//       totalElapsedTime += currentTime;
//       setTimeRecords((prevRecords) => [
//         ...prevRecords,
//         {
//           questionNumber: currentQuestionIndex + 1,
//           minutes: formatSetTime(totalElapsedTime / 60),
//         },
//       ]);

//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setRemainingTime(questionIds[currentQuestionIndex + 1].time * 60);
//       setCountdownStarted(false);
//       setIsRecording(true);
//       setCountdownStarted(true);
//     }
//   };

//   const requestPermissions = async () => {
//     const permission = await videoRecorderRef.current.getCameraPermission();
//     setPermissionGranted(permission);
//   };

//   const handleStartRecording = async () => {
//     if (!isRecording) {
//       setIsRecording(true);
//       setCountdownStarted(true);
//       videoRecorderRef.current.startRecording();
//     } else if (currentQuestionIndex === totalQuestions - 1) {
//       handleStopRecording();
//     }
//   };

//   const handleStopRecording = async () => {
//     const finalTime = question.time * 60 - remainingTime;
//     totalElapsedTime += finalTime;

//     const finalRecord = {
//       questionNumber: currentQuestionIndex + 1,
//       minutes: formatSetTime(totalElapsedTime / 60),
//     };

//     setTimeRecords((prevRecords) => [...prevRecords, finalRecord]);
//     setIsRecording(false);
//     videoRecorderRef.current.stopRecording();
//     setCountdownStarted(false);

//     const updatedTimeRecords = [...timeRecords, finalRecord];
//     await setTime(updatedTimeRecords);
//   };

//   const formatSetTime = (minutes) => {
//     const mins = Math.floor(minutes);
//     const secs = Math.round((minutes - mins) * 60);
//     return `${mins} minutes ${secs} seconds`;
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
//     const seconds = String(timeInSeconds % 60).padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   useEffect(() => {
//     requestPermissions();
//   }, []);

//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const handleFormSubmit = async (formData) => {
//     const newIntervieweeId = await createUser(formData);
//     setIntervieweeId(newIntervieweeId);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col md:flex-row">
//       <FormModal isOpen={isModalOpen} onSubmit={handleFormSubmit} />
//       {/* Kamera Alanı */}
//       <div className="relative w-full md:w-2/3 h-[75vh] md:h-full">
//         <VideoRecorder ref={videoRecorderRef} />
//         {/* Mobilde Saydam Arkaplan */}
//         <div className="absolute inset-0  flex flex-col justify-end md:justify-between items-center p-4 md:hidden">
//           <h1 className="text-white text-lg font-bold">
//             {question ? question.question : "Loading question..."}
//           </h1>
//           <p className="text-white text-sm">
//             {currentQuestionIndex + 1}/{totalQuestions} | Time Left:{" "}
//             {formatTime(remainingTime)}
//           </p>
//           <button
//             onClick={() => {
//               if (currentQuestionIndex === totalQuestions - 1 && isRecording) {
//                 handleStopRecording();
//               } else if (!isRecording) {
//                 handleStartRecording();
//               } else {
//                 handleNextQuestion();
//               }
//             }}
//             className="mt-4 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
//             disabled={!permissionGranted}
//           >
//             {isRecording
//               ? currentQuestionIndex === totalQuestions - 1
//                 ? "Stop"
//                 : "Next"
//               : "Start"}
//           </button>
//         </div>
//       </div>

//       {/* Soru ve Buton Alanı (Masaüstü) */}
//       <div className="hidden md:flex flex-col justify-between w-1/3 p-8 bg-[#05173B] text-white">
//         <h1 className="text-2xl font-bold mb-4">
//           {question ? question.question : "Loading question..."}
//         </h1>
//         <div className="text-lg mb-4">
//           Question {currentQuestionIndex + 1}/{totalQuestions}
//         </div>
//         <div className="text-lg mb-4">
//           Time Remaining: {formatTime(remainingTime)}
//         </div>
//         <button
//           onClick={() => {
//             if (currentQuestionIndex === totalQuestions - 1 && isRecording) {
//               handleStopRecording();
//             } else if (!isRecording) {
//               handleStartRecording();
//             } else {
//               handleNextQuestion();
//             }
//           }}
//           className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
//           disabled={!permissionGranted}
//         >
//           {isRecording
//             ? currentQuestionIndex === totalQuestions - 1
//               ? "Stop"
//               : "Next"
//             : "Start"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default IntervieweePage;

// import useIntervieweeStore from "../stores/intervieweeStore";
// import VideoRecorder from "../components/videoRecorderModal";
// import { useState, useRef, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import FormModal from "../components/userFormModal";

// let totalElapsedTime = 0;

// const IntervieweePage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const {
//     questionIds,
//     fetchInterviewQuestions,
//     question,
//     fetchQuestion,
//     createUser,
//     setIntervieweeId,
//     setTime,
//     isActive,
//     getInterviewStatus,
//   } = useIntervieweeStore();

//   const totalQuestions = questionIds.length;
//   const [isRecording, setIsRecording] = useState(false);
//   const [permissionGranted, setPermissionGranted] = useState(false);
//   const videoRecorderRef = useRef(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [remainingTime, setRemainingTime] = useState(0);
//   const [countdownStarted, setCountdownStarted] = useState(false);
//   const [timeRecords, setTimeRecords] = useState([]);

//   useEffect(() => {
//     getInterviewStatus(id);
//   }, [id, getInterviewStatus]);

//   useEffect(() => {
//     if (isActive !== null) {
//       if (isActive === false) {
//         navigate("/not-authorized");
//       }
//     }
//   }, [isActive, navigate]);

//   useEffect(() => {
//     fetchInterviewQuestions(id);
//   }, [fetchInterviewQuestions, id]);

//   useEffect(() => {
//     if (questionIds.length > 0) {
//       fetchQuestion(questionIds[currentQuestionIndex]);
//     }
//   }, [fetchQuestion, questionIds, currentQuestionIndex]);

//   useEffect(() => {
//     if (question) {
//       setRemainingTime(question.time * 60);
//     }
//   }, [question]);

//   useEffect(() => {
//     if (remainingTime > 0 && countdownStarted) {
//       const timer = setInterval(() => {
//         setRemainingTime((prev) => {
//           if (prev <= 1) {
//             clearInterval(timer);
//             handleNextQuestion();
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [remainingTime, countdownStarted]);

//   const handleNextQuestion = () => {
//     if (isRecording && currentQuestionIndex < questionIds.length - 1) {
//       const currentTime = question.time * 60 - remainingTime;
//       totalElapsedTime += currentTime;
//       setTimeRecords((prevRecords) => [
//         ...prevRecords,
//         {
//           questionNumber: currentQuestionIndex + 1,
//           minutes: formatSetTime(totalElapsedTime / 60),
//         },
//       ]);

//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       setRemainingTime(questionIds[currentQuestionIndex + 1].time * 60);
//       setCountdownStarted(false);
//       setIsRecording(true);
//       setCountdownStarted(true);
//     }
//   };

//   const requestPermissions = async () => {
//     const permission = await videoRecorderRef.current.getCameraPermission();
//     setPermissionGranted(permission);
//   };

//   const handleStartRecording = async () => {
//     if (!isRecording) {
//       setIsRecording(true);
//       setCountdownStarted(true);
//       videoRecorderRef.current.startRecording();
//     } else if (currentQuestionIndex === totalQuestions - 1) {
//       handleStopRecording();
//     }
//   };

//   const handleStopRecording = async () => {
//     const finalTime = question.time * 60 - remainingTime;
//     totalElapsedTime += finalTime;

//     const finalRecord = {
//       questionNumber: currentQuestionIndex + 1,
//       minutes: formatSetTime(totalElapsedTime / 60),
//     };

//     setTimeRecords((prevRecords) => [...prevRecords, finalRecord]);
//     setIsRecording(false);
//     videoRecorderRef.current.stopRecording();
//     setCountdownStarted(false);

//     const updatedTimeRecords = [...timeRecords, finalRecord];
//     await setTime(updatedTimeRecords);
//   };

//   const formatSetTime = (minutes) => {
//     const mins = Math.floor(minutes);
//     const secs = Math.round((minutes - mins) * 60);
//     return `${mins} minutes ${secs} seconds`;
//   };

//   const formatTime = (timeInSeconds) => {
//     const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
//     const seconds = String(timeInSeconds % 60).padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   useEffect(() => {
//     requestPermissions();
//   }, []);

//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const handleFormSubmit = async (formData) => {
//     const newIntervieweeId = await createUser(formData);
//     setIntervieweeId(newIntervieweeId);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="w-full h-screen flex flex-col md:flex-row">
//       <FormModal isOpen={isModalOpen} onSubmit={handleFormSubmit} />
//       {/* Kamera Alanı */}
//       <div className="relative w-full h-screen md:h-full">
//         <VideoRecorder ref={videoRecorderRef} />
//         {/* Mobilde Saydam Arkaplan */}
//         <div className="absolute inset-0 flex flex-col justify-end md:justify-between items-center p-4">
//           <h1 className="text-white text-lg font-bold">
//             {question ? question.question : "Loading question..."}
//           </h1>
//           <p className="text-white text-sm">
//             {currentQuestionIndex + 1}/{totalQuestions} | Time Left:{" "}
//             {formatTime(remainingTime)}
//           </p>
//           <button
//             onClick={() => {
//               if (currentQuestionIndex === totalQuestions - 1 && isRecording) {
//                 handleStopRecording();
//               } else if (!isRecording) {
//                 handleStartRecording();
//               } else {
//                 handleNextQuestion();
//               }
//             }}
//             className="mt-4 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
//             disabled={!permissionGranted}
//           >
//             {isRecording
//               ? currentQuestionIndex === totalQuestions - 1
//                 ? "Stop"
//                 : "Next"
//               : "Start"}
//           </button>
//         </div>
//       </div>

//       {/* Soru ve Buton Alanı (Masaüstü) */}
//       <div className="hidden md:flex flex-col justify-between w-1/3 p-8 bg-[#05173B] text-white">
//         <h1 className="text-2xl font-bold mb-4">
//           {question ? question.question : "Loading question..."}
//         </h1>
//         <div className="text-lg mb-4">
//           Question {currentQuestionIndex + 1}/{totalQuestions}
//         </div>
//         <div className="text-lg mb-4">
//           Time Remaining: {formatTime(remainingTime)}
//         </div>
//         <button
//           onClick={() => {
//             if (currentQuestionIndex === totalQuestions - 1 && isRecording) {
//               handleStopRecording();
//             } else if (!isRecording) {
//               handleStartRecording();
//             } else {
//               handleNextQuestion();
//             }
//           }}
//           className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
//           disabled={!permissionGranted}
//         >
//           {isRecording
//             ? currentQuestionIndex === totalQuestions - 1
//               ? "Stop"
//               : "Next"
//             : "Start"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default IntervieweePage;

import useIntervieweeStore from "../stores/intervieweeStore";
import VideoRecorder from "../components/videoRecorderModal";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormModal from "../components/userFormModal";

let totalElapsedTime = 0;

const IntervieweePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    questionIds,
    fetchInterviewQuestions,
    question,
    fetchQuestion,
    createUser,
    setIntervieweeId,
    setTime,
    isActive,
    getInterviewStatus,
  } = useIntervieweeStore();

  const totalQuestions = questionIds.length;
  const [isRecording, setIsRecording] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const videoRecorderRef = useRef(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [timeRecords, setTimeRecords] = useState([]);

  useEffect(() => {
    getInterviewStatus(id);
  }, [id, getInterviewStatus]);

  useEffect(() => {
    if (isActive !== null) {
      if (isActive === false) {
        navigate("/not-authorized");
      }
    }
  }, [isActive, navigate]);

  useEffect(() => {
    fetchInterviewQuestions(id);
  }, [fetchInterviewQuestions, id]);

  useEffect(() => {
    if (questionIds.length > 0) {
      fetchQuestion(questionIds[currentQuestionIndex]);
    }
  }, [fetchQuestion, questionIds, currentQuestionIndex]);

  useEffect(() => {
    if (question) {
      setRemainingTime(question.time * 60);
    }
  }, [question]);

  useEffect(() => {
    if (remainingTime > 0 && countdownStarted) {
      const timer = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [remainingTime, countdownStarted]);

  const handleNextQuestion = () => {
    if (isRecording && currentQuestionIndex < questionIds.length - 1) {
      const currentTime = question.time * 60 - remainingTime;
      totalElapsedTime += currentTime;
      setTimeRecords((prevRecords) => [
        ...prevRecords,
        {
          questionNumber: currentQuestionIndex + 1,
          minutes: formatSetTime(totalElapsedTime / 60),
        },
      ]);

      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setRemainingTime(questionIds[currentQuestionIndex + 1].time * 60);
      setCountdownStarted(false);
      setIsRecording(true);
      setCountdownStarted(true);
    }
  };

  const requestPermissions = async () => {
    const permission = await videoRecorderRef.current.getCameraPermission();
    setPermissionGranted(permission);
  };

  const handleStartRecording = async () => {
    if (!isRecording) {
      setIsRecording(true);
      setCountdownStarted(true);
      videoRecorderRef.current.startRecording();
    } else if (currentQuestionIndex === totalQuestions - 1) {
      handleStopRecording();
    }
  };

  const handleStopRecording = async () => {
    const finalTime = question.time * 60 - remainingTime;
    totalElapsedTime += finalTime;

    const finalRecord = {
      questionNumber: currentQuestionIndex + 1,
      minutes: formatSetTime(totalElapsedTime / 60),
    };

    setTimeRecords((prevRecords) => [...prevRecords, finalRecord]);
    setIsRecording(false);
    videoRecorderRef.current.stopRecording();
    setCountdownStarted(false);

    const updatedTimeRecords = [...timeRecords, finalRecord];
    await setTime(updatedTimeRecords);
  };

  const formatSetTime = (minutes) => {
    const mins = Math.floor(minutes);
    const secs = Math.round((minutes - mins) * 60);
    return `${mins} minutes ${secs} seconds`;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, "0");
    const seconds = String(timeInSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleFormSubmit = async (formData) => {
    const newIntervieweeId = await createUser(formData);
    setIntervieweeId(newIntervieweeId);
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <FormModal isOpen={isModalOpen} onSubmit={handleFormSubmit} />

      {/* Soru ve Buton Alanı (Masaüstü) */}
      <div className="relative w-full h-screen bg-black text-white">
        {/* Kamera */}
        <VideoRecorder
          ref={videoRecorderRef}
          className="w-full h-full object-cover"
        />

        {/* Sol üst köşede soru numarası */}
        <div className="absolute top-4 left-4 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow">
          <span className="text-sm font-bold">
            Question {currentQuestionIndex + 1}/{totalQuestions}
          </span>
        </div>

        {/* Sağ üst köşede süre */}
        <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-70 px-4 py-2 rounded-lg shadow">
          <span className="text-lg font-bold">{formatTime(remainingTime)}</span>
        </div>

        {/* Soru ve buton alanı */}
        <div className="absolute bottom-16 w-full px-6 flex flex-col items-center space-y-4">
          <h1 className="text-center text-lg font-semibold bg-gray-900 bg-opacity-70 p-4 rounded-lg max-w-4xl max-h-24 overflow-y-auto scrollbar-hide break-words">
            {question ? question.question : "Loading question..."}
          </h1>
          <button
            onClick={() => {
              if (currentQuestionIndex === totalQuestions - 1 && isRecording) {
                handleStopRecording();
              } else if (!isRecording) {
                handleStartRecording();
              } else {
                handleNextQuestion();
              }
            }}
            className={`px-8 py-4 rounded-full text-lg font-bold transition-all ${
              permissionGranted
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!permissionGranted}
          >
            {isRecording
              ? currentQuestionIndex === totalQuestions - 1
                ? "Stop"
                : "Next"
              : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntervieweePage;
