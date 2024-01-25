import React from 'react'
import { loadQueryVideos } from '../utils/Store/mainVideoSlice';
import { useDispatch } from 'react-redux';
import { YOUTUBE_SEARCH_KEYWORD } from '../utils/constaint';

const ButtonComponent = ({button}) => {
    const dispatch= useDispatch();
    const fetchVideo = async (button) => {
  
        const data = await fetch(
          YOUTUBE_SEARCH_KEYWORD + button + "&key=" + process.env.REACT_APP_GOOGLE_API
        );
        const jsonData = await data.json();
        if (jsonData.items) {
          dispatch(loadQueryVideos(jsonData.items));
        }
       
      };

      const handleClick = () => {
        console.log("button clicked for ",button);
        //console.log("home clicked");
        fetchVideo(button);
      }
    
    
  return (
    <div>
      <button className="px-4 py-1 rounded-md bg-gray-200 text-gray-800 mx-2" onClick={()=>handleClick(button)}>
          {button}
        </button>
    </div>
  )
}

export default ButtonComponent;
