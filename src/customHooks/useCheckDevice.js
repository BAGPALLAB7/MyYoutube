import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSmallDevice } from '../utils/Store/configSlice';

const useCheckDevice = () => {
    const dispatch = useDispatch();
    if (document.body.clientWidth <= 425) {
        dispatch(updateSmallDevice(true))
    }
    else{
        dispatch(updateSmallDevice(false))
    }
  
}

export default useCheckDevice
