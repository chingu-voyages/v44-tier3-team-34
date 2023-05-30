import { posts } from "../utilities/constants";
import Post from "./Post";

const Posts = () => {
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