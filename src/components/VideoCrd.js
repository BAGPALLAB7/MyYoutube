import React from "react";

const VideoCrd = ({ video }) => {
  const { snippet } = video;
  let { thumbnails, title, channelTitle, publishedAt } = snippet;
  if (title.length > 40) {
    title = title.substring(0, 40) + "...";
  }

  return (
    <div className="w-64 m-1 rounded-lg shadow-lg p-1  border mb-5 h-auto">
      <img
        className="rounded-md"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <p className="font-bold font-xs p-2">{title}</p>
      <p className="text-sm pt-2 px-1">{channelTitle}</p>
      <p className="text-sm pb-2 px-1">
      
        {publishedAt}
      </p>
    </div>
  );
};

export default VideoCrd;
