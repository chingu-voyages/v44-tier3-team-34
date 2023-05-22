import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { useSignupMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login

function Signup () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signup, { isLoading, isError }] = useSignupMutation();

  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      try {
        const res = await signup({ name, email, password }).unwrap(); // unwrap() will return the actual data from the promise
        dispatch(setCredentials({ ...res })); // set to localstorage and state
        navigate('/home');
      } catch (err) {
        console.log({err})
        console.log(err?.data?.error || "there was a problem signing up");
      }
    }
  };

  return (
    <>
      <h1>Signup Page</h1>
      <form onSubmit={submitHandler} className="w-80 m-auto">
        <div>
          <label htmlFor="name">Name</label>
          <input 
            onChange={(e) => setName(e.target.value)}
            className="border" 
            type="name" 
            id="name" 
            value={name} 
            placeholder="enter name"  
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className="border" 
            type="email" 
            id="email" 
            value={email} 
            placeholder="enter email"  
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            className="border" 
            type="password" 
            id="password" 
            value={password} 
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="border" 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            required
          />
        </div>
        <button type="submit" disabled={isLoading} className="border">
          {isLoading ? 'Loading...' : 'Signup'}   
        </button>
      </form>  
      <p>Go to Login - <Link className="underline" to="/login">Login</Link></p> 
    </>
  )
}

  export default Signup 