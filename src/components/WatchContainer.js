import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/Store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import ChatContainer from "./ChatContainer";

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  console.log("watch param", param.get("v"));
  const videoId = param.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="mt-16 flex flex-col  w-screen">
      <div className="w-screen flex flex-col md:flex-row ">
        <div className="flex w-full md:w-8/12 p-1 md:p-5 h-50 md:h-auto">
          <iframe
            className="rounded-lg md:rounded-2xl w-full h-72 md:h-auto"
            src={
              "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0"
            }
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-4/12 mt-4">
          <ChatContainer />
        </div>
      </div>
      <div className="w-screen md:w-8/12 p-1 ">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchContainer;
