import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useChangePasswordMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful change of password
import Navbar from '../components/Navbar';

function ChangePassword () {
  /* eslint-disable no-unused-vars */
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changePassword, { isLoading, isError }] = useChangePasswordMutation();

  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await changePassword({ password, newPassword }).unwrap(); // unwrap() will return the actual data from the promise
      dispatch(setCredentials({ ...res })); // set to localstorage and state
      navigate('/home');
    } catch (err) {
      console.log(err?.data?.error || "there was a problem Changing password");
    }
  };

  return (
    <>
    <Navbar />
      <h1>Change Password Page</h1>
      <form onSubmit={submitHandler} className="w-80 m-auto">
        <div>
          <label htmlFor="password">Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            className="border" 
            type="password" 
            id="password" 
            value={password} 
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input 
            onChange={(e) => setNewPassword(e.target.value)} 
            className="border" 
            type="password" 
            id="newPassword" 
            value={newPassword} 
          />
        </div>
        <button type="submit" disabled={isLoading} className="border">
          {isLoading ? 'Loading...' : 'Change Password'}   
        </button>
      </form>  
    </>
  )
}

  export default ChangePassword 