import React from 'react'
import ButtonLists from './ButtonLists';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const sideBarStatus = useSelector((store) => store.appConfig);
  return (
    <>{
      sideBarStatus.sideBar ? <div className='w-full pt-24 ml-60 '>
      <ButtonLists/>
      <VideoContainer/>

    </div>
    :
    <div className='w-full pt-24 '>
      <ButtonLists/>
      <VideoContainer/>

    </div>
    }</>
    
  )
}

export default MainContainer;
