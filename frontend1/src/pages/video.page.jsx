// // src/pages/VideoPage.js
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/button.component";
// import useVideoPageStore from "../stores/videoStore"; // Import the Zustand store
// import VideoPlayer from "../components/videoPlayerComponent"; // Import the VideoPlayer component
// import Header from "../components/header";

// const VideoPage = () => {
//   const navigate = useNavigate();
//   const { id, interviewId } = useParams(); // Get the video ID from the URL
//   const { videoUrl, getVideoUrl, setVideoInfo } = useVideoPageStore(); // Use Zustand store
//   const [notes, setNotes] = useState(""); // State for notes
//   const [approved, setApproved] = useState(false); // State for status
//   const [rejected, setRejected] = useState(false); // State for status
//   const [time, setTime] = useState([]); // State for time

//   useEffect(() => {
//     getVideoUrl(id); // Fetch videos when the component mounts
//   }, [getVideoUrl, id]);

//   const handleSave = async () => {
//     (notes);
//     setVideoInfo(id, notes, approved, rejected, interviewId); // Save notes and status
//     navigate("/video-collection/" + interviewId); // Redirect to the home page
//   };

//   return (
//     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[23px] h-[91%]">
//       {/* Use the VideoPlayer component and pass notes and status handlers */}
//       <Header />
//       <div className="h-[90%]">
//         <VideoPlayer
//           videoUrl={videoUrl} // Replace with actual video URL
//           notes={notes} // Pass notes as prop
//           setNotes={setNotes} // Pass setNotes as prop
//           approved={approved} // Pass status as prop
//           rejected={rejected} // Pass status as prop
//           setRejected={setRejected} // Pass setStatus as prop
//           setApproved={setApproved} // Pass setStatus as prop
//           videoId={id} // Pass video ID as prop
//           time={time} // Pass time as prop
//           setTime={setTime} // Pass setTime as prop
//         />
//         <div className="flex justify-end mr-[1.5%] mt-[-1%]">
//           <Button label="Save" onClick={handleSave} />{" "}
//           {/* Use the Save button to send notes and status */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPage;

// src/pages/VideoPage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../components/button.component";
import useVideoPageStore from "../stores/videoStore"; // Import the Zustand store
import VideoPlayer from "../components/videoPlayerComponent"; // Import the VideoPlayer component
import Header from "../components/header";

const VideoPage = () => {
  const navigate = useNavigate();
  const { id, interviewId } = useParams(); // Get the video ID from the URL
  const { videoUrl, getVideoUrl, setVideoInfo } = useVideoPageStore(); // Use Zustand store
  const [notes, setNotes] = useState(""); // State for notes
  const [approved, setApproved] = useState(false); // State for status
  const [rejected, setRejected] = useState(false); // State for status
  const [times, setTime] = useState([]); // State for time

  useEffect(() => {
    getVideoUrl(id); // Fetch videos when the component mounts
  }, [getVideoUrl, id]);

  const handleSave = async () => {
    notes;
    setVideoInfo(id, notes, approved, rejected, interviewId); // Save notes and status
    navigate("/video-collection/" + interviewId); // Redirect to the home page
  };

  const handleCancel = () => {
    navigate("/video-collection/" + interviewId);
  };

  return (
    <div className="container mx-auto p-4 border-2 border-[#D1E4E4] bg-white rounded-[23px] h-[88.7%]">
      {/* Use the VideoPlayer component and pass notes and status handlers */}
      <Header />
      <div className="h-[90%] mt-[-0.3%]">
        <VideoPlayer
          videoUrl={videoUrl} // Replace with actual video URL
          notes={notes} // Pass notes as prop
          setNotes={setNotes} // Pass setNotes as prop
          approved={approved} // Pass status as prop
          rejected={rejected} // Pass status as prop
          setRejected={setRejected} // Pass setStatus as prop
          setApproved={setApproved} // Pass setStatus as prop
          videoId={id} // Pass video ID as prop
          time={times} // Pass time as prop
          setTime={setTime} // Pass setTime as prop
          interviewId={interviewId}
        />
        <div className="flex justify-between mt-3">
          <Button
            label="Cancel"
            onClick={handleCancel}
            className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
          />
          <Button
            label="Save"
            onClick={handleSave}
            className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
