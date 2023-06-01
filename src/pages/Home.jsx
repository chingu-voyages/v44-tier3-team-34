import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; // to dispatch actions and select data from the store
import { useGetAllPostsQuery } from '../slices/postsApiSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Posts from '../components/Posts';

function Home() {
  /* eslint-disable no-unused-vars */
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetAllPostsQuery()

  const navigate = useNavigate();

  // get the user from the store
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <>
      <Header/>
      <div className="w-2/3 m-auto pt-8 text-3xl font-medium">{user ? `Welcome ${user.name}` : 'Not logged in'}!</div>
      <Posts/>
    </>
  )
}
export default Home