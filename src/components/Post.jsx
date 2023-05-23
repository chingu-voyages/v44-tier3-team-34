import React from "react";
import { FiEdit, AiFillDelete, AiFillLike, BiCommentDetail, FaShareSquare } from "react-icons/all";

const Post = ({post: {id, name, profilePhoto, time, description, postPhoto, likes, comments}}) => {
    console.log("Post: ", id, name)
    return(
        <div className="bg-white my-4 flex flex-col">
            <div className="px-2">
                <div className="flex justify-between">
                    <div>
                        <img src={profilePhoto} alt={name}/>
                    </div>
                    <ul>
                        <li>{name}</li>
                        <li>{time}</li>
                    </ul>
                </div>
                <ul>
                    <li><FiEdit/></li>
                    <li><AiFillDelete/></li>
                </ul>
            </div>
            <p className="px-2">{description}</p>
            <div>
                <img src={postPhoto} alt={name}/>
            </div>
            <div className="flex justify-between px-2" >
                <div>{likes}<span>Likes</span></div>
                <div>{comments}<span>Comments</span></div>
            </div>
            <ul className="flex justify-between px-2">
                <li><AiFillLike/></li>
                <li><BiCommentDetail/></li>
                <li><FaShareSquare/></li>
            </ul>
        </div>
    )
}

export default Post