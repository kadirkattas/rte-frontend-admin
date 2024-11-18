import React from "react";

const EditButton = ({ packageId }) => {
  const handleEdit = () => {
    `Edit package ${packageId}`;
  };

  return (
    <button
      onClick={handleEdit}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded m-1"
    >
      Edit
    </button>
  );
};

export default EditButton;
