import React from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router';
import Header from './Header';
import { useSelector } from 'react-redux';

const Body = () => {
  const smallDevice = useSelector((store) => store.appConfig.SideBar);
  
  return (
    <div className='flex'>
    <Header/>
    { !smallDevice ? <SideBar/> : <></>}
    
    <Outlet/>
    </div>
  )
}

export default Body;