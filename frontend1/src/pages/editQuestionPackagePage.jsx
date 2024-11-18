import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FiAlignJustify, FiTrash2, FiEdit } from "react-icons/fi";
import Button from "../components/button.component";
import CreateButton from "../components/createButton.component";
import { InputField } from "../components/input.component";
import AddQuestionModal from "../components/AddQuestionModal";
import useQuestionPackageStore from "../stores/questionPackageStore"; // Import the store
import Header from "../components/header";

const ItemTypes = {
  QUESTION: "question", // Drag item type
};

const EditQuestionPackagePage = () => {
  const { id } = useParams(); // Get the package ID from URL
  const navigate = useNavigate();
  const { packageData, fetchPackageData, updatePackage } =
    useQuestionPackageStore(); // Use the store to fetch and update package data
  const [localPackageData, setLocalPackageData] = useState(null); // Local state to track changes
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editMode, setEditMode] = useState(false); // Track if title is in edit mode
  // Fetch the package data using the ID when the component mounts
  useEffect(() => {
    if (id) {
      fetchPackageData(id); // Fetch the package with its questions using the ID
    }
  }, [id, fetchPackageData]);

  // Sync the store's packageData to the local state
  useEffect(() => {
    if (packageData) {
      setLocalPackageData({ ...packageData });
    }
  }, [packageData]);

  const handleAddQuestion = () => {
    setEditingQuestion(null);
    setIsModalOpen(true);
  };

  const handleSaveQuestion = (question) => {
    const newPackageData = { ...localPackageData };
    if (editingQuestion) {
      newPackageData.questions = newPackageData.questions.map((q) =>
        q.id === question.id ? question : q
      );
    } else {
      newPackageData.questions = [...newPackageData.questions, question];
    }
    setLocalPackageData(newPackageData);
    setIsModalOpen(false);
  };

  const handleDeleteQuestion = (index) => {
    const newPackageData = {
      ...localPackageData,
      questions: localPackageData.questions.filter((_, idx) => idx !== index),
    };
    setLocalPackageData(newPackageData);
  };

  const handleSave = async () => {
    if (localPackageData) {
      await updatePackage(id, localPackageData); // Call updatePackage with the modified data
      navigate("/manage-question-package");
    }
  };

  const moveQuestion = (dragIndex, hoverIndex) => {
    const updatedQuestions = [...localPackageData.questions];
    const [removed] = updatedQuestions.splice(dragIndex, 1); // Dragged item removed
    updatedQuestions.splice(hoverIndex, 0, removed); // Inserted in the hover position
    setLocalPackageData({ ...localPackageData, questions: updatedQuestions });
  };

  if (!localPackageData) {
    return <div>Loading...</div>;
  }

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

  const handleTitleEdit = () => {
    setEditMode(true);
  };

  const handleTitleChange = (e) => {
    setLocalPackageData({
      ...localPackageData,
      packageTitle: e.target.value,
    });
  };

  const handleTitleBlur = () => {
    setEditMode(false);
  };

  const handleTitleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditMode(false);
    }
  };

  return (
    <div className="container mx-auto p-4 border-2 h-[100%] border-[#D1E4E4] bg-white rounded-[23px]">
      <style>{customStyles}</style>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div className="container mx-auto p-1">
          <div className="flex justify-between items-center mb-[-2px] mt-[-11px]">
            <h1 className="mt-[-15px] text-[130%] font-semibold font-['Poppins']">
              Edit Question Package
            </h1>

            <div className="flex space-x-5">
              <div className="flex items-center mb-4">
                {editMode ? (
                  <div className="flex items-center space-x-2 border-2 border-[#9DD0CE] rounded-[25px] px-3 p-1 pl-4 w-[233px]">
                    <input
                      type="text"
                      value={localPackageData.packageTitle || ""}
                      onChange={handleTitleChange}
                      onBlur={handleTitleBlur}
                      onKeyDown={handleTitleKeyDown}
                      className="flex-grow bg-transparent outline-none "
                      autoFocus
                    />
                    <button
                      onClick={handleTitleBlur}
                      className="text-gray-700 hover:text-black"
                    >
                      ✓
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between border-2 border-[#9DD0CE] rounded-[25px] px-3 py-1 w-[233px]">
                    <span className="font-semibold mr-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      {localPackageData.packageTitle.length > 22
                        ? `${localPackageData.packageTitle.substring(0, 22)}...`
                        : localPackageData.packageTitle}
                    </span>
                    <button
                      onClick={handleTitleEdit}
                      className="text-gray-700 hover:text-black"
                    >
                      <FiEdit />
                    </button>
                  </div>
                )}
              </div>
              <CreateButton
                onCreate={handleAddQuestion}
                label={"Create Question"}
              />
            </div>
          </div>

          <div className=" bg-gradient-to-br from-[#47a7a2] via-[#3e9d98] to-[#8cccc9]  p-2 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-[#D7D7DB] rounded-t-[18px] h-[43px] w-full text-white">
            <div className="grid grid-cols-4 gap-0 text-center font-semibold text-[17px] h-full">
              <div className="flex items-center justify-center relative h-full">
                <span className="z-10  ml-[-80%]">Order</span>
                <div className="w-[0.5%] h-[162%] bg-[#ffffff] absolute ml-[-56%] mb-[-4]"></div>
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
              {localPackageData.questions.map((question, index) => (
                <DraggableQuestion
                  key={index}
                  index={index}
                  question={question}
                  moveQuestion={moveQuestion}
                  handleDeleteQuestion={handleDeleteQuestion}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-3">
            <Button
              label="Cancel"
              onClick={() => navigate("/manage-question-package")}
              className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
            />
            <Button
              label="Save"
              onClick={handleSave}
              className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9] hover:text-white"
            />
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <AddQuestionModal
                isOpen={isModalOpen}
                onSave={handleSaveQuestion}
                onClose={() => setIsModalOpen(false)}
                existingQuestion={editingQuestion}
                questionCount={localPackageData.questions.length}
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
      <div className="border-[#E1E1E4] flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 hover:scrollbar-thumb-gray-500">
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
              {question.question.length > 115 &&
              !question.question.includes(" ")
                ? `${question.question.substring(0, 115)}...`
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

export default EditQuestionPackagePage;
