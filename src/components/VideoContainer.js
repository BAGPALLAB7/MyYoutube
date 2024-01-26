import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constaint";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../utils/Store/mainVideoSlice";
import { closeBar } from "../utils/Store/suggestionBarSlice";
import Video from "./Video";

const VideoContainer = () => {
  //const [videos, setVideos] = useState([])
  const dispatch = useDispatch();
  const allStoredVideos = useSelector((store) => store.allVideos.homeVideos);
  //console.log("all stored videos from", allStoredVideos);
  const queryVideos = useSelector((store) => store.allVideos.queryVideos);
  //console.log("all query videos from video container", queryVideos);

  const getYoutubeVideos = async () => {
    const fetchData = await fetch(
      YOUTUBE_API + process.env.REACT_APP_GOOGLE_API
    );
    const jsonData = await fetchData.json();
    //console.log("popolar vide data single", jsonData.items[0]);
    dispatch(closeBar());
    dispatch(loadVideos(jsonData.items));
    //  setVideos(jsonData.items);
  };
  useEffect(() => {
     getYoutubeVideos();
  }, []);
  useEffect(()=>{
console.log("query videos updated");
  },[queryVideos])
  return (
    <div className="w-screen md:w-auto bg-yellow-200">
      {(queryVideos || allStoredVideos) && queryVideos ? 
        <Video videos={queryVideos} />
       : 
        <Video videos={allStoredVideos} />
      }
    </div>
  );
};

export default VideoContainer;
