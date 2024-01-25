import { useDispatch } from "react-redux";
import { loadVideos } from "../utils/Store/mainVideoSlice";
import { YOUTUBE_SEARCH_KEYWORD } from "../utils/constaint";

const fetchVideo = async (button) => {
  
    const data = await fetch(
      YOUTUBE_SEARCH_KEYWORD + button + "&key=" + process.env.REACT_APP_GOOGLE_API
    );
    const jsonData = await data.json();
    return jsonData;
  };

const useLoadVideo = (query) => {
  const dispatch = useDispatch();
  const fetchedData = fetchVideo(query);
  dispatch(loadVideos(fetchedData));
};

export default useLoadVideo;
