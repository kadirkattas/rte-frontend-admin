// // import React, { useState, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { FiAlignJustify, FiTrash2 } from "react-icons/fi";
// // import { useDrag, useDrop, DndProvider } from "react-dnd";
// // import { HTML5Backend } from "react-dnd-html5-backend";
// // import AddQuestionModal from "../components/AddQuestionModal";
// // import CreateButton from "../components/createButton.component";
// // import Button from "../components/button.component";
// // import { InputField } from "../components/input.component";
// // import useCreateQuestionPackageStore from "../stores/createQuestionPackageStore";

// // const ItemTypes = {
// //   QUESTION: "question", // Drag item type
// // };

// // const CreateQuestionPackagePage = () => {
// //   const navigate = useNavigate();
// //   const {
// //     questions,
// //     addQuestion,
// //     removeQuestion,
// //     resetQuestions,
// //     setPackageTitle,
// //     savePackage,
// //     moveQuestion, // Move question function from store
// //   } = useCreateQuestionPackageStore();

// //   const [localPackageTitle, setLocalPackageTitle] = useState(""); // Local state for package title
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const handleAddQuestion = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handleSavePackage = () => {
// //     setPackageTitle(localPackageTitle); // Sync the local title to the store
// //     savePackage(); // Call the savePackage function from the store
// //     setLocalPackageTitle(""); // Clear local state
// //     resetQuestions(); // Clear questions in the store
// //     navigate("/manage-question-package"); // Navigate to the manage page
// //   };

// //   const handleSaveQuestion = (question) => {
// //     addQuestion(question); // Add the question to the store
// //     setIsModalOpen(false); // Close the modal
// //   };

// //   const handleDeleteQuestion = (id) => {
// //     removeQuestion(id); // Remove the question from the store
// //   };

// //   const moveQuestionItem = (dragIndex, hoverIndex) => {
// //     moveQuestion(dragIndex, hoverIndex); // Call store function to reorder questions
// //   };

// //   const handleCancel = () => {
// //     navigate("/manage-question-package");
// //   };

// //   return (
// //     // <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col shadow-md">
// //     //   <DndProvider backend={HTML5Backend}>
// //     //     <div className="container mx-auto p-1">
// //     //       <div className="flex justify-between items-center mb-3 mt-[-12px]">
// //     //         <h1 className="text-xl font-bold">Create Question Package</h1>
// //     //         <CreateButton onCreate={handleAddQuestion} />
// //     //       </div>
// //     //       <InputField
// //     //         placeholder="Package Title..."
// //     //         value={localPackageTitle}
// //     //         onChange={(e) => setLocalPackageTitle(e.target.value)} // Set the local title
// //     //       />
// //     //       <div className="bg-gray-100 p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[38px] w-full">
// //     //         <div className="grid grid-cols-4 gap-4 text-center font-bold text-[15px]">
// //     //           <div>Order</div>
// //     //           <div>Question</div>
// //     //           <div>Time</div>
// //     //           <div>Action</div>
// //     //         </div>
// //     //       </div>

// //     //       <div className="overflow-y-auto h-96 border p-2 rounded">
// //     //         {questions.map((question, index) => (
// //     //           <DraggableQuestion
// //     //             key={question._id} // Ensure using _id
// //     //             index={index}
// //     //             question={question}
// //     //             moveQuestionItem={moveQuestionItem}
// //     //             handleDeleteQuestion={handleDeleteQuestion}
// //     //           />
// //     //         ))}
// //     //       </div>
// //     //       <div className="flex justify-between mt-2">
// //     //         <Button label="Cancel" onClick={handleCancel} />
// //     //         <Button label="Save" onClick={handleSavePackage} />
// //     //       </div>
// //     //       {isModalOpen && (
// //     //         <AddQuestionModal
// //     //           isOpen={isModalOpen}
// //     //           onSave={handleSaveQuestion}
// //     //           onClose={() => setIsModalOpen(false)}
// //     //           questionCount={questions.length}
// //     //         />
// //     //       )}
// //     //     </div>
// //     //   </DndProvider>
// //     // </div>

// //     <div className="container mx-auto p-4 border-2 border-[#E1E1E4] bg-white rounded-[10px] h-full flex flex-col shadow-md">
// //       <DndProvider backend={HTML5Backend}>
// //         <div className="container mx-auto p-1">
// //           <div className="flex justify-between items-center mb-3 mt-[-7px]">
// //             <h1 className="text-xl font-bold">Create Question Package</h1>
// //             <CreateButton onCreate={handleAddQuestion} />
// //           </div>
// //           <InputField
// //             placeholder="Package Title..."
// //             value={localPackageTitle}
// //             onChange={(e) => setLocalPackageTitle(e.target.value)}
// //           />
// //           <div className="bg-gray-100 p-2 border-[#DDDDE0] border-[1px] rounded-[5px] h-[38px] w-full">
// //             <div className="grid grid-cols-4 gap-4 text-center font-bold text-[15px]">
// //               <div>Order</div>
// //               <div>Question</div>
// //               <div>Time</div>
// //               <div>Action</div>
// //             </div>
// //           </div>

// //           <div className="overflow-y-auto h-[405px] max-h-[540px] border p-2 rounded mt-2">
// //             {questions.map((question, index) => (
// //               <DraggableQuestion
// //                 key={question._id}
// //                 index={index}
// //                 question={question}
// //                 moveQuestionItem={moveQuestionItem}
// //                 handleDeleteQuestion={handleDeleteQuestion}
// //               />
// //             ))}
// //           </div>

// //           <div className="flex justify-between mt-2">
// //             {/* mt-3 yerine daha küçük bir değer kullanılarak mesafe azaltılır */}
// //             <Button label="Cancel" onClick={handleCancel} />
// //             <Button label="Save" onClick={handleSavePackage} />
// //           </div>
// //           {isModalOpen && (
// //             <AddQuestionModal
// //               isOpen={isModalOpen}
// //               onSave={handleSaveQuestion}
// //               onClose={() => setIsModalOpen(false)}
// //               questionCount={questions.length}
// //             />
// //           )}
// //         </div>
// //       </DndProvider>
// //     </div>
// //   );
// // };

// // const DraggableQuestion = ({
// //   question,
// //   index,
// //   moveQuestionItem,
// //   handleDeleteQuestion,
// // }) => {
// //   const ref = useRef(null);

// //   const [, drop] = useDrop({
// //     accept: ItemTypes.QUESTION,
// //     hover(item, monitor) {
// //       if (!ref.current) {
// //         return;
// //       }
// //       const dragIndex = item.index;
// //       const hoverIndex = index;

// //       if (dragIndex === hoverIndex) {
// //         return;
// //       }

// //       const hoverBoundingRect = ref.current?.getBoundingClientRect();
// //       const hoverMiddleY =
// //         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
// //       const clientOffset = monitor.getClientOffset();
// //       const hoverClientY = clientOffset.y - hoverBoundingRect.top;

// //       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
// //         return;
// //       }
// //       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
// //         return;
// //       }

// //       moveQuestionItem(dragIndex, hoverIndex);
// //       item.index = hoverIndex;
// //     },
// //   });

// //   const [{ isDragging }, drag] = useDrag({
// //     type: ItemTypes.QUESTION,
// //     item: { index },
// //     collect: (monitor) => ({
// //       isDragging: monitor.isDragging(),
// //     }),
// //   });

// //   drag(drop(ref));

// //   return (
// //     <div
// //       ref={ref}
// //       className={`flex items-center justify-between mb-2 p-2 border rounded bg-white shadow ${
// //         isDragging ? "opacity-50" : ""
// //       }`}
// //     >
// //       <span className="mr-2 cursor-pointer text-gray-500">
// //         <FiAlignJustify />
// //       </span>
// //       <span className="flex-1 mx-2 p-1">{question.question}</span>
// //       <span className="w-20 mx-2 p-1">{question.time} min</span>
// //       <button
// //         onClick={() => handleDeleteQuestion(question._id)} // Ensure using _id
// //         className="text-red-500 hover:text-red-700"
// //       >
// //         <FiTrash2 />
// //       </button>
// //     </div>
// //   );
// // };

// // export default CreateQuestionPackagePage;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiAlignJustify, FiTrash2 } from "react-icons/fi";
// import { useDrag, useDrop, DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import AddQuestionModal from "../components/AddQuestionModal";
// import CreateButton from "../components/createButton.component";
// import Button from "../components/button.component";
// import useCreateQuestionPackageStore from "../stores/createQuestionPackageStore";
// const ItemTypes = {
//   QUESTION: "question",
// };
// const CreateQuestionPackagePage = () => {
//   const navigate = useNavigate();
//   const {
//     questions,
//     addQuestion,
//     removeQuestion,
//     resetQuestions,
//     setPackageTitle,
//     savePackage,
//     moveQuestion,
//   } = useCreateQuestionPackageStore();
//   const [localPackageTitle, setLocalPackageTitle] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const handleAddQuestion = () => {
//     setIsModalOpen(true);
//   };
//   const handleSavePackage = () => {
//     setPackageTitle(localPackageTitle);
//     savePackage();
//     setLocalPackageTitle("");
//     resetQuestions();
//     navigate("/manage-question-package");
//   };
//   const handleSaveQuestion = (question) => {
//     addQuestion(question);
//     setIsModalOpen(false);
//   };
//   const handleDeleteQuestion = (id) => {
//     removeQuestion(id);
//   };
//   const moveQuestionItem = (dragIndex, hoverIndex) => {
//     moveQuestion(dragIndex, hoverIndex);
//   };
//   const handleCancel = () => {
//     navigate("/manage-question-package");
//   };
//   const customStyles = `
//     .custom-scrollbar::-webkit-scrollbar {
//       width: 8px;
//     }
//     .custom-scrollbar::-webkit-scrollbar-track {
//       background: #F0F4F4;
//       border-radius: 10px;
//     }
//     .custom-scrollbar::-webkit-scrollbar-thumb {
//       background-color: #D8D8DB;
//       border-radius: 10px;
//     }
//   `;
//   return (
//     <div className="container mx-auto p-4 border-2h-[88vh] h-[100%]  border-2 border-[#E1E1E4]  bg-white rounded-[23px]">
//       <style>{customStyles}</style>
//       <DndProvider backend={HTML5Backend}>
//         <div className="container mx-auto p-1">
//           <div className="flex justify-between items-center mb-4">
//             <h1 className="text-xl font-bold">Create Question Package</h1>
//             <div className="flex space-x-5">
//               <input
//                 type="text"
//                 placeholder="Package Title..."
//                 value={localPackageTitle}
//                 onChange={(e) => setLocalPackageTitle(e.target.value)}
//                 className="w-[300px] p-1 border border-gray-300 rounded-md "
//               />
//               <CreateButton onCreate={handleAddQuestion} />
//             </div>
//           </div>

//           <div className=" bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9]  p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[18px] h-[43px] w-full text-white">
//             <div className="grid grid-cols-4 gap-0 text-center font-semibold text-[17px] h-full">
//               <div className="flex items-center justify-center relative h-full">
//                 <span className="z-10  ml-[-80%]">Order</span>
//                 <div className="w-[0.5%] h-[162%] bg-[#ffffff] absolute ml-[-56%] mb-[-4]"></div>
//               </div>
//               <div className="flex items-center justify-center relative h-full">
//                 <span className="z-10 ml-[-222%]">Question</span>
//                 <div className="w-[0.5%] h-[162%] bg-white absolute ml-[350%] mb-[-4]"></div>
//               </div>
//               <div className="flex items-center justify-center relative h-full">
//                 <span className="z-10  mr-[-199%]">Time</span>
//                 <div className="w-[0.5%] h-[162%] bg-white absolute ml-[250%] mb-[-4]"></div>
//               </div>
//               <div className="flex items-center justify-center h-full">
//                 <span className="z-10 ml-[78%]">Action</span>
//               </div>
//             </div>
//           </div>

//           <div className="border p-0 m-0 rounded-b-[18px] h-[59vh] max-h-[59vh] overflow-hidden">
//             <div className="custom-scrollbar overflow-y-auto h-full space-y-0">
//               {questions.map((question, index) => (
//                 <DraggableQuestion
//                   key={question._id}
//                   index={index}
//                   question={question}
//                   moveQuestionItem={moveQuestionItem}
//                   handleDeleteQuestion={handleDeleteQuestion}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-between mt-2">
//             <Button
//               label="Cancel"
//               onClick={handleCancel}
//               className="hover:bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] hover:text-white"
//             />
//             <Button
//               label="Save"
//               onClick={handleSavePackage}
//               className="hover:bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9] hover:text-white"
//             />
//           </div>
//           {/* Modal for Adding Question */}
//           {isModalOpen && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//               <AddQuestionModal
//                 isOpen={isModalOpen}
//                 onSave={handleSaveQuestion}
//                 onClose={() => setIsModalOpen(false)}
//                 questionCount={questions.length}
//               />
//             </div>
//           )}
//         </div>
//       </DndProvider>
//     </div>
//   );
// };
// const DraggableQuestion = ({
//   question,
//   index,
//   moveQuestionItem,
//   handleDeleteQuestion,
// }) => {
//   const ref = useRef(null);
//   const [, drop] = useDrop({
//     accept: ItemTypes.QUESTION,
//     hover(item, monitor) {
//       if (!ref.current) {
//         return;
//       }
//       const dragIndex = item.index;
//       const hoverIndex = index;
//       if (dragIndex === hoverIndex) {
//         return;
//       }
//       const hoverBoundingRect = ref.current?.getBoundingClientRect();
//       const hoverMiddleY =
//         (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
//       const clientOffset = monitor.getClientOffset();
//       const hoverClientY = clientOffset.y - hoverBoundingRect.top;
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return;
//       }
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return;
//       }
//       moveQuestionItem(dragIndex, hoverIndex);
//       item.index = hoverIndex;
//     },
//   });
//   const [{ isDragging }, drag] = useDrag({
//     type: ItemTypes.QUESTION,
//     item: { index },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
//   drag(drop(ref));
//   return (
//     <div ref={ref} className={`${isDragging ? "opacity-50" : ""}`}>
//       <div className="border-[#E1E1E4] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
//         <div
//           key={question._id}
//           className={`flex items-center justify-between -mt-[1px] p-3 min-h-[50px] border-b-[1.5px] border-[#DDDDE0] w-full text-sm md:text-base bg-white shadow-sm`}
//         >
//           {/* Number Column */}
//           <div className="flex items-center w-[10%] relative">
//             <span className="ml-[14%] cursor-pointer text-gray-600 hover:text-gray-900">
//               <FiAlignJustify />
//             </span>
//           </div>
//           {/* Question Column */}
//           <div className="flex flex-col w-[60%] relative">
//             {/* Left Line */}
//             <div className="absolute mt-[-2%] left-[-22.3%] h-[212%] w-[1.4px] bg-[#D7D7DB]"></div>
//             {/* Text */}
//             <span className="ml-[-19%]">{question.question}</span>
//             {/* Right Lines */}
//             <div className="absolute right-[-4.9%]  mt-[-2%]  h-[212%]  w-[1.4px] bg-[#D7D7DB]"></div>
//             <div className="absolute right-[-25.9%] mt-[-2%]  h-[212%]  w-[1.4px] bg-[#D7D7DB]"></div>
//           </div>
//           {/* Question Time Column */}
//           <div className="flex items-center relative">
//             <span className="ml-[-15%] flex-none">{question.time} min</span>
//           </div>
//           {/* Action Column */}
//           <div className="flex items-center justify-end w-[1%]">
//             <button
//               onClick={() => handleDeleteQuestion(question._id)}
//               className="text-gray-700 hover:text-gray-900 mr-5"
//             >
//               <FiTrash2 />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CreateQuestionPackagePage;

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiAlignJustify, FiTrash2 } from "react-icons/fi";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AddQuestionModal from "../components/AddQuestionModal";
import CreateButton from "../components/createButton.component";
import Button from "../components/button.component";
import useCreateQuestionPackageStore from "../stores/createQuestionPackageStore";
import Header from "../components/header";

const ItemTypes = {
  QUESTION: "question",
};
const CreateQuestionPackagePage = () => {
  const navigate = useNavigate();
  const {
    questions,
    addQuestion,
    removeQuestion,
    resetQuestions,
    setPackageTitle,
    savePackage,
    moveQuestion,
  } = useCreateQuestionPackageStore();
  const [localPackageTitle, setLocalPackageTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleAddQuestion = () => {
    setIsModalOpen(true);
  };
  const handleSavePackage = () => {
    setPackageTitle(localPackageTitle);
    savePackage();
    setLocalPackageTitle("");
    resetQuestions();
    navigate("/manage-question-package");
  };
  const handleSaveQuestion = (question) => {
    addQuestion(question);
    setIsModalOpen(false);
  };
  const handleDeleteQuestion = (id) => {
    removeQuestion(id);
  };
  const moveQuestionItem = (dragIndex, hoverIndex) => {
    moveQuestion(dragIndex, hoverIndex);
  };
  const handleCancel = () => {
    navigate("/manage-question-package");
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
  return (
    <div className="container mx-auto p-4 border-2h-[88vh] h-[100%]  border-2 border-[#D1E4E4]  bg-white rounded-[23px]">
      <style>{customStyles}</style>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div className="container mx-auto p-1">
          <div className="flex justify-between items-center mb-4 mt-[-11px]">
            <h1 className=" text-[130%] font-semibold font-['Poppins']">
              Create Question Package
            </h1>
            <div className="flex space-x-5">
              <input
                type="text"
                placeholder="Package Title..."
                value={localPackageTitle}
                onChange={(e) => setLocalPackageTitle(e.target.value)}
                className="w-[280px] h-[35px] p-1 pl-4 border-2 border-[#9DD0CE] rounded-[25px] focus:outline-none"
              />
              <CreateButton
                onCreate={handleAddQuestion}
                label={"Create Question"}
              />
            </div>
          </div>
          <div className=" bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9]  p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[18px] h-[43px] w-full text-white">
            <div className="grid grid-cols-4 gap-0 text-center font-semibold text-[17px] h-full">
              <div className="flex items-center justify-center relative h-full">
                <span className="z-10  ml-[-80%]">Order</span>
                <div className="w-[0.5%] h-[162%] bg-[#FFFFFF] absolute ml-[-56%] mb-[-4]"></div>
              </div>
              <div className="flex items-center justify-center relative h-full">
                <span className="z-10 ml-[-222%]">Question</span>
                <div className="w-[0.5%] h-[162%] bg-white absolute ml-[350%] mb-[-4]"></div>
              </div>
              <div className="flex items-center justify-center relative h-full">
                <span className="z-10  mr-[-199%]">Time</span>
                <div className="w-[0.5%] h-[162%] bg-white absolute ml-[250%] mb-[-4]"></div>
              </div>
              <div className="flex items-center justify-center h-full">
                <span className="z-10 ml-[78%]">Action</span>
              </div>
            </div>
          </div>
          <div className="border p-0 m-0 rounded-b-[18px] h-[63vh] max-h-[63vh] overflow-hidden">
            <div className="custom-scrollbar overflow-y-auto h-full space-y-0">
              {questions.map((question, index) => (
                <DraggableQuestion
                  key={question._id}
                  index={index}
                  question={question}
                  moveQuestionItem={moveQuestionItem}
                  handleDeleteQuestion={handleDeleteQuestion}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <Button
              label="Cancel"
              onClick={handleCancel}
              className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
            />
            <Button
              label="Save"
              onClick={handleSavePackage}
              className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
            />
          </div>
          {/* Modal for Adding Question */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <AddQuestionModal
                isOpen={isModalOpen}
                onSave={handleSaveQuestion}
                onClose={() => setIsModalOpen(false)}
                questionCount={questions.length}
              />
            </div>
          )}
        </div>
      </DndProvider>
    </div>
  );
};
const DraggableQuestion = ({
  question,
  index,
  moveQuestionItem,
  handleDeleteQuestion,
}) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.QUESTION,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveQuestionItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.QUESTION,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <div ref={ref} className={`${isDragging ? "opacity-50" : ""}`}>
      <div className="border-[#E1E1E4] flex-1 overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
        <div
          key={question._id}
          className={`flex items-center justify-between -mt-[1px] p-3 min-h-[50px] border-b-[1.5px] border-[#DDDDE0] w-full text-sm md:text-base bg-white shadow-sm hover:bg-[#d0e4e5]/35`} // Added hover effect here
        >
          {/* Number Column */}
          <div className="flex items-center w-[10%] relative">
            <span className="3xl:ml-[18%] ml-[14%] cursor-pointer text-gray-600 hover:text-gray-900">
              <FiAlignJustify />
            </span>
          </div>
          {/* Question Column */}
          <div className="flex flex-col w-[60%] relative">
            {/* Left Line */}
            <div className="absolute mt-[-2%] 3xl:left-[-22.7%] left-[-22.3%] 3xl:h-[230%] h-[212%]  w-[1.4px] bg-[#D7D7DB]"></div>
            {/* Text */}
            <span className="ml-[-19%]">
              {question.question.length > 105 &&
              !question.question.includes(" ")
                ? `${question.question.substring(0, 105)}...`
                : question.question}
            </span>
            {/* Right Lines */}
            <div className="absolute 3xl:right-[-4.4%] right-[-4.9%]  mt-[-2%]  3xl:h-[230%] h-[212%]  w-[1.4px] bg-[#D7D7DB]"></div>
            <div className="absolute 3xl:right-[-25.3%] right-[-25.9%] mt-[-2%]  3xl:h-[230%] h-[212%]  w-[1.4px] bg-[#D7D7DB]"></div>
          </div>
          {/* Question Time Column */}
          <div className="flex items-center relative">
            <span className="3xl:ml-[-45%] ml-[-30%] flex-none">
              {question.time} min
            </span>
          </div>
          {/* Action Column */}
          <div className="flex items-center justify-end w-[1%]">
            <button
              onClick={() => handleDeleteQuestion(question._id)}
              className="text-gray-700 hover:text-gray-900 3xl:mr-8 mr-5"
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestionPackagePage;
