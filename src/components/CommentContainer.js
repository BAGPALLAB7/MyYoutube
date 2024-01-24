import React from 'react';
import { commentsData } from '../utils/helper';
import CommentList from './CommentList';

const CommentContainer = () => {
  return (
    <div className='p-2'>
    <h1 className=' font-bold text-xl p-2 rounded-xl'>Comments: </h1>
    <CommentList comments={commentsData}/>
      
    </div>
  )
}

export default CommentContainer;
