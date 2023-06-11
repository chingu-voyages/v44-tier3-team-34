import { useState } from "react";
import { useDeleteCommentMutation } from "../slices/postsApiSlice";
import { useSelector } from "react-redux";
import timeSinceDate from "../utilities/timeSinceDate";
import { FiEdit, AiFillDelete } from "react-icons/all";
import PropTypes from 'prop-types';
import placeholder from '../assets/placeholder.png';

const Comment = ({ comment, postId, isPostAuthor }) => { 
  const [deleteClicked, setDeleteClicked] = useState(false); // for animation
  const { user } = useSelector((state) => state.auth);
  const hasDeleteAuthority = user.profile === comment.author._id || isPostAuthor;

  const { durationInMinutes, duration } = timeSinceDate(comment.createdAt);

  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = () => {
    setDeleteClicked(true);
    deleteComment({ postId, commentId: comment._id });
  };

  return (
    <div className="p-2 mx-4 border-t-2 border-light-green bg-[#FAF9F6]">
      <div className="flex justify-between">
        <div className="flex gap-2">
            <div className="rounded-full">
                <img src={placeholder} alt={comment?.author?.name || "profile picture"} className="rounded-full h-10 w-10 object-cover"/>
            </div>
            <div className="flex gap-2 items-center">
              <span>{comment?.author?.name}</span>
              <span className="text-sm text-gray-500">
                {durationInMinutes > 0 ? `${duration} ago` : "Just Commented"}
              </span>
            </div>
        </div>
        {hasDeleteAuthority && <ul className="flex gap-2">
            <li><FiEdit/></li>
            <li>
              <AiFillDelete 
                className={`cursor-pointer hover:text-red-500 ${deleteClicked ? "animate-ping-once" : ""}`}
                onClick={handleDeleteComment}
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
  isPostAuthor: PropTypes.bool,
};

export default Comment;