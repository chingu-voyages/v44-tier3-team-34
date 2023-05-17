import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing page</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar