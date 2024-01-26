import React, { useEffect } from "react";
import { YOUTUBE_SEARCH_KEYWORD } from "../utils/constaint";
import { useDispatch, useSelector } from "react-redux";
import { loadQueryVideos } from "../utils/Store/mainVideoSlice";
import {
  closeBar,
  setSearchSuggestion,
} from "../utils/Store/suggestionBarSlice";

const ShowSuggestion = ({ Data }) => {
  const dispatch = useDispatch();

  const show = useSelector((store) => store.suggestionBar.barStatus);
  const showSearchBar = useSelector((store) => store.appConfig.mobileSearchBar);
  const smallDevice = useSelector((store) => store.appConfig.smallDevice);

  //console.log("clicked", clicked);
  //console.log("show", show);
  const searchSuggestion = useSelector(
    (store) => store.suggestionBar.searchSuggestion
  );
  //console.log("searchSuggestion", searchSuggestion);
  const fetchRelatedVideos = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_KEYWORD +
        searchSuggestion +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API
    );
    const jsondata = await data.json();
    dispatch(closeBar());
    dispatch(loadQueryVideos(jsondata.items));
    //console.log(jsondata.items[0]);
  };
  useEffect(() => {
    searchSuggestion && fetchRelatedVideos();
    //console.log("searvideo data", searchSuggestion);
  }, [searchSuggestion]);
  const ShowListOfResults = ({ d }) => {
    return (
      <ul className="p-0" key={d}>
        <li
          className="hover:bg-gray-200 p-1 rounded-md"
          onClick={() => dispatch(setSearchSuggestion(d))}
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
    <>
      {show ? (
        smallDevice ? (
           showSearchBar && <div
            className="fixed bg-white top-14  p-3 border rounded-lg w-8/12 left-[15%]"
          >
            {Data.map((item) => (
              <ShowListOfResults d={item} />
            ))}
          </div>
        ) : (
          <div
            className="fixed bg-white top-14 left-[27%] p-3 border rounded-lg w-4/12"
          >
            {Data.map((item) => (
              <ShowListOfResults d={item} />
            ))}
          </div>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default ShowSuggestion;
