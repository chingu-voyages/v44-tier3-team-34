import { useDeletePostMutation } from '../slices/postsApiSlice';
import { FiEdit, AiFillDelete, AiFillLike, BiCommentDetail, FaShareSquare } from "react-icons/all";
import PropTypes from 'prop-types'

const Post = ({post: {_id, author, createdAt, title, text, reactions, comments}}) => {
    const [deletePost, { isLoading, isError }] = useDeletePostMutation();
    let duration;
    const createdAtDate = new Date(createdAt);
    const currentTime = new Date();
    const durationInMinutes = Math.floor((currentTime - createdAtDate) / (1000 * 60));
    if (durationInMinutes < 60) {
      duration = `${durationInMinutes} min`;
    } else {
      const durationInHours = Math.floor(durationInMinutes / 60);
      duration = `${durationInHours} hours`;
    }
    if(isError){
        console.log("isloading", isLoading, "isError", isError)
    }
    return(
        <div className="bg-white my-4 flex flex-col py-2">
            <div className="px-2 flex justify-between">
                <div className="flex gap-2">
                    <div className="rounded-full">
                        <img src="/profilePhotoUrl" alt={author.name} className="rounded-full h-14 w-14 object-cover"/>
                    </div>
                    <ul>
                        <li>{author.name}</li>
                        <li>{duration}</li>
                    </ul>
                </div>
                <ul className="flex gap-2">
                    <li><FiEdit/></li>
                    <li onClick={() => deletePost(_id)}><AiFillDelete/></li>
                </ul>
            </div>
            <h5 className="px-2 font-medium">{title}</h5>
            <p className="px-2">{text}</p>
            <div>
                <img src="/postPhotoUrl" alt={title}/>
            </div>
            <div className="flex justify-between px-2" >
                <div>{reactions.length}<span>Likes</span></div>
                <div>{comments.length}<span>Comments</span></div>
            </div>
            <ul className="flex justify-between px-2">
                <li><AiFillLike/></li>
                <li><BiCommentDetail/></li>
                <li><FaShareSquare/></li>
            </ul>
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