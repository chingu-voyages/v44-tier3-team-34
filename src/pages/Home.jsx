import { useEffect } from 'react'; 
import validateToken from '../utilities/validateToken';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useNavigate } from 'react-router-dom';
import { logout } from '../slices/authSlice';
import Header from '../components/Header';
import Posts from '../components/Posts';
import Footer from '../components/Footer';

function Home() {
  const isTokenCurrent = validateToken();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // get the user from the store
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user || !isTokenCurrent) {
      dispatch(logout());
      navigate('/');
    }
  }, [navigate, dispatch, user, isTokenCurrent]);

  return (
    <>
      <Header/>
      <div className="w-2/3 m-auto pt-8 text-3xl font-medium text-center">{user ? `Welcome ${user.name}` : 'Not logged in'}!</div>
      {user && <Posts/>}
      <Footer/>
    </>
  )
}
export default Home