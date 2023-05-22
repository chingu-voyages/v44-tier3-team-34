import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useLoginMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, isError }] = useLoginMutation();

  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap(); // unwrap() will return the actual data from the promise
      dispatch(setCredentials({ ...res })); // set to localstorage and state
      navigate('/home');
    } catch (err) {
      console.log({err})
      console.log(err?.data?.error || "there was a problem logging in");
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={submitHandler} className="w-80 m-auto">
        <div>
          <label htmlFor="email">Email</label>
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className="border" 
            type="email" 
            id="email" 
            value={email} 
            placeholder="enter email"  
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
          />
        </div>
        <button type="submit" disabled={isLoading} className="border">
          {isLoading ? 'Loading...' : 'Login'}   
        </button>
      </form>  
      <p>Go to Sign up - <Link className="underline" to="/signup">Signup</Link></p> 
    </>
  )
}

  export default Login 