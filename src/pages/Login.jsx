import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // to dispatch actions and select data from the store
import { useLoginMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login
import { imageURL } from '../utilities/constants';
import Header from '../components/Header';

function Login () {
  /* eslint-disable no-unused-vars */
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
      console.log(err?.data?.error || "there was a problem logging in");
    }
  };

  return (
    <div className='bg-page-color'>
    <div className='relative h-1/4 sm: h-64 md:h-72 lg: h-96'>
      <div className='absolute top-1/2 left-5 text-white'>
        <h1 className='text-5xl  font-bold'>Welcome Back</h1>
        <p>Sign in into your account</p>
      </div>
      
      <img src={imageURL} alt='header-background' className='w-full h-full'/>
    </div>
      
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
      </form>  
      <p className='flex justify-center my-1.5'>Go to Sign up - <Link className="underline text-green ml-1" to="/signup">Signup</Link></p> 
      <Header/>
    </div>
  )
}

  export default Login 