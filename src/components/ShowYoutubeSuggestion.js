import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_KEYWORD } from "../utils/constaint";
import { useDispatch } from "react-redux";
import { loadVideos } from "../utils/Store/mainVideoSlice";

const ShowSuggestion = ({ Data }) => {
  const dispatch = useDispatch();
  const [searchSuggestion, setSearchSuggestion] = useState(null);
  console.log("searchSuggestion", searchSuggestion);
  const fetchRelatedVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_KEYWORD +
        searchSuggestion +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API
    );
    const jsondata = await data.json();
    dispatch(loadVideos(jsondata.items));
    console.log(jsondata);
  };
  useEffect(() => {
    
    searchSuggestion && fetchRelatedVideos();
    console.log("searvideo data", searchSuggestion);
  }, [searchSuggestion]);
  const ShowListOfResults = ({ d }) => {
    return (
      <ul className="p-0" key={d}>
        <li
          className="hover:bg-gray-200 p-1 rounded-md"
          onClick={() => setSearchSuggestion(d)}
        >
          {d}
        </li>
      </ul>
    );
  };
  if (Data.length == 0) {
    return;
  }
  return (
    <div className="fixed bg-white top-14 left-[27%] p-3 border rounded-lg w-4/12">
      {Data.map((item) => (
        <ShowListOfResults d={item} />
      ))}
    </div>
  );
};

export default ShowSuggestion;
