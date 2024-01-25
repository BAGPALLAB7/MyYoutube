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
    <div className="mt-16 flex w-screen">
      <div className="w-8/12">
        <div className="p-5 ">
          <iframe
            className="rounded-2xl w-full"
            height="515"
            src={"https://www.youtube.com/embed/" + videoId+"?autoplay=1&mute=0"}
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full p-1 ">
          <CommentContainer />
        </div>
      </div>
      <div className="w-4/12 mt-4">
        <ChatContainer />
      </div>
    </div>
  );
};

export default WatchContainer;
