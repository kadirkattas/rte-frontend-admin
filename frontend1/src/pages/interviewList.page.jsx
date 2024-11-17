// import React, { useState, useEffect } from "react";
// import InterviewCard from "../components/interviewCard.component";
// import CreateInterviewComponent from "../components/createInterview.component";
// import useInterviewListStore from "../stores/interviewListStore"; // Import the store
// import CreateButton from "../components/createButton.component"; // CreateButton'ı import ediyoruz

// const InterviewsPage = () => {

//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.type = "text/css";
//     styleSheet.innerText = customStyles;
//     document.head.appendChild(styleSheet);
//   }, []);

//   const customStyles = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px;
//   }

//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #f0f4f4;
//     border-radius: 10px;
//   }

//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #D8D8DB;
//     border-radius: 10px;
//   }
// `;

//   const [showPopup, setShowPopup] = useState(false);
//   const { fetchInterviews, interviews, deleteInterview } =
//     useInterviewListStore();

//   useEffect(() => {
//     fetchInterviews(); // Fetch interviews when the component mounts
//   }, [fetchInterviews]);

//   const handleCreateInterview = (newInterview) => {
//     // Add the new interview to the store (you should implement addInterview function)
//     setShowPopup(false); // Close the popup
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col shadow-md space-y-11">
//       {/* Title and Button */}
//       <div className="flex justify-between mt-[-1%] mb-[-3.5%] items-center w-full">
//         <h1 className="text-2xl font-bold ">Interviews</h1>
//         <CreateButton onCreate={() => setShowPopup(true)} />
//       </div>

//       {/* Grid of Cards */}
//       <div className="bg-white p-4 border-2 border-gray-300 rounded-lg  max-w-full overflow-auto h-[122%] custom-scrollbar">
//         {/* Adding padding-top to create space between the container top and cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-[10%] gap-x-4 mt-4 w-full">
//           {interviews.length === 0 ? (
//             <p className="text-center col-span-full">
//               No interviews available.
//             </p>
//           ) : (
//             interviews.map((interview, index) => (
//               <InterviewCard
//                 key={interview._id || index}
//                 interview={interview}
//                 onDelete={() => deleteInterview(interview._id)}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       {/* Popup for Creating Interview */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <CreateInterviewComponent
//             onClose={() => setShowPopup(false)}
//             onCreate={handleCreateInterview}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewsPage;

// import React, { useState, useEffect } from "react";
// import InterviewCard from "../components/interviewCard.component";
// import CreateInterviewComponent from "../components/createInterview.component";
// import useInterviewListStore from "../stores/interviewListStore"; // Import the store
// import CreateButton from "../components/createButton.component"; // CreateButton import
// import Header from "../components/header";

// const InterviewsPage = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const { fetchInterviews, interviews, deleteInterview } =
//     useInterviewListStore();

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const interviewsPerPage = 8;

//   useEffect(() => {
//     const styleSheet = document.createElement("style");
//     styleSheet.type = "text/css";
//     styleSheet.innerText = customStyles;
//     document.head.appendChild(styleSheet);
//   }, []);

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

//   useEffect(() => {
//     fetchInterviews(); // Fetch interviews when the component mounts
//   }, [fetchInterviews]);

//   const handleCreateInterview = (newInterview) => {
//     setShowPopup(false); // Close the popup
//   };

//   // Pagination logic
//   const indexOfLastInterview = currentPage * interviewsPerPage;
//   const indexOfFirstInterview = indexOfLastInterview - interviewsPerPage;
//   const currentInterviews = interviews.slice(
//     indexOfFirstInterview,
//     indexOfLastInterview
//   );
//   const totalPages = Math.ceil(interviews.length / interviewsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[23px] h-[100%] flex flex-col ">
//       <Header />
//       {/* Title and Button */}
//       <div>
//         <div className="flex justify-between mb-[-5px] mt-[-9px] items-center w-full">
//           <h1 className="text-[130%] font-semibold font-['Poppins']">
//             Interviews
//           </h1>
//           <CreateButton onCreate={() => setShowPopup(true)} />
//         </div>

//         {/* Grid of Cards with Custom Scrollbar */}
//         <div className="bg-white p-4 rounded-lg max-w-full h-[80%] mt-[1%] ml-5">
//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[5%] gap-x-5 mt-3 w-full">
//             {currentInterviews.length === 0 ? (
//               <p className="text-center col-span-full">
//                 No interviews available.
//               </p>
//             ) : (
//               currentInterviews.map((interview, index) => (
//                 <InterviewCard
//                   key={interview._id || index}
//                   interview={interview}
//                   onDelete={() => deleteInterview(interview._id)}
//                 />
//               ))
//             )}
//           </div>

//           {/* Pagination Controls at Bottom of Scrollable Container */}
//           <div className="flex fixed bottom-4 left-0 right-0 justify-center items-center mb-[0.5%] ml-[16%]">
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-1.5 py-0.2 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//             >
//               {"<"}
//             </button>
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handlePageChange(index + 1)}
//                 className={`px-1.5 py-0.2 mx-0.5 rounded text-sm ${
//                   index + 1 === currentPage
//                     ? "bg-gray-100 border-2 border-gray-300 text-black"
//                     : "bg-transparent hover:bg-gray-300"
//                 }`}
//               >
//                 {index + 1}
//               </button>
//             ))}
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={currentPage === totalPages}
//               className="px-1.5 py-0.2 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//             >
//               {">"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-[100%] h-[100%]">
//           <CreateInterviewComponent
//             onClose={() => setShowPopup(false)}
//             onCreate={handleCreateInterview}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewsPage;

import React, { useState, useEffect } from "react";
import InterviewCard from "../components/interviewCard.component";
import CreateInterviewComponent from "../components/createInterview.component";
import useInterviewListStore from "../stores/interviewListStore"; // Import the store
import CreateButton from "../components/createButton.component"; // CreateButton import
import Header from "../components/header";
import InputBox from "../components/InputBox";

const InterviewsPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { fetchInterviews, interviews, deleteInterview } =
    useInterviewListStore();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const interviewsPerPage = 8;

  // Filter state
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
  }, []);

  const customStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f0f4f4;
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #D8D8DB;
      border-radius: 10px;
    }
  `;

  useEffect(() => {
    fetchInterviews(); // Fetch interviews when the component mounts
  }, [fetchInterviews]);

  const handleCreateInterview = (newInterview) => {
    setShowPopup(false); // Close the popup
  };

  // Pagination logic
  const indexOfLastInterview = currentPage * interviewsPerPage;
  const indexOfFirstInterview = indexOfLastInterview - interviewsPerPage;

  // Filter logic
  const filteredInterviews = interviews.filter((interview) => {
    if (filter === "Published") {
      return (
        new Date(interview.interviewExpireDate) >= new Date() &&
        interview.interviewTitle.includes(search)
      );
    } else if (filter === "Unpublished") {
      return (
        new Date(interview.interviewExpireDate) < new Date() &&
        interview.interviewTitle.includes(search)
      );
    }
    return true && interview.interviewTitle.includes(search); // Show all if filter is "All"
  });

  const currentInterviews = filteredInterviews.slice(
    indexOfFirstInterview,
    indexOfLastInterview
  );

  const totalPages = Math.ceil(filteredInterviews.length / interviewsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4 border-2 border-[#D1E4E4] bg-white rounded-[23px] h-[100%] flex flex-col ">
      <Header />
      {/* Title and Button */}
      <div>
        <div className="flex justify-between mb-[-5px] mt-[-9px] items-center w-full">
          <h1 className="text-[130%] font-semibold font-['Poppins']">
            Interviews
          </h1>

          <div className="flex items-center space-x-3">
            <InputBox onChange={setSearch} placeholder="Search packages..." />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mr-[19px] w-[180px] h-[35px] bg-white rounded-[25px] border-2 border-[#9dd0ce] flex items-center text-[14px] font-semibold text-gray-600 focus:border-[#81bebc] focus:ring-0 focus:outline-none"
            >
              <option value="All" className="text-[14px] text-gray-700">
                All
              </option>
              <option value="Published" className="text-[14px] text-gray-700">
                Published
              </option>
              <option value="Unpublished" className="text-[14px] text-gray-700">
                Unpublished
              </option>
            </select>

            <CreateButton
              onCreate={() => setShowPopup(true)}
              className="ml-4" // Dropdown ile buton arasında boşluk ekler
            />
          </div>
        </div>

        {/* Grid of Cards with Custom Scrollbar */}
        <div className="bg-white p-4 rounded-lg max-w-full h-[80%] mt-[1%] ml-5">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[5%] gap-x-5 mt-3 w-full">
            {currentInterviews.length === 0 ? (
              <p className="text-center col-span-full">
                No interviews available.
              </p>
            ) : (
              currentInterviews.map((interview, index) => (
                <InterviewCard
                  key={interview._id || index}
                  interview={interview}
                  onDelete={() => deleteInterview(interview._id)}
                />
              ))
            )}
          </div>

          {/* Pagination Controls at Bottom of Scrollable Container */}
          <div className="flex fixed bottom-4 left-0 right-0 justify-center items-center mb-[0.5%] ml-[16%]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-1.5 py-0.2 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
            >
              {"<"}
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-1.5 py-0.2 mx-0.5 rounded text-sm ${
                  index + 1 === currentPage
                    ? "bg-gray-100 border-2 border-gray-300 text-black"
                    : "bg-transparent hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-1.5 py-0.2 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-[100%] h-[100%]">
          <CreateInterviewComponent
            onClose={() => setShowPopup(false)}
            onCreate={handleCreateInterview}
          />
        </div>
      )}
    </div>
  );
};

export default InterviewsPage;
