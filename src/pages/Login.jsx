import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useLoginMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login

function Login () {
  const [email, setEmail] = useState('z@email.com');
  const [password, setPassword] = useState('zzzzzz');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, isError }] = useLoginMutation();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [navigate, user]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap(); // unwrap() will return the actual data from the promise
      dispatch(setCredentials({ ...res })); // set to localstorage and state
      navigate('/home');
    } catch (err) {
      console.log({err})
      console.log(err?.data?.error || err.error);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}   
        </button>
      </form>   
    </>
  )
}

  export default Login 