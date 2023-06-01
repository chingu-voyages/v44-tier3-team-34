import { useGetAllPostsQuery } from '../slices/postsApiSlice';

import Post from "./Post";

const Posts = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
      } = useGetAllPostsQuery()

let content;

if (isLoading) {
    content = <div>Loading...</div>
  } else if (isSuccess) {
    content = posts.map((post) => (
        <div key={post._id} className="border-b-4">
            <Post post={post}/>
        </div>
    ))
  } else if (isError) {
    content = <div>{error}</div>
  }
    return(
        <div>
            <div>Posts</div>
            {content}
        </div>
    )
}

export default Posts