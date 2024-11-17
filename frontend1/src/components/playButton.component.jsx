import React from "react";

const PlayButton = ({ onPlay }) => {
  return (
    <button onClick={onPlay} className="text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
        />
      </svg>
    </button>
  );
};

export default PlayButton;
