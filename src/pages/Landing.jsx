import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Posts from '../components/Posts';

function Landing() {
  return (
    <div className='bg-page-color'>
      <section className="flex items-center justify-center relative bg-light-green bg-hero bg-cover bg-center h-[331px] md:h-[400px]">
        <div className="absolute top-16 bg-opacity-75 bg-light-blue w-full max-w-[90%] rounded mx-8 p-4 text-center md:top-[425px] md:max-w-xl md:flex md:items-center md:justify-around">
          <h1 className="text-5xl md:text-7xl text-light-green font-medium text-shadow">PetPals</h1>
          <p className="text-white text-base md:text-lg text-shadow">Pet Life &#x2022; Enjoy &#x2022; Connect</p>
        </div>
      </section>
      <section className="text-center py-8 px-[20%] md:pt-32">
        <div className="absolute bg-light-green h-1/3 w-1/2 left-0 clip-left">circ</div>
        <div className="absolute bg-light-green h-1/3 w-1/2 right-0 clip-right">circ</div>
        <p className="text-lg text-dark-blue max-w-2xl my-8 mx-auto">
          Welcome to PetPals, the ultimate social media platform for pet lovers! 
          Connect, share, and celebrate the joy of your furry friends. Join us 
          today to embark on a pet-inspired journey with PetPals!
        </p>
      </section>
      <div className="w-full text-center">
      <a href="/signup" className="rounded uppercase font-medium text-xl inline-block mb-4 py-4 px-8 w-96 max-w-[90%] bg-light-green hover:opacity-50">Get Started</a>
      <p className="text-lg text-dark-blue max-w-2xl pb-8 mx-auto"> Already have an account? <Link to="/login" className="text-light-green hover:underline">Login</Link></p>
      </div>
    </div>
  );
}

export default Landing;