import { useDeleteCommentMutation } from "../slices/postsApiSlice";
import { useSelector } from "react-redux";
import timeSinceDate from "../utilities/timeSinceDate";
import { FiEdit, AiFillDelete } from "react-icons/all";
import PropTypes from 'prop-types';

const Comment = ({ comment, postId }) => { 
  const { user } = useSelector((state) => state.auth);
  const isCommentAuthor = user.profile === comment.author._id;

  const { durationInMinutes, duration } = timeSinceDate(comment.createdAt);

  const [deleteComment] = useDeleteCommentMutation();

  return (
    <div className="p-2 mx-4 border-t-2 border-light-green bg-[#FAF9F6]">
      <div className="flex justify-between">
        <div className="flex gap-2">
            <div className="rounded-full">
                <img src="src/assets/placeholder.png" alt={comment?.author?.name || "profile picture"} className="rounded-full h-10 w-10 object-cover"/>
            </div>
            <div className="flex gap-2 items-center">
              <span>{comment?.author?.name}</span>
              <span className="text-sm text-gray-500">
                {durationInMinutes > 0 ? `${duration} ago` : "Just Commented"}
              </span>
            </div>
        </div>
        {isCommentAuthor && <ul className="flex gap-2">
            <li><FiEdit/></li>
            <li>
              <AiFillDelete 
                className="cursor-pointer hover:text-red-500"
                onClick={() => deleteComment({postId, commentId: comment._id})}
              />
            </li>
        </ul>}
      </div>
      <p>{comment.text}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object, 
  postId: PropTypes.string,
};

export default Comment;