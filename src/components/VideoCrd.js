import React from "react";

const VideoCrd = ({ video }) => {
  const { snippet } = video;
  let { thumbnails, title, channelTitle, publishedAt } = snippet;
  if (title.length > 50) {
    title = title.substring(0, 50) + "...";
  }
  if (channelTitle.length > 20) {
    channelTitle = channelTitle.substring(0, 20) + "...";
  }

  return (
    <div className="w-64 m-1 rounded-lg shadow-lg p-1  border mb-5 h-60">
      <img
        className="rounded-md h-32 w-full"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <p className="font-bold text-sm p-1">{title}</p>
      <p className="text-sm pt-2 px-1">{channelTitle}</p>
      <p className="text-xs pb-2 px-1">
      
        {publishedAt}
      </p>
    </div>
  );
};

export default VideoCrd;
