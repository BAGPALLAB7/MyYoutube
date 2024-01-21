import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/Store/configSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constaint";
import ShowYoutubeSuggestion from "./ShowYoutubeSuggestion";
import { addSuggestionCache } from "../utils/Store/searchSlice";

const Header = () => {
  const cacheData = useSelector((store)=> store.searchCache);
  const [searchInput, setSearchInput] = useState('');
  const [sugggestionData, setSuggestionData] = useState('');
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);

  const input = useRef();
  const showSuggestion = () => {
    setSearchInput(input.current.value);
  };

  const callSuggestionAPI = async () => {
if (cacheData[searchInput]) {
  setSuggestionData(cacheData[searchInput]);
}
else{
  const suggestion = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchInput);
    const jsonData = await suggestion.json();

    if (jsonData) {
      setSuggestionData(jsonData[1])
    }
    dispatch(addSuggestionCache({[searchInput] :jsonData[1]}));
}
    
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      callSuggestionAPI();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const dispatch = useDispatch();
  const toggleShow = () => {
    dispatch(toggleSideBar());
  };

  //console.log("sugggestionData", sugggestionData);
  return (
    <>
    <div className="grid grid-flow-col py-3 content-center items-center fixed w-screen bg-white z-10">
    
    {sugggestionData && isShowSuggestion ? <ShowYoutubeSuggestion Data={sugggestionData} /> : <></>}
      <div className="flex col-span-1 items-center">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/hamburger-menu-icon.png"
          alt="menu-logo"
          className="w-6 h-6 mx-4 cursor-pointer"
          onClick={toggleShow}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="youtube_logo"
          className="h-8 "
        />
      </div>
      <div className="flex  col-span-7 mx-auto w-full  justify-center items-center">
        <div className="w-full flex justify-center">
          <input
            ref={input}
            type="text"
            className="border-slate-300 border w-4/6 py-2 pl-5 rounded-l-full"
            onChange={showSuggestion}
            onFocus={() => setIsShowSuggestion(true)}
            onBlur={()=> setIsShowSuggestion(false)}
          />
          <button className="rounded-r-full bg-slate-200 border-slate-200 border px-4 py-2">
            🔍
          </button>
        </div>
      </div>
      <div className="col-span-4 flex justify-end mr-8">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-logo"
          className="w-8 h-8"
        />
      </div>
    </div>
    </>
  );
};

export default Header;
