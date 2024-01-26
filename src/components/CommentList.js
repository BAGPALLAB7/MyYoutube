import CommentMessage from "./CommentMessage";

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="w-screen">
      <CommentMessage data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
