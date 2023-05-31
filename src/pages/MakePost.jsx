import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { useCreatePostMutation, useGetAllPostsQuery } from '../slices/postsApiSlice';
import { setPosts } from '../slices/postsSlice';

function MakePost() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userToken } = useSelector((state) => state.auth);

    const [createPost, { isLoading }] = useCreatePostMutation();

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log({ title, text, category })
        try {
          const res = await createPost({ title, text, category }).unwrap(); // unwrap() will return the actual data from the promise
          const { data: posts, error: fetchError, isLoading: isPostsLoading } = useGetAllPostsQuery();
          console.log({ posts, fetchError, isPostsLoading })
          // dispatch(setPosts({ ...res })); 
          // const posts = await getAllPosts().unwrap();
          navigate('/home');
      } catch (err) {
          console.log({err})
          setError(err?.data?.error || "there was a problem Changing password");
      }
    }

    return (
        <>
            <Header />
            <h1>MakePost</h1>
            <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-9">  
                <input 
                  onChange={(e) => setTitle(e.target.value)} 
                  className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
                  type="text" 
                  id="title" 
                  value={title} 
                  placeholder="Title"
                  required
                />
                <textarea 
                  onChange={(e) => setText(e.target.value)} 
                  className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
                  id="text" 
                  value={text} 
                  placeholder="Write your post..."
                  required
                />
                <select 
                  onChange={(e) => setCategory(e.target.value)} id="category" name="category"
                  className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
                  required
                >
                    <option value="">Choose Category</option>
                    <option value="Meet Ups">Meet Ups</option>
                    <option value="Training">Training</option>
                    <option value="Dog Walks and Hikes">Dog Walks and Hikes</option>
                    <option value="Photo Album">Photo Album</option>
                    <option value="Other">Other</option>
                </select>
                <button type="submit" disabled={isLoading} className="border rounded py-1.5 pl-1.5 border-light-green bg-light-green text-dark-blue text-lg">
                  {isLoading ? 'Loading...' : 'Make Post'}   
                </button>
            </form>
        </>
    )
}

export default MakePost;