import React from "react";
import { USER_LOGO } from "../utils/constaint";

const LiveChat = ({ name, message }) => {
  return (
    <div className="w-auto text-lg  flex  p-2 bg-slate-100 rounded-md my-1">
      <div className="pr-2 w-1/12">
        <img
          src={USER_LOGO}
          alt="user-logo"
          className="md:w-8 md:h-8 w-4 h-4"
        />
      </div>
      <div className="w-11/12">
        <span className="text-gray-700 pr-3 md:text-lg text-sm">{name}</span>
        <span className="text-xs md:text-sm">{message}</span>
      </div>
    </div>
  );
};

export default LiveChat;
