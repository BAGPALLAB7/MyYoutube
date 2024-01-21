import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/Store/configSlice";

const Header = () => {
  const dispatch = useDispatch()
  const toggleShow = () => {
    dispatch(toggleSideBar())
  }
  return (
    <div className="grid grid-flow-col py-3 shadow-lg content-center items-center">
      <div className="flex col-span-1 items-center" >
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
      <div className="flex col-span-7 justify-center items-center ">
        <input type="text" className="border-slate-300 border w-4/6 py-2 rounded-l-full" />
        <button className="rounded-r-full bg-slate-200 border-slate-200 border px-4 py-2">🔍</button>
      </div>
      <div className="col-span-4 flex justify-end mr-8">
        <img
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-logo"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
};

export default Header;
