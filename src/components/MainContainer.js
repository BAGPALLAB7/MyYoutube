import React, { useEffect } from "react";
import ButtonLists from "./ButtonLists";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { showSideBar } from "../utils/Store/configSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSideBar());
  }, []);
  const sideBarStatus = useSelector((store) => store.appConfig);
  return (
    <div className="w-full">
      {sideBarStatus.sideBar ? (
        <div className=" pt-20 ml-60">
          <div className=" z-50 mx-3 over">
            <ButtonLists />
          </div>
          <div>
            <VideoContainer />
          </div>
        </div>
      ) : (
        <div className="w-full pt-24 ">
          <ButtonLists />
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
