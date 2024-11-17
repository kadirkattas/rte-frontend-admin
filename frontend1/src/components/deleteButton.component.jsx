import React from 'react';

const DeleteButton = ({ packageId }) => {
    const handleDelete = () => {
        console.log(`Delete package ${packageId}`);
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded m-1"
        >
            Delete
        </button>
    );
};

export default DeleteButton;
