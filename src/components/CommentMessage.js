import React from "react";

const CommentMessage = ({ data }) => {
  
  const { title, comment, replies } = data;

  return (
    <div className="flex shadow-md bg-gray-100 p-2 rounded-md m-2">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-logo"
        className="w-8 h-8"
      />
      <div className="px-3">
        <p className="font-bold">{title}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommentMessage;
