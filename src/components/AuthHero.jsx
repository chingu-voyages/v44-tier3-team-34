import { imageURL } from '../utilities/constants';
import PropTypes from 'prop-types'

function AuthHero({ title, children }) {
  return (
  <div className="relative h-64 md:h-72 lg:h-96">
    <div className='absolute top-1/2 left-5 text-white'>
      <h1 className='text-4xl sm:text-5xl font-bold'>{title}</h1>
      {children}
    </div>
    <img src={imageURL} alt='header-background' className='w-full h-full'/>
  </div>
  );
}

AuthHero.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };

export default AuthHero;