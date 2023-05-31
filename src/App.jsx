import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';
import MakePost from './pages/MakePost';

function App() {
  return (
      <Router>
          <Routes>
            <Route index element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/makepost' element={<MakePost />} />
          </Routes>
      </Router>
  )
}

export default App
