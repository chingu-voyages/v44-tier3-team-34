import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDeletePostMutation } from '../slices/postsApiSlice';
import { FiEdit, AiFillDelete, AiFillLike, BiCommentDetail, FaShareSquare } from "react-icons/all";
import PropTypes from 'prop-types'
import CommentForm from './CommentForm';
import Comment from './Comment';
import timeSinceDate from '../utilities/timeSinceDate';

const Post = ({post: {_id, author, createdAt, title, text, reactions, comments}}) => {
    const [deletePost, { isLoading, isError }] = useDeletePostMutation();
    const [showCommentForm, setShowCommentForm] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const { user } = useSelector((state) => state.auth);
    const isPostAuthor = user.profile === author._id;

    const {durationInMinutes, duration} = timeSinceDate(createdAt);

    if(isError){
        console.log("isloading", isLoading, "isError", isError)
    }
    return(
        <div className="bg-white my-4 flex flex-col py-2 shadow-md border-t sm:m-6 rounded-md">
            <div className="px-2 flex justify-between">
                <div className="flex gap-2">
                    <div className="rounded-full">
                        <img src="src/assets/placeholder.png" alt={author.name} className="rounded-full h-14 w-14 object-cover"/>
                    </div>
                    <ul>
                        <li className="font-semibold">{author.name}</li>
                        {durationInMinutes > 0 ? 
                        <li>Post created: {duration} ago</li>
                        : 
                        <li>Just Posted</li> 
                        }
                    </ul>
                </div>
                {isPostAuthor && <ul className="flex gap-2">
                    <li><FiEdit/></li>
                    <li>
                        <AiFillDelete
                            className="cursor-pointer hover:text-red-500"
                            onClick={() => deletePost(_id)}
                        />
                    </li>
                </ul>}
            </div>
            <h5 className="px-2 font-medium text-center">{title}</h5>
            <p className="px-2 text-center">{text}</p>
            <div className='flex justify-center'>
                <img className='h-60 w-60' src="src/assets/dogplaceholder.jpg" alt={title}/>
            </div>
            <div className="flex justify-between px-2" >
                <div className="flex gap-1">{reactions.length}<span>Likes</span></div>
                <div 
                    onClick={() => setShowComments(!showComments)} 
                    className="flex gap-1 cursor-pointer hover:text-light-green"
                >
                    {comments.length}<span>Comments</span>
                </div>
            </div>
            <ul className="flex justify-between px-2 pb-4">
                <li><AiFillLike/></li>
                <li 
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    className="cursor-pointer hover:text-light-green"
                ><BiCommentDetail/></li>
                <li><FaShareSquare/></li>
            </ul>
            {showCommentForm && 
                <CommentForm 
                    postId={_id} 
                    hideCommentForm={() => setShowCommentForm(false)} 
                    displayComments={() => setShowComments(true)}
                />}
            {showComments && comments.map((comment) => (
                <div key={comment._id} className="">
                    <Comment comment={comment} postId={_id} />
                </div>
            ))}
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      author: PropTypes.object.isRequired,
    //   profilePhoto: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    //   postPhoto: PropTypes.string.isRequired,
      reactions: PropTypes.array,
      comments: PropTypes.array,
    }).isRequired,
  };

export default Post