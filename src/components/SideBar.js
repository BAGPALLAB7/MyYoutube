import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadQueryVideos } from "../utils/Store/mainVideoSlice";

const SideBar = () => {
  const sidebarStatus = useSelector((store) => store.appConfig);
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.allVideos.homeVideos);
  const queryVideo = useSelector((store) => store.allVideos.queryVideos);
  const handleClick = () => {
    console.log("home clicked");
    console.log("fetched videos form home", videos[0]);
    dispatch(loadQueryVideos(videos));
    console.log("query videos after update", queryVideo[0]);
  };

  //console.log(("sidebarStatus",sidebarStatus.sideBar));
  return (
    <>
      {sidebarStatus.sideBar && (
        <div className=" w-60 p-8 shadow-lg h-auto fixed bg-white mt-16 z-0 pt-6">
          <ul>
            <li className="py-1 cursor-pointer flex items-center" onClick={handleClick}><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
<path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
</svg>
              Home
            </li>
            <li
              className="py-1 cursor-pointer flex items-center"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                className="mr-2"
              >
                <circle cx="24" cy="24" r="6" fill="#f44336"></circle>
                <path
                  fill="#f44336"
                  d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"
                ></path>
                <path
                  fill="#f44336"
                  d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"
                ></path>
                <g>
                  <path
                    fill="#f44336"
                    d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"
                  ></path>
                  <path
                    fill="#f44336"
                    d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"
                  ></path>
                </g>
              </svg>
              Live
            </li>
            <li className="py-1 cursor-pointer flex items-center"> <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
<path d="M 16.75 1 C 16.02 1 15.329609 1.185625 14.724609 1.515625 L 5.2753906 6.4902344 C 3.9253906 7.2002344 3 8.62 3 10.25 C 3 12.345 4.520625 14.085547 6.515625 14.435547 L 5.3359375 14.955078 C 3.9509375 15.660078 3 17.095 3 18.75 C 3 21.095 4.905 23 7.25 23 C 7.985 23 8.6753906 22.814375 9.2753906 22.484375 L 18.589844 17.580078 C 20.014844 16.895078 21 15.435 21 13.75 C 21 11.655 19.479375 9.9144531 17.484375 9.5644531 L 18.664062 9.0449219 C 20.049063 8.3399219 21 6.905 21 5.25 C 21 2.905 19.095 1 16.75 1 z M 10.501953 9.3828125 C 10.587953 9.3828125 10.675812 9.404125 10.757812 9.453125 L 14.285156 11.570312 C 14.609156 11.764313 14.609156 12.233734 14.285156 12.427734 L 10.757812 14.544922 C 10.675813 14.594922 10.587953 14.617187 10.501953 14.617188 C 10.240953 14.617188 10 14.410188 10 14.117188 L 10 9.8828125 C 10 9.5908125 10.240953 9.3828125 10.501953 9.3828125 z"></path>
</svg>Shorts</li>
            <li className="py-1 cursor-pointer flex items-center"><img src="https://cdn-icons-png.flaticon.com/512/6398/6398977.png" alt="subscription-logo" className="w-7 h-7 mr-2"/>Subsriptions</li>
            <li className="py-1 cursor-pointer flex items-center"><svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M37,4H13c-4.962,0-9,4.037-9,9v24c0,4.963,4.038,9,9,9h24c4.962,0,9-4.037,9-9V13C46,8.037,41.962,4,37,4z M35,27v4v0.021	h-0.002C34.986,33.768,32.749,36,30,36h-0.5c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705	C26.195,30.38,27.787,29,29.643,29H31c1.103,0,2-0.897,2-2v-9.795l-12,2.25V30v4c0,2.757-2.243,5-5,5h-0.5	c-0.987,0-1.933-0.42-2.596-1.152c-0.662-0.731-0.985-1.718-0.887-2.705C12.195,33.38,13.787,32,15.643,32H17c1.103,0,2-0.897,2-2	V15.353c0-0.963,0.687-1.79,1.633-1.966l12.591-2.36c0.439-0.083,0.891,0.033,1.234,0.319C34.803,11.632,35,12.053,35,12.5V27z"></path>
</svg>YouTube Music</li>
          </ul>
          <h1 className="pt-4 font-bold text-md">You › </h1>
          <ul>
            <li className="py-1 cursor-pointer flex items-center">Your Channel</li>
            <li className="py-1 cursor-pointer flex items-center">History</li>
            <li className="py-1 cursor-pointer flex items-center">Your Video</li>
            <li className="py-1 cursor-pointer flex items-center">Watch later</li>
            <li className="py-1 cursor-pointer flex items-center">Downloads</li>
            <li className="py-1 cursor-pointer flex items-center">Your clips</li>
          </ul>
          <h1 className="pt-4 font-bold text-md">Watch Later</h1>
          <ul>
            <li className="py-1  cursor-pointer flex items-center">Music</li>
            <li className="py-1 cursor-pointer flex items-center">Sports</li>
            <li className="py-1 cursor-pointer flex items-center">Gaming</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideBar;
