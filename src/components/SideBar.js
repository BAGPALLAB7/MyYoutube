import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sidebarStatus = useSelector((store) => store.appConfig);
  //console.log(("sidebarStatus",sidebarStatus.sideBar));
  return (
    <>
    {sidebarStatus.sideBar &&
    <div className=" w-60 p-8 shadow-lg h-auto fixed bg-white mt-16 z-0 pt-6">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="pt-4 font-bold text-md">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="pt-4 font-bold text-md">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>}
    </>
  );
};

export default SideBar;
