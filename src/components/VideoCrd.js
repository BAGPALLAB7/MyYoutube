import React from "react";
import { useSelector } from "react-redux";

const VideoCrd = ({ video }) => {
  const { snippet } = video;
  let { thumbnails, title, channelTitle, publishedAt } = snippet;
  if (title.length > 40) {
    title = title.substring(0, 40) + "...";
  }
  if (channelTitle.length > 20) {
    channelTitle = channelTitle.substring(0, 20) + "...";
  }
  const smallDevice = useSelector((store) => store.appConfig.smallDevice);

  return (
    <>
      {smallDevice ? (
        <div className=" w-screen m-0 p-0">
          <div className="w-full rounded-lg shadow-lg p-2 border mb-5 h-80 object-fill">
            <img
              className="w-full rounded-md h-44  "
              src={thumbnails?.medium?.url}
              alt="thumbnail"
            />
            <p className="font-bold text-xl p-1">{title}</p>
            <p className="text-lg pt-2 px-1">{channelTitle}</p>
            <p className="text-xs pb-2 px-1">{publishedAt}</p>
          </div>
        </div>
      ) : (
        <div className="w-64 m-1 rounded-lg shadow-lg p-1  border mb-5 h-60">
          <img
            className="rounded-md h-32 w-full"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <p className="font-bold text-sm p-1">{title}</p>
          <p className="text-sm pt-2 px-1">{channelTitle}</p>
          <p className="text-xs pb-2 px-1">{publishedAt}</p>
        </div>
      )}
    </>
  );
};

export default VideoCrd;
