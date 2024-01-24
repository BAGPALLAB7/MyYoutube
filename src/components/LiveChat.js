import React from "react";

const LiveChat = ({ name, message }) => {
  return (
    <div className="w-auto text-lg  flex  p-2 bg-slate-100 rounded-md my-1">
      <div className="pr-2 w-1/12">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-logo"
          className="w-8 h-8"
        />
      </div>
      <div className="w-11/12">
        <span className="text-gray-700 pr-3 text-lg">{name}</span>
        <span className="text-sm">{message}</span>
      </div>
    </div>
  );
};

export default LiveChat;
