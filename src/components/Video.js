import React from 'react'
import { Link } from 'react-router-dom';
import VideoCrd from './VideoCrd';

const Video = ({videos}) => {
  //console.log("videos from Video",videos);
  return (
    <div>
    {videos && 
    <div className="flex flex-wrap w-full px-2 justify-around m-1">
      {
        videos.map((video) => (
          <div >
            <Link
              to={
                "/watch?v=" +
                (video?.id?.videoId ? video?.id?.videoId : video?.id)
              }
            >
              <VideoCrd video={video} key={video?.id?.videoId || video?.id}/>
            </Link>
          </div>
        ))}
    </div>}
    </div>
  )
}

export default Video;