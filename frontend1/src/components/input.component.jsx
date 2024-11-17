// import React from "react";

// export const InputField = ({ inputType, placeholderText, val, onChange }) => {
//   return (
//     <input
//       type={inputType}
//       placeholder={placeholderText}
//       value={val}
//       onChange={onChange}
//       className="flex mb-4 p-2 border rounded w-full"
//     />
//   );
// };

// export const TextArea = ({ placeholderText, onChange, val }) => {
//   return (
//     <textarea
//       className="w-full h-40 border rounded-lg p-2 flex"
//       placeholder={placeholderText}
//       value={val}
//       onChange={onChange}
//     ></textarea>
//   );
// };

import React from "react";

export const InputField = ({ inputType, placeholderText, val, onChange }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholderText}
      value={val}
      onChange={onChange}
      className="flex mb-4 p-2 border rounded w-full"
    />
  );
};

export const TextArea = ({ placeholderText, onChange, val, className }) => {
  return (
    <textarea
      className={`w-full h-40 border rounded-lg p-2 flex custom-scrollbar ${className}`}
      placeholder={placeholderText}
      value={val}
      onChange={onChange}
    ></textarea>
  );
};

// Place this style in the main component where InputField and TextArea are used
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

// Insert the styles in your main component
function MainComponent() {
  return (
    <div>
      <style>{customStyles}</style> {/* Insert custom styles here */}
      <TextArea placeholderText="Enter text here" onChange={() => {}} val="" />
      {/* Other components */}
    </div>
  );
}

export default MainComponent;
