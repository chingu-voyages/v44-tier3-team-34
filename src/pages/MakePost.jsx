import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validateToken from '../utilities/validateToken';
import { logout } from '../slices/authSlice';
import Header from '../components/Header'
import { useCreatePostMutation } from '../slices/postsApiSlice';

function MakePost() {
    const isTokenCurrent = validateToken();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!user || !isTokenCurrent) {
        dispatch(logout());
        navigate('/');
      }
    }, [navigate, dispatch, user, isTokenCurrent]);

    // useCreatePostMutation() returns an array with our createPost function that does a POST request, and loading and error states
    const [createPost, { isLoading, isError }] = useCreatePostMutation(); 

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          await createPost({ title, text, category }).unwrap(); // unwrap() will return the actual data from the promise
          navigate('/home');
      } catch (err) {
          console.log({err})
      }
    }

    return (
      <div className='bg-page-color min-h-screen pb-8'>
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
                {isError && <p className="text-red-500">Could not submit. Please try again later.</p>}
            </form>
        </div>
    )
}

export default MakePost;