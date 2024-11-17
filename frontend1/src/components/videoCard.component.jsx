// import React, { useEffect, useState } from "react";
// import PlayButton from "./playButton.component"; // Ensure the path is correct
// import axios from "axios";
// import Cookies from "js-cookie";

// const VideoCard = ({ video, onPlay, id }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = Cookies.get("jwtToken");
//         const response = await axios.get(
//           `/personal-forms/get-personal-form/${id}`,
//           {
//             headers: { Authorization: `Bearer ${token}` },
//           }
//         );
//         console.log("User fetched:", response.data.personalForm);
//         setUser(response.data.personalForm);
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [id]);

//   return (
//     <div className="border border-gray-300 rounded-lg shadow-sm p-4 flex flex-col items-center relative">
//       {/* Status indicator */}
//       <div
//         className={`absolute top-2 left-2 w-4 h-4 rounded-full ${
//           video.approved
//             ? "bg-green-500"
//             : video.rejected
//             ? "bg-red-500"
//             : "bg-gray-500"
//         }`} // Conditional classes for color
//       ></div>
//       <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
//         <PlayButton onPlay={onPlay} />
//       </div>

//       <h2 className="text-lg font-semibold">
//         {user ? user.name : "Loading..."}
//       </h2>
//     </div>
//   );
// };

// export default VideoCard;



import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const VideoCard = ({ video, onPlay, id, thumbnail }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("jwtToken");
        const response = await axios.get(
          `/personal-forms/get-personal-form/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.personalForm);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="relative">
      {/* Top status bar positioned above the card */}
      <div
        className={`w-[82%] h-[1.6%] absolute top-[8%] 3xl:top-[6%] left-1/2 3xl:left-[47%] transform -translate-x-1/2 rounded-t-lg ${
          video.approved
            ? "bg-green-500"
            : video.rejected
            ? "bg-red-500"
            : "bg-gray-500"
        }`}
      ></div>

      {/* Card container */}
      <div className="border border-gray-300 rounded-2xl shadow-sm p-3 flex flex-col items-center mt-5 w-[98%] 3xl:w-[93%] 3xl:h-[250px]">
        {/* Video thumbnail and play button */}
        <div className="w-full 3xl:w-[98%] h-[145px] 3xl:h-[200px] bg-gray-300 flex items-center justify-center rounded-xl mb-[3%] relative">
          <img
            src={thumbnail}
            alt="video-thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
          />
          {/* Play button with circle and triangle icon */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            onClick={onPlay}
          >
            <div className="w-[23%] h-[37%] border-[2px] border-white  rounded-full flex items-center justify-center shadow-md cursor-pointer">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* User name */}
        <h2 className="text-l font-semibold mb-[-1%]">
          {user ? user.name : "Loading..."}
        </h2>
      </div>
    </div>
  );
};

export default VideoCard;
