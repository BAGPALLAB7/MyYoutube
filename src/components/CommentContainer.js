import React from "react";
import { commentsData } from "../utils/helper";
import CommentList from "./CommentList";

const CommentContainer = () => {
  return (
    <div className="w-full p-1 md:p-2 ">
      <h1 className=" font-bold text-sm md:text-xl p-2 rounded-xl ">
        Comments:
      </h1>
      <div className="w-full overflow-x-scroll">
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentContainer;
