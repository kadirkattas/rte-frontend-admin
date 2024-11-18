// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   useEffect(() => {
//     fetchInterviewVideos(interviewId); // Fetch videos when the component mounts
//   }, [fetchInterviewVideos, interviewId]); // interviewId'ye bağımlılık ekleyin

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handlePlay = (id) => {
//     navigate("/video/" + interviewId + "/" + id);
//     ("Playing a video");
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-6">
//         Backend Interview Video Collection
//       </h1>
//       <div className="grid grid-cols-3 gap-6">
//         {Array.isArray(allVideos) && allVideos.length > 0 ? (
//           allVideos.map((video) => (
//             <VideoCard
//               key={video.videoId} // video.id yerine video._id kullanın
//               video={video}
//               onPlay={() => handlePlay(video.videoId)} // video.id yerine video._id kullanın
//             />
//           ))
//         ) : (
//           <p>No videos available</p> // Display a message if there are no videos
//         )}
//       </div>
//       <div className="flex justify-end mt-6">
//         <Button label="Save" onClick={handleSave} />
//       </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   useEffect(() => {
//     fetchInterviewVideos(interviewId); // Fetch videos when the component mounts
//   }, [fetchInterviewVideos, interviewId]);

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handlePlay = (id) => {
//     navigate("/video/" + interviewId + "/" + id);
//     ("Playing a video", id);
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col custom-scrollbar overflow-y-auto">
//     <div className="mx-auto p-8 w-[70%]">
//       <div className="grid grid-cols-3 gap-6">
//         {Array.isArray(allVideos) && allVideos.length > 0 ? (
//           allVideos.map(
//             (
//               video // Added index as a fallback key
//             ) => (
//               <VideoCard
//                 key={video._id} // video.id yerine video._id kullanın
//                 video={video}
//                 onPlay={() => handlePlay(video._id)} // video.id yerine video._id kullanın
//                 id={video.intervieweeId}
//               />
//             )
//           )
//         ) : (
//           <p>No videos available</p>
//         )}
//       </div>
//       <div className="flex justify-end mt-6">
//         <Button label="Save" onClick={handleSave} />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   useEffect(() => {
//     fetchInterviewVideos(interviewId); // Fetch videos when the component mounts
//   }, [fetchInterviewVideos, interviewId]);

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handlePlay = (id) => {
//     navigate("/video/" + interviewId + "/" + id);
//     ("Playing a video", id);
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col custom-scrollbar overflow-y-auto">
//       <div className="mx-auto p-8 w-full">
//         <div className="grid grid-cols-4 gap-6">
//           {Array.isArray(allVideos) && allVideos.length > 0 ? (
//             allVideos.map((video) => (
//               <VideoCard
//                 key={video._id}
//                 video={video}
//                 onPlay={() => handlePlay(video._id)}
//                 id={video.intervieweeId}
//               />
//             ))
//           ) : (
//             <p>No videos available</p>
//           )}
//         </div>

//         <div className="flex justify-end mt-[38%] mr-[-25%]">
//           <Button label="Save" onClick={handleSave} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

// import React, { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   useEffect(() => {
//     fetchInterviewVideos(interviewId); // Fetch videos when the component mounts
//   }, [fetchInterviewVideos, interviewId]);

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handlePlay = (id) => {
//     navigate("/video/" + interviewId + "/" + id);
//     ("Playing a video", id);
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col custom-scrollbar overflow-y-auto overflow-x-hidden">
//       <div className="mx-auto p-8 w-full">
//         <div className="grid grid-cols-4 gap-6">
//           {Array.isArray(allVideos) && allVideos.length > 0 ? (
//             allVideos.map((video) => (
//               <VideoCard
//                 key={video._id}
//                 video={video}
//                 onPlay={() => handlePlay(video._id)}
//                 id={video.intervieweeId}
//               />
//             ))
//           ) : (
//             <p>No videos available</p>
//           )}
//         </div>

//         <div className="flex justify-end mt-[38%] mr-[-25%]">
//           <Button label="Save" onClick={handleSave} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 8; // Number of videos per page (4 on top row, 4 on bottom row)

//   useEffect(() => {
//     fetchInterviewVideos(interviewId); // Fetch videos when the component mounts
//   }, [fetchInterviewVideos, interviewId]);

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handleCancel = () => {
//     navigate("/interview-list"); // Assuming Cancel navigates back to the interview list
//   };

//   const handlePlay = (id) => {
//     navigate("/video/" + interviewId + "/" + id);
//     ("Playing a video", id);
//   };

//   // Calculate total pages
//   const totalPages = Math.ceil(allVideos.length / videosPerPage);

//   // Get current page videos
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col custom-scrollbar ">
//       <div className="mx-auto p-8 w-full">
//         <div className="grid grid-cols-4 gap-6">
//           {Array.isArray(currentVideos) && currentVideos.length > 0 ? (
//             currentVideos.map((video) => (
//               <VideoCard
//                 key={video._id}
//                 video={video}
//                 onPlay={() => handlePlay(video._id)}
//                 id={video.intervieweeId}
//               />
//             ))
//           ) : (
//             <p>No videos available</p>
//           )}
//         </div>
//       </div>

//       {/* Pagination Controls at Bottom of Scrollable Container */}
//       <div className="flex justify-center items-center mt-6 mb-[-2%]">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
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
//           className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//         >
//           {">"}
//         </button>
//       </div>

//       {/* Cancel and Save Buttons at the Bottom of the Page */}
//       <div className="flex justify-between mb-4 mx-8">
//         <Button label="Cancel" onClick={handleCancel} /> {/* Left-aligned Cancel button */}
//         <Button label="Save" onClick={handleSave} /> {/* Right-aligned Save button */}
//       </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Button from "../components/button.component";
// import VideoCard from "../components/videoCard.component";
// import useVideoStore from "../stores/videoCollectionStore"; // Import the new video store
// import Header from "../components/header";

// const VideoCollectionPage = () => {
//   const navigate = useNavigate();
//   const { interviewId } = useParams();
//   const { allVideos, fetchInterviewVideos } = useVideoStore();

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 8; // Number of videos per page (4 on top row, 4 on bottom row)

//   useEffect(() => {
//     // Fetch videos when the component mounts
//     fetchInterviewVideos(interviewId);
//   }, [fetchInterviewVideos, interviewId]);

//   const handleSave = () => {
//     navigate("/interview-list");
//   };

//   const handleCancel = () => {
//     navigate("/interview-list"); // Assuming Cancel navigates back to the interview list
//   };

//   const handlePlay = (id) => {
//     navigate(`/video/${interviewId}/${id}`);
//     ("Playing a video", id);
//   };

//   // Debugging: Check the content of allVideos
//   ("All Videos:", allVideos);

//   // Calculate total pages
//   const totalPages = Math.ceil(allVideos.length / videosPerPage);

//   // Debugging: Check totalPages
//   ("Total Pages:", totalPages);

//   // Get current page videos
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);

//   // Debugging: Check current page and videos shown on the current page
//   ("Current Page:", currentPage);
//   ("Current Videos:", currentVideos);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//       ("Navigating to page:", pageNumber);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#e1e1e484] bg-white rounded-[23px] h-full flex flex-col custom-scrollbar">
//       <Header />
//       <h1 className="text-[130%] font-semibold font-['Poppins'] mb-[-2.5%] ">
//         Interview Video
//       </h1>
//       <div className="mx-auto p-8 w-full flex-grow">
//         <div className="grid grid-cols-4 gap-6 gap-y-[6%] 3xl:mt-4">
//           {Array.isArray(currentVideos) && currentVideos.length > 0 ? (
//             currentVideos.map((video) => (
//               <VideoCard
//                 key={video._id}
//                 video={video}
//                 onPlay={() => handlePlay(video._id)}
//                 id={video.intervieweeId}
//                 thumbnail={video.signedThumbnailUrl}
//               />
//             ))
//           ) : (
//             <p>No videos available</p>
//           )}
//         </div>
//       </div>
//       {/* Cancel and Save Buttons at Bottom */}
//       <div className="flex justify-between mx-8">
//         <Button
//           label="Cancel"
//           onClick={handleCancel}
//           className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
//         />
//         {/* Pagination Controls at Bottom */}
//         <div className="flex justify-center items-center">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {"<"}
//           </button>
//           {[...Array(totalPages)].map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handlePageChange(index + 1)}
//               className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
//                 index + 1 === currentPage
//                   ? "bg-gray-100 border-2 border-gray-300 text-black"
//                   : "bg-transparent hover:bg-gray-300"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
//           >
//             {">"}
//           </button>
//         </div>
//         <Button
//           label="Save"
//           onClick={handleSave}
//           className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoCollectionPage;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button.component";
import VideoCard from "../components/videoCard.component";
import useVideoStore from "../stores/videoCollectionStore";
import Header from "../components/header";

const VideoCollectionPage = () => {
  const navigate = useNavigate();
  const { interviewId } = useParams();
  const { allVideos, fetchInterviewVideos } = useVideoStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const videosPerPage = 8;

  useEffect(() => {
    fetchInterviewVideos(interviewId);
  }, [fetchInterviewVideos, interviewId]);

  const handleSave = () => {
    navigate("/interview-list");
  };

  const handleCancel = () => {
    navigate("/interview-list");
  };

  const handlePlay = (id) => {
    navigate(`/video/${interviewId}/${id}`);
  };

  // Apply filter to videos
  const filteredVideos = allVideos.filter((video) => {
    if (filter === "All") return true;
    if (filter === "Accept") return video.approved;
    if (filter === "Reject") return video.rejected;
    if (filter === "On Hold") return !video.approved && !video.rejected;
    return true;
  });

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-4 border-2 border-[#D1E4E4] bg-white rounded-[23px] h-full flex flex-col custom-scrollbar">
      <Header />
      <h1 className="text-[130%] font-semibold font-['Poppins'] mb-[-2.5%] ">
        Interview Video
      </h1>
      {/* Filter Dropdown */}
      <div className="flex items-center ml-[1009px] mb-[-8px]">
        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1); // Reset to first page when filter changes
          }}
          className="w-[180px] h-[35px] bg-white rounded-[25px] border-2 border-[#9dd0ce] flex items-center text-[14px] font-semibold text-gray-600 focus:border-[#81bebc] focus:ring-0 focus:outline-none"
        >
          <option value="All" className="text-[14px] text-gray-700">
            All
          </option>
          <option value="Accept" className="text-[14px] text-gray-700">
            Accept
          </option>
          <option value="Reject" className="text-[14px] text-gray-700">
            Reject
          </option>
          <option value="On Hold" className="text-[14px] text-gray-700">
            On Hold
          </option>
        </select>
      </div>
      <div className="mx-auto p-8 w-full flex-grow mt-[-8px]">
        <div className="grid grid-cols-4 gap-6 gap-y-[6%] 3xl:mt-4">
          {Array.isArray(currentVideos) && currentVideos.length > 0 ? (
            currentVideos.map((video) => (
              <VideoCard
                key={video._id}
                video={video}
                onPlay={() => handlePlay(video._id)}
                id={video.intervieweeId}
                thumbnail={video.signedThumbnailUrl}
              />
            ))
          ) : (
            <p>No videos available</p>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mx-8">
        <Button
          label="Cancel"
          onClick={handleCancel}
          className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
        />
        <div className="flex justify-center items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
          >
            {"<"}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-2 py-0.5 mx-0.5 rounded text-sm ${
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
            className="px-2 py-1 rounded text-sm bg-transparent hover:bg-gray-300 disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
        <Button
          label="Save"
          onClick={handleSave}
          className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
        />
      </div>
    </div>
  );
};

export default VideoCollectionPage;
