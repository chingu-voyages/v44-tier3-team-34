import { useGetAllPostsQuery } from '../slices/postsApiSlice';

import Post from "./Post";

const Posts = () => {
// the following is how we get data from the store it refetches if posts are updated
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
        <div key={post._id} className="">
            {post.author && <Post post={post} />}
        </div>
    ))
  } else if (isError) {
    if (error.data?.err === 'jwt expired') {
      content = <div className="text-red-500 text-center p-4">Login token expired. Please login again.</div>
    } else {
      content = <div className="text-red-500 text-center p-4">Error fetching posts. Please try again later</div>
    }
  }
    return (
      <>
        {content}
      </>
    )
}

export default Posts