// import React from 'react';
// import { FiPlus } from 'react-icons/fi';

// const CreateButton = ({ onCreate }) => {
//     return (
//         <button onClick={onCreate} className="rounded-[25px] w-[15.5%] large-plus-button font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white ">
//             <FiPlus className="mr-[0px] font-bold" style={{ fontSize: '34px' }} />
//         </button>
//     );
// };

// export default CreateButton;

// import React from "react";
// import { FiPlus } from "react-icons/fi";

// const CreateButton = ({ onCreate }) => {
//   return (
//     <button
//       onClick={onCreate}
//       className="rounded-[25px] lg:w-[13.5%] md:w-[16%] sm:w-[20%] h-[35px] large-plus-button font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:brightness-105"
//     >
//       <FiPlus className="mr-2 text-[14px] sm:text-[16px]" />{" "}
//       {/* Icon size adjusts for smaller screens */}
//       <span className="text-[14px] sm:text-[15px] leading-none">
//         Create Package
//       </span>
//     </button>
//   );
// };

// export default CreateButton;

import React from "react";
import { FiPlus } from "react-icons/fi";

const CreateButton = ({ onCreate }) => {
  return (
    <button
      onClick={onCreate}
      className="rounded-[25px] min-w-[180px] h-[35px] font-semibold bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] text-white flex items-center justify-center transition duration-300 transform hover:scale-105 hover:shadow-lg hover:brightness-105"
    >
      <FiPlus className="mr-2 text-[14px] sm:text-[16px]" />
      <span className="text-[14px] sm:text-[15px] leading-none">
        Create Package
      </span>
    </button>
  );
};

export default CreateButton;
