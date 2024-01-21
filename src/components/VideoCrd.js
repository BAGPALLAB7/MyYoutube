import React, { useState } from "react";
import { useSelector } from "react-redux";

const VideoCrd = ({ video }) => {
  const sideBarStatus = useSelector((store) => store.appConfig);
  const { snippet, statistics } = video;
  let { thumbnails, title, channelTitle, publishedAt } = snippet;
  if (title.length > 50) {
    title = title.substring(0, 50) + "...";
  }
  
  return (
    <>{
        sideBarStatus.sideBar ? <div className="w-72 m-1 rounded-lg shadow-lg p-1  border mb-5"> 
      <img
        className="rounded-md"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <p className="font-bold font-xs p-2">{title}</p>
      <p className="text-sm pt-2 px-1">{channelTitle}</p>
      <p className="text-sm pb-2 px-1">
        {" "}
        {statistics.viewCount + "." + publishedAt}
      </p>
    </div>
    :
    <div className="w-64 mx-auto m-1 rounded-lg shadow-lg p-1  border mb-5">
      <img
        className="rounded-md"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <p className="font-bold font-xs p-2">{title}</p>
      <p className="text-sm pt-2 px-1">{channelTitle}</p>
      <p className="text-sm pb-2 px-1">
        {" "}
        {statistics.viewCount + "." + publishedAt}
      </p>
    </div>
    }</>

    
  );
};

export default VideoCrd;
