import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/Store/configSlice";
import { useSearchParams } from "react-router-dom";

const WatchContainer = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  console.log("watch param", param.get("v"));
  const videoId = param.get("v");

  useEffect(() => {
    dispatch(closeSideBar());
  }, []);
  return (
    <div className="p-5 ">
      <iframe className="rounded-2xl"
        width="1000"
        height="515"
        src={"https://www.youtube.com/embed/"+videoId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchContainer;
