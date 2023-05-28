import {useState, useEffect} from 'react';
import AuthHero from '../components/AuthHero';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useLoginMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userToken } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userToken) {
      navigate('/home');
    }
  }, [navigate, userToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await login({ email, password }).unwrap(); // unwrap() will return the actual data from the promise
      dispatch(setCredentials({ ...res })); // set to localstorage and state
      navigate('/home');
    } catch (err) {
      setError(err?.data?.error || "there was a problem logging in");
    }
  };

  return (
    <div className='bg-page-color min-h-screen pb-8'>
      <AuthHero title="Welcome Back" >
        <p>Sign in into your account</p>
      </AuthHero>
      <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-9">
        <input 
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"  
          type="email" 
          id="email" 
          value={email} 
          placeholder="Email"  
        />

        <input 
          onChange={(e) => setPassword(e.target.value)} 
          className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
          type="password" 
          id="password" 
          placeholder="Password"  
          value={password} 
        />
        <button type="submit" disabled={isLoading} className="border rounded py-1.5 pl-1.5 border-light-green bg-light-green text-dark-blue text-lg">
          {isLoading ? 'Loading...' : 'Login'}   
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>  
      <p className='flex justify-center my-1.5'>Go to Sign up - <Link className="underline text-green ml-1" to="/signup">Signup</Link></p> 
    </div>
  )
}

  export default Login 