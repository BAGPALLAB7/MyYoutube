import React from "react";

const CommentMessage = ({ data }) => {
  
  const { title, comment } = data;

  return (
    <div className="flex shadow-md bg-gray-100 p-2 rounded-md m-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-logo"
        className="md:w-8 md:h-8 w-4 h-4"
      />
      <div className="px-1 md:px-3">
        <p className="text-gray-500 md:text-lg text-sm">{title}</p>
        <p className="text-xs md:text-lg">{comment}</p>
      </div>
    </div>
  );
};

export default CommentMessage;
