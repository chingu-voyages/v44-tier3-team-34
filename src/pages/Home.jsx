import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Home() {
  /* eslint-disable no-unused-vars */
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
      <div className="w-2/3 m-auto pt-8 text-3xl font-medium">{user ? `Welcome ${user.name}` : 'Not logged in'}!</div>
    </>
  )
}
export default Home