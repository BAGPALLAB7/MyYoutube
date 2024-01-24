import React, { useEffect } from 'react'
import ButtonLists from './ButtonLists';
import VideoContainer from './VideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { showSideBar } from '../utils/Store/configSlice';

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    
  dispatch(showSideBar());
  },[]);
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
