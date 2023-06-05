import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validateToken from '../utilities/validateToken';
import Header from '../components/Header';
import { logout } from '../slices/authSlice';

function Profile() {
  const isTokenCurrent = validateToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user || !isTokenCurrent) {
      dispatch(logout());
      navigate('/');
    }
  }, [navigate, dispatch, user, isTokenCurrent]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <>
      <Header />
      {user &&
      <div className="p-4">
        <div>{user.name}&apos;s Profile</div>
        <div>Email: {user.email}</div>
        <Link className="border p-1 bg-light-green" to="/changepassword">ChangePassword</Link>
        <button className="block border my-4" onClick={handleLogout}>Logout</button>
      </div>
      }
    </>
  )
}
export default Profile