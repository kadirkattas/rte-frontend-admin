// loadingModal.js
import React from "react";

const LoadingModal = ({ isOpen, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p>{message}</p>
        <div className="mt-4">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
