import React from "react";
import { posts } from "../utilities/constants";
import Post from "./Post";

const Posts = () => {
    console.log("posts: ",posts)
    return(
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Post post={post}/>
                </div>
            ))}
        </div>
    )
}

export default Posts