import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { useSignupMutation } from '../slices/usersApiSlice'; 
import { setCredentials } from '../slices/authSlice'; // will set credentials after successful login
import { imageURL } from '../utilities/constants';

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
    <div className='bg-page-color'>
    <div className='relative h-1/4 sm: h-64 md:h-72 lg: h-96'>
      <div className='absolute top-1/2 left-5 text-white'>
        <h1 className='text-5xl  font-bold'>Register</h1>
        <p>Create your account</p>
      </div>
      
      <img src={imageURL} alt='header-background' className='w-full h-full'/>
    </div>
      
      <form onSubmit={submitHandler} className="w-80 m-auto flex justify-center flex-col gap-y-4 my-9">
          <input 
            onChange={(e) => setName(e.target.value)}
            className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
            type="name" 
            id="name" 
            value={name} 
            placeholder="Name"  
            required
          />
          <input 
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
            type="email" 
            id="email" 
            value={email} 
            placeholder="Email"  
            required
          />
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg"  
            type="password" 
            id="password" 
            value={password} 
            placeholder="Password"  
            required
          />
          <input 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="border rounded py-1.5 pl-1.5 border-light-blue text-dark-blue text-lg" 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            placeholder="Confirm password"  
            required
          />
        <button type="submit" disabled={isLoading} className="border rounded py-1.5 pl-1.5 border-light-green bg-light-green text-dark-blue text-lg" >
          {isLoading ? 'Loading...' : 'Signup'}   
        </button>
      </form>  
      <p className='flex justify-center pb-3'>Go to Login - <Link className="underline text-green ml-1" to="/login">Login</Link></p> 
    </div>
  )
}

  export default Signup 