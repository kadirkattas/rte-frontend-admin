// import React, { useEffect, useState, useRef } from "react";
// import { FiChevronDown, FiX } from "react-icons/fi";
// import AddQuestionModal from "../components/AddQuestionModal";
// import Button from "../components/button.component";
// import useInterviewStore from "../stores/createInterviewStore";
// import useQuestionPackageStore from "../stores/questionPackageStore";
// import useInterviewListStore from "../stores/interviewListStore";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemTypes = {
//   EXTRA_QUESTION: "extraQuestion",
// };

// const CreateInterviewPage = ({ onClose, onCreate }) => {
//   const { selectedPackages, togglePackageSelect, resetSelectedPackages } =
//     useInterviewStore();
//   const { createInterview } = useInterviewListStore();
//   const [interviewTitle, setTitle] = useState("");
//   const [interviewExpireDate, setInterviewExpireDate] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [extraQuestions, setExtraQuestions] = useState([]);
//   const [showAddQuestionPopup, setShowAddQuestionPopup] = useState(false);
//   const { fetchPackages, questionPackages } = useQuestionPackageStore();

//   useEffect(() => {
//     fetchPackages(); // Fetch packages when the component mounts
//   }, [fetchPackages]);

//   const handleDeleteExtraQuestion = (index) => {
//     const updatedQuestions = extraQuestions.filter((_, i) => i !== index);
//     setExtraQuestions(updatedQuestions); // Update the state to remove the selected question
//   };

//   const moveExtraQuestion = (dragIndex, hoverIndex) => {
//     const updatedQuestions = [...extraQuestions];
//     const [movedQuestion] = updatedQuestions.splice(dragIndex, 1);
//     updatedQuestions.splice(hoverIndex, 0, movedQuestion);
//     setExtraQuestions(updatedQuestions);
//   };

//   const handleCreateInterview = async () => {
//     const newInterview = {
//       interviewTitle,
//       interviewExpireDate,
//       packages: selectedPackages.map((packageId) => ({ packageId })),
//       extraQuestions,
//       questionCount: selectedPackages.length + extraQuestions.length,
//       interviewUrl: "",
//       totalVideos: 0,
//       onHold: 0,
//     };
//     try {
//       await createInterview(newInterview);
//       resetSelectedPackages();
//       onCreate(newInterview);
//       onClose();
//     } catch (error) {
//       console.error("Error creating interview:", error);
//     }
//   };

//   const getSelectedPackageTitles = () => {
//     return questionPackages
//       .filter((pkg) => selectedPackages.includes(pkg._id))
//       .map((pkg) => pkg);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-10 rounded-lg shadow-lg w-1/2 h-[80%] mt-10 overflow-y-auto">
//           <h2 className="text-xl font-bold mb-4">Create New Interview</h2>
//           <form>
//             {/* Interview Title */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Title</label>
//               <input
//                 type="text"
//                 className="w-full p-2 border rounded"
//                 value={interviewTitle}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter interview title"
//                 required
//               />
//             </div>

//             {/* Package Selection */}
//             <div className="mb-4 relative">
//               <label className="block text-gray-700">Packages</label>
//               <div className="relative">
//                 <button
//                   type="button"
//                   className="w-full p-2 border rounded flex justify-between items-center"
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                 >
//                   Select Packages
//                   <FiChevronDown />
//                 </button>
//                 {dropdownOpen && (
//                   <ul className="absolute w-full bg-white border rounded mt-1 max-h-40 overflow-auto z-50">
//                     {questionPackages.map((pkg) => (
//                       <li
//                         key={pkg._id}
//                         onClick={() => togglePackageSelect(pkg._id)}
//                         className={`p-2 cursor-pointer hover:bg-gray-200 ${
//                           selectedPackages.includes(pkg._id)
//                             ? "bg-blue-200"
//                             : ""
//                         }`}
//                       >
//                         {pkg.packageTitle}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>

//             {/* Selected Packages Display */}
//             {selectedPackages.length > 0 && (
//               <div className="mb-4">
//                 <label className="block text-gray-700">
//                   Selected Packages:
//                 </label>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {getSelectedPackageTitles().map((pkg) => (
//                     <div
//                       key={pkg._id}
//                       className="bg-gray-200 p-2 rounded flex items-center"
//                     >
//                       <span>{pkg.packageTitle}</span>
//                       <button
//                         type="button"
//                         className="ml-2 text-red-500"
//                         onClick={() => togglePackageSelect(pkg._id)}
//                       >
//                         <FiX />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Extra Questions with Drag and Drop */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Extra Questions</label>
//               {extraQuestions.map((question, index) => (
//                 <DraggableExtraQuestion
//                   key={index}
//                   index={index}
//                   question={question}
//                   moveExtraQuestion={moveExtraQuestion}
//                   handleDeleteExtraQuestion={handleDeleteExtraQuestion}
//                 />
//               ))}
//               <button
//                 type="button"
//                 className="text-blue-500"
//                 onClick={() => setShowAddQuestionPopup(true)}
//               >
//                 + Add Question
//               </button>
//             </div>

//             {/* Expire Date */}
//             <div className="mb-4">
//               <label className="block text-gray-700">Expire Date</label>
//               <input
//                 type="date"
//                 className="w-full p-2 border rounded"
//                 value={interviewExpireDate}
//                 onChange={(e) => setInterviewExpireDate(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-between">
//               <Button label={"Cancel"} onClick={onClose} />
//               <Button label={"Create"} onClick={handleCreateInterview} />
//             </div>
//           </form>

//           {/* Add Question Popup */}
//           {showAddQuestionPopup && (
//             <AddQuestionModal
//               isOpen={showAddQuestionPopup}
//               onClose={() => setShowAddQuestionPopup(false)}
//               onSave={(newQuestion) =>
//                 setExtraQuestions([...extraQuestions, newQuestion])
//               }
//             />
//           )}
//         </div>
//       </div>
//     </DndProvider>
//   );
// };

// // Draggable Extra Question Component
// const DraggableExtraQuestion = ({
//   question,
//   index,
//   moveExtraQuestion,
//   handleDeleteExtraQuestion,
// }) => {
//   const ref = useRef(null);

//   const [, drop] = useDrop({
//     accept: ItemTypes.EXTRA_QUESTION,
//     hover(item, monitor) {
//       if (!ref.current) return;
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       if (dragIndex === hoverIndex) return;
//       const hoverBoundingRect = ref.current.getBoundingClientRect();
//       const hoverMiddleY =
//         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//       const clientOffset = monitor.getClientOffset();
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
//       moveExtraQuestion(dragIndex, hoverIndex);
//       item.index = hoverIndex;
//     },
//   });

//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.EXTRA_QUESTION,
//     item: { index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });

//   drag(drop(ref));

//   return (
//     <div
//       ref={ref}
//       className={`flex justify-between items-center mb-2 p-2 border rounded bg-white shadow ${
//         isDragging ? "opacity-50" : ""
//       }`}
//     >
//       <span>{question.question}</span>
//       <span>{question.time} min</span>
//       <button
//         type="button"
//         onClick={() => handleDeleteExtraQuestion(index)}
//         className="text-red-500"
//       >
//         <FiX />
//       </button>
//     </div>
//   );
// };

// export default CreateInterviewPage;

import React, { useEffect, useState, useRef } from "react";
import { FiChevronDown, FiX, FiAlignJustify } from "react-icons/fi";
import AddQuestionModal from "../components/AddQuestionModal";
import Button from "../components/button.component";
import useInterviewStore from "../stores/createInterviewStore";
import useQuestionPackageStore from "../stores/questionPackageStore";
import useInterviewListStore from "../stores/interviewListStore";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const ItemTypes = {
  EXTRA_QUESTION: "extraQuestion",
};
const CreateInterviewPage = ({ onClose, onCreate }) => {
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
  const { selectedPackages, togglePackageSelect, resetSelectedPackages } =
    useInterviewStore();
  const { createInterview } = useInterviewListStore();
  const [interviewTitle, setTitle] = useState("");
  const [interviewExpireDate, setInterviewExpireDate] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [extraQuestions, setExtraQuestions] = useState([]);
  const [showAddQuestionPopup, setShowAddQuestionPopup] = useState(false);
  const { fetchPackages, questionPackages } = useQuestionPackageStore();
  useEffect(() => {
    fetchPackages();
  }, [fetchPackages]);
  const handleDeleteExtraQuestion = (index) => {
    const updatedQuestions = extraQuestions.filter((_, i) => i !== index);
    setExtraQuestions(updatedQuestions);
  };
  const moveExtraQuestion = (dragIndex, hoverIndex) => {
    const updatedQuestions = [...extraQuestions];
    const [movedQuestion] = updatedQuestions.splice(dragIndex, 1);
    updatedQuestions.splice(hoverIndex, 0, movedQuestion);
    setExtraQuestions(updatedQuestions);
  };
  const handleCreateInterview = async () => {
    const newInterview = {
      interviewTitle,
      interviewExpireDate,
      packages: selectedPackages.map((packageId) => ({ packageId })),
      extraQuestions,
      questionCount: selectedPackages.length + extraQuestions.length,
      interviewUrl: "",
      totalVideos: 0,
      onHold: 0,
    };
    try {
      await createInterview(newInterview);
      resetSelectedPackages();
      onCreate(newInterview);
      onClose();
    } catch (error) {
      console.error("Error creating interview:", error);
    }
  };
  const getSelectedPackageTitles = () => {
    return questionPackages
      .filter((pkg) => selectedPackages.includes(pkg._id))
      .map((pkg) => pkg);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <style>{customStyles}</style>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
        <div className="relative w-[47%] h-[530px] mt-[-1.5%] bg-white rounded-lg overflow-hidden">
          {/* Fixed Header */}
          <div className="bg-gradient-to-br  from-[#47A7A2] via-[#358584] to-[#82BEBB] w-full h-[10%] rounded-t-lg shadow-md flex items-center justify-center sticky top-0 z-10">
            <h2 className="text-xl text-white font-bold mb-1">
              Create New Interview
            </h2>
          </div>
          {/* Scrollable Content */}
          <div
            className="p-4 overflow-y-auto custom-scrollbar"
            style={{ height: "calc(100% - 10%)" }}
          >
            <form>
              {/* Interview Title */}
              <div className="mb-7">
                <label className="block text-gray-700 text-[100%] mb-[1%] font-bold">
                  Title
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={interviewTitle}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter interview title"
                  required
                />
              </div>
              {/* Package Selection */}
              <div className="relative mb-7">
                <label className="block text-gray-700 text-[100%] mb-[1%] font-bold">
                  Packages
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full p-2 border rounded flex justify-between items-center"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    Select Packages
                    <FiChevronDown />
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute w-full bg-white border rounded mt-1 max-h-[500%] overflow-auto custom-scrollbar z-50">
                      {questionPackages.map((pkg) => (
                        <li
                          key={pkg._id}
                          onClick={() => togglePackageSelect(pkg._id)}
                          className={`p-2 cursor-pointer hover:bg-gray-200 ${
                            selectedPackages.includes(pkg._id)
                              ? "bg-gray-300"
                              : ""
                          }`}
                        >
                          {pkg.packageTitle}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              {/* Selected Packages Display */}
              {selectedPackages.length > 0 && (
                <div className="mb-7">
                  <label className="block text-gray-700">
                    Selected Packages:
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getSelectedPackageTitles().map((pkg) => (
                      <div
                        key={pkg._id}
                        className=" p-1 border-2 border-gray-300 rounded-lg flex items-center"
                      >
                        <span>{pkg.packageTitle}</span>
                        <button
                          type="button"
                          className="ml-2 text-red-500"
                          onClick={() => togglePackageSelect(pkg._id)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Extra Questions with Drag and Drop */}
              <div className="mb-7">
                <label className="block text-gray-700 mb-[1%] text-[100%] font-bold">
                  Extra Questions
                </label>
                {extraQuestions.map((question, index) => (
                  <DraggableExtraQuestion
                    key={index}
                    index={index}
                    question={question}
                    moveExtraQuestion={moveExtraQuestion}
                    handleDeleteExtraQuestion={handleDeleteExtraQuestion}
                  />
                ))}
                <button
                  type="button"
                  className="text-[#296967] font-bold text-sm"
                  onClick={() => setShowAddQuestionPopup(true)}
                >
                  + Add Question
                </button>
              </div>
              {/* Expire Date */}
              <div className="mb-[7.5%]">
                <label className="block text-gray-700 mb-[1%] text-[100%] font-bold">
                  Expire Date
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded"
                  value={interviewExpireDate}
                  onChange={(e) => setInterviewExpireDate(e.target.value)}
                  required
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-between mt-3">
                <Button
                  label={"Cancel"}
                  onClick={onClose}
                  className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
                />
                <Button
                  label={"Create"}
                  onClick={handleCreateInterview}
                  className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
                />
              </div>
            </form>
            {/* Add Question Popup */}
            {showAddQuestionPopup && (
              <AddQuestionModal
                isOpen={showAddQuestionPopup}
                onClose={() => setShowAddQuestionPopup(false)}
                onSave={(newQuestion) =>
                  setExtraQuestions([...extraQuestions, newQuestion])
                }
              />
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};
// Draggable Extra Question Component
const DraggableExtraQuestion = ({
  question,
  index,
  moveExtraQuestion,
  handleDeleteExtraQuestion,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.EXTRA_QUESTION,
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
      moveExtraQuestion(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.EXTRA_QUESTION,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={`relative flex justify-between items-center mb-2 p-2 border rounded bg-white shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center relative">
        <span className=" cursor-pointer text-gray-500">
          <FiAlignJustify />
        </span>

        <div className="absolute left-6 h-[120%] w-[1px] bg-[#d1d1d6]"></div>
        <div className="grid">
          <span className="ml-5">{question.question}</span>
          <span className="ml-5 text-sm text-gray-400">
            {question.time} min
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleDeleteExtraQuestion(index)}
        className="text-red-500 mb-7"
      >
        <FiX />
      </button>
    </div>
  );
};
export default CreateInterviewPage;
