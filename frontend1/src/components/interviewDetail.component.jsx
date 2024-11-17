import React, { useEffect } from "react";
import { FiX } from "react-icons/fi";
import useInterviewListStore from "../stores/interviewListStore";
import Button from "./button.component";

const ViewInterviewDetailsComponent = ({ onClose, id }) => {
  const { questions, fetchInterviewQuestions } = useInterviewListStore();

  useEffect(() => {
    fetchInterviewQuestions(id);
  }, [fetchInterviewQuestions, id]);

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

    .custom-scrollbar:hover::-webkit-scrollbar-thumb {
      background-color: #c0c4c4;
    }
  `;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <style>{customStyles}</style>
      <div className="relative w-[47%] h-[530px] mt-[-1.5%] bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#47A7A2] via-[#358584] to-[#82BEBB] w-full h-[60px] flex items-center justify-between px-4">
          <h3 className="text-2xl font-bold text-white">Package Questions</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Content with Custom Scrollbar */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
          {questions.map((question, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <p className="font-bold text-black">
                {index + 1}:{" "}
                <span className="font-bold text-gray-700">
                  {question.question}
                </span>
              </p>
              <div className="flex justify-between text-xs">
                <p className="text-gray-400">
                  <span className="font-normal">{question.time} min</span>
                </p>
                <p className="text-gray-400">
                  <span className="font-normal">
                    {question.packageTitle
                      ? "Package: " + question.packageTitle
                      : "Extra Question"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewInterviewDetailsComponent;
