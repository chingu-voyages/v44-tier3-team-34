import { logo } from "../utilities/constants";
import { AiFillHome, BsFillPersonPlusFill, BsPersonCircle, BsChatDots, MdNotificationsActive, FaShoppingBag, AiOutlineSearch, IoSettingsSharp } from 'react-icons/all'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav>
                <div className="flex justify-between justify-items-center items-center px-2">
                    <div><Link to="/"><img src={logo} alt="logo" /></Link>
                        
                    </div>
                    <ul className="text-1xl">
                        <li className="bg-light-green p-1 rounded-full"><AiOutlineSearch/></li>
                        <li className="bg-light-green p-1 rounded-full"><IoSettingsSharp className="place-self-center"/></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex justify-between px-2 text-2xl my-2">
                        <li><Link to='/home'><AiFillHome/></Link></li>
                        <li><Link to='/'><BsFillPersonPlusFill/></Link></li>
                        <li><Link to='/'><BsChatDots/></Link></li>
                        <li><Link to='/'><MdNotificationsActive/></Link></li>
                        <li><Link to='/profile'><BsPersonCircle/></Link></li>
                    </ul>
                </div>
            </nav>
            <div className="w-full h-px bg-light-green mb-1"></div>
        </header>
    )
}

export default Header