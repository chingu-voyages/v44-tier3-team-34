import { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; // to dispatch actions and select data from the store
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Posts from '../components/Posts';

function Home() {
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-undef */
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <>
      <Navbar />
      <Header/>
      <div className="w-2/3 m-auto pt-8 text-3xl font-medium">{user ? `Welcome ${user.name}` : 'Not logged in'}!</div>
      <Posts/>
    </>
  )
}
export default Home