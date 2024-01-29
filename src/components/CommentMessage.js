import React from "react";
import { USER_LOGO } from "../utils/constaint";

const CommentMessage = ({ data }) => {
  
  const { title, comment } = data;

  return (
    <div className="flex shadow-md bg-gray-100 p-2 rounded-md m-2">
      <img
        src={USER_LOGO}
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
