import {useState, useEffect} from 'react';
import AuthHero from '../components/AuthHero';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useChangePasswordMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful change of password

function ChangePassword () {
  /* eslint-disable no-unused-vars */
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    if (newPassword !== confirmNewPassword) {
      setError("Passwords don't match");
    } else {  
      try {
        const res = await changePassword({ password, newPassword }).unwrap(); // unwrap() will return the actual data from the promise
        dispatch(setCredentials({ ...res })); // set to localstorage and state
        navigate('/home');
      } catch (err) {
        setError(err?.data?.error || "there was a problem Changing password");
      }
    }
  };

  return (
    <>
    <div className='bg-page-color min-h-screen pb-8'>
      <AuthHero title="Change Password" />
      <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-9">
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
          type="password" 
          id="password" 
          value={password} 
          placeholder="Current Password"
        />
        <input 
          onChange={(e) => setNewPassword(e.target.value)} 
          className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
          type="password" 
          id="newPassword" 
          value={newPassword} 
          placeholder="New Password"
        />
        <input
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"
          type="password"
          id="confirmNewPassword"
          value={confirmNewPassword}
          placeholder="Confirm New Password"
        />
        <button type="submit" disabled={isLoading} className="border rounded py-1.5 pl-1.5 border-light-green bg-light-green text-dark-blue text-lg">
          {isLoading ? "Loading..." : "Change Password"}   
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>  
      <p className='flex justify-center pb-3'>Back to Profile -<Link className="underline text-green ml-1" to="/profile">Profile</Link></p> 
    </div>
    </>
  )
}

  export default ChangePassword