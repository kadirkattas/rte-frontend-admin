import Button from "../components/button.component"; // Gerekli yolu ayarlayın
import React, { useState } from "react";
import { TextArea } from "../components/input.component"; // TextArea bileşeninin yolu
import { useNavigate } from "react-router-dom";

const AddQuestionModal = ({ isOpen, onClose, onSave, toNavigate }) => {
  const [question, setQuestion] = useState("");
  const [time, setTime] = useState("2");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ question, time });
    onClose();
    navigate(toNavigate);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white h-[430px] w-[38%] rounded-lg">
        <div className="bg-gradient-to-br from-[#47A7A2] via-[#358584] to-[#82BEBB] w-full h-[10%] rounded-t-lg shadow-md flex items-center p-0 justify-center">
          <h2 className="font-bold text-lg text-white">Add New Question</h2>
        </div>
        <div className="p-4">
          <label className="text-[105%] font-bold mb-1" htmlFor="question">
            Question
          </label>
          <div className="mb-3"></div>
          <TextArea
            placeholderText="Enter your question here"
            onChange={(e) => setQuestion(e.target.value)} // TextArea bileşenine onChange fonksiyonunu ekledik
          />
          <div className="mb-4"></div>{" "}
          {/* Boşluk oluşturmak için boş bir div eklendi */}
          <label className="text-[105%] font-bold mb-1" htmlFor="time">
            Time/min
          </label>
          <div className="mb-1"></div>
          <input
            id="time" // Eşleştirme için id eklendi
            type="number"
            placeholder="Enter time in minutes"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-2 border rounded w-full mb-2"
          />
        </div>
        <div className="mb-[-3.5%] "></div>
        <div className="flex justify-between mt-4 p-4">
          <Button
            label="Cancel"
            onClick={onClose}
            className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9]  hover:text-white"
          />
          <Button
            label="Save"
            onClick={handleSave}
            className="hover:bg-gradient-to-br from-[#47A7A2] via-[#3E9D98] to-[#8CCCC9]  hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default AddQuestionModal;
