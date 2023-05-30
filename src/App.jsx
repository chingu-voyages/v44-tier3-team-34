import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChangePassword from './pages/ChangePassword';
import Profile from './pages/Profile';

function App() {
  return (
      <Router>
          <Routes>
            <Route index element={<Landing />} />
            <Route path='/home' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/Profile' element={<Profile />} />
          </Routes>
      </Router>
  )
}

export default App
