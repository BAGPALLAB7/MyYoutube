import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/Store/configSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import ChatContainer from "./ChatContainer";

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  console.log("watch param", param.get("v"));
  const [snippet, setSnippet] = useState("");
  const [statistics, setStatistics] = useState("");

  const videoId = param.get("v");
  const finalURL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    videoId +
    "&key=" +
    process.env.REACT_APP_GOOGLE_API;
  const callWatchVideoDetailsAPI = async () => {
    const data = await fetch(finalURL);
    const jsonData = await data.json();
    console.log(jsonData.items[0]);
    setSnippet(jsonData.items[0].snippet);
    setStatistics(jsonData.items[0].statistics);
  };

  useEffect(() => {
    callWatchVideoDetailsAPI();
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="mt-16 flex flex-col  w-screen">
      <div className="w-screen flex flex-col md:flex-row ">
        <div className="flex flex-col w-full md:w-8/12 p-1 md:p-5 h-50 ">
          <iframe
            className="rounded-lg md:rounded-2xl w-full h-72 md:h-[500px]"
            src={
              "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=0"
            }
            allow="autoplay"
            allowFullScreen
          ></iframe>

          <div className="w-full items-center bg-slate-50 p-3 rounded-b-lg">
            <h1 className="text-2xl font-bold py-3">{snippet.title}</h1>
            <div className="flex flex-col-reverse md:flex-row w-full items-center">
              <div className="w-full my-3 md:w-6/12">
                <div className="flex items-center">
                  <div className="w-1/12 md:w-auto content-center">
                    <img
                      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                      alt="user-logo"
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="px-2 md:px-3 flex md:flex-col w-11/12 md:w-auto justify-between items-center">
                    <p className="text-black md:text-lg text-xl">
                      {snippet.channelTitle}
                    </p>
                    <button className="px-3 bg-black text-white font-lg rounded-full py-1">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full my-3 md:w-6/12 flex md:justify-end h-10 justify-around text-sm">
                <button className="px-2 md:px-4 bg-gray-200 text-black rounded-full md:mx-2 flex items-center">
                  <img
                    className="mx-2 w-6 h-6 "
                    src="https://img.icons8.com/material-rounded/24/facebook-like--v1.png"
                    alt="facebook-like--v1"
                  />
                  Like
                </button>
                <button className="px-2 md:px-4 bg-gray-200 text-black rounded-full md:mx-2 flex  items-center text-sm">
                  <svg
                    className="mx-2 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 4 4 L 4 44 A 2.0002 2.0002 0 0 0 6 46 L 44 46 A 2.0002 2.0002 0 0 0 46 44 L 46 32 L 42 32 L 42 42 L 8 42 L 8 4 L 4 4 z M 35.978516 4.9804688 A 2.0002 2.0002 0 0 0 34.585938 8.4140625 L 37.171875 11 L 36.048828 11 C 25.976906 10.74934 19.618605 12.315463 15.953125 16.726562 C 12.287645 21.137662 11.831327 27.512697 12 36.039062 A 2.0003814 2.0003814 0 1 0 16 35.960938 C 15.835673 27.654299 16.533777 22.2844 19.029297 19.28125 C 21.524817 16.2781 26.334094 14.76066 35.951172 15 L 35.974609 15 L 37.171875 15 L 34.585938 17.585938 A 2.0002 2.0002 0 1 0 37.414062 20.414062 L 43.236328 14.591797 A 2.0002 2.0002 0 0 0 43.619141 14.208984 L 44.828125 13 L 43.619141 11.791016 A 2.0002 2.0002 0 0 0 43.228516 11.400391 L 37.414062 5.5859375 A 2.0002 2.0002 0 0 0 35.978516 4.9804688 z"></path>
                  </svg>
                  Share
                </button>
                <button className="px-2 md:px-4 bg-gray-200 text-black rounded-full md:mx-2 flex items-center text-sm">
                  <img
                    className="mx-2 w-6 h-6"
                    src="https://img.icons8.com/sf-regular/48/download.png"
                    alt="download"
                  />
                  Download
                </button>
              </div>
            </div>
          </div>
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
