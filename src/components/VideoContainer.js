import React, { useEffect, useState } from 'react'
import VideoCrd from './VideoCrd';
import { YOUTUBE_API } from '../utils/constaint';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  const getYoutubeVideos = async () => {
 const fetchData = await fetch(YOUTUBE_API+process.env.REACT_APP_GOOGLE_API);
 const jsonData =await fetchData.json();
 setVideos(jsonData.items);
 console.log(jsonData.items[0]);
 
  }
  useEffect(() => {
    getYoutubeVideos();
  },[])
  return (
    <div className='flex flex-wrap'>
    {videos && videos.map((video) => <Link to={"/watch?v="+video.id}><VideoCrd video={video}/></Link> )
    
    }
    </div>
  )
}

export default VideoContainer;