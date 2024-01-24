import React, { useEffect, useRef, useState } from "react";
import LiveChat from "./LiveChat";
import { generateLiveChat, generateName } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addLiveChat } from "../utils/Store/liveChatSlice";

const ChatContainer = () => {
  const [showChat, setShowChat] = useState(true);
  const [chatInput, setChatInput] = useState("");

  const dispatch = useDispatch();
  const fetchLiveChat = useSelector((store) => store.liveChat.message);
  //console.log("live chat data from store", fetchLiveChat);

  const generateChat = () => {
    const getname = generateName();
    const getmessage = generateLiveChat();
    //console.log("getname results:", getname);
    //console.log("getmessage result", getmessage);
    dispatch(addLiveChat({ name: getname, message: getmessage }));
  };
  useEffect(() => {
    const timmer = setInterval(() => {
      generateChat();
      // console.log("interval called");
    }, 2000);

    return () => {
      clearInterval(timmer);
    };
  }, []);
  
  const handleSubmitChat = (e) => {
    e.preventDefault();
    dispatch(addLiveChat({ name: "bagpallab7", message: chatInput }));
    //console.log(chatInput);
    setChatInput("")
    

  };

  return (
    <>
      {showChat && (
        <div className="w-11/12 border border-b-0 border-black shadow-lg h-[30rem] rounded-t-lg p-3 m-3 mb-0 flex-col">
          <div className=" p-3 h-full  overflow-y-scroll flex flex-col-reverse">
            {fetchLiveChat &&
              fetchLiveChat.map((data) => (
                <LiveChat name={data.name} message={data.message} />
              ))}
          </div>
        </div>
      )}
      <div className="w-11/12 bg-slate-100 border  border-black shadow-lg rounded-b-lg p-1 m-3 mt-0 flex flex-col justify-center ">
        {showChat ? (
          <>
            <form
              className="p-1 border"
              onSubmit={(e) => {
                handleSubmitChat(e);
              }}
            >
              <input
                type="text"
                value={chatInput}
                className="border w-10/12"
                onChange={(e) => setChatInput(e.target.value)}
              />
              <button className="w-2/12 bg-gray-300" onClick={handleSubmitChat}>Send</button>
            </form>
            <button
              onClick={() => setShowChat(!showChat)}
              className="bg-red-100"
            >
              Hide ⬆
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-green-100"
          >
            Show chat ⬇
          </button>
        )}{" "}
      </div>
    </>
  );
};

export default ChatContainer;
