import { logo } from "../utilities/constants";
import { AiFillHome, BsFillPersonPlusFill, BsPersonCircle, BsChatDots, MdNotificationsActive, AiOutlineSearch, IoSettingsSharp } from 'react-icons/all'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <nav>
                <div className="flex justify-between justify-items-center items-center px-2 bg-[#0D1C2E]">
                    <div><Link to="/"><img src={logo} alt="logo" /></Link>
                        
                    </div>
                    <ul className="text-1xl">
                        <li className="bg-light-green p-1 rounded-full"><AiOutlineSearch/></li>
                        <li className="bg-light-green p-1 rounded-full"><IoSettingsSharp className="place-self-center"/></li>
                    </ul>
                </div>
                <div className="bg-[#0D1C2E] py-2">
                    <ul className="flex justify-between px-2 text-2xl">
                        <li><Link to='/home'><AiFillHome className="text-white" /></Link></li>
                        <li><Link to='/'><BsFillPersonPlusFill className="text-white"/></Link></li>
                        <li><Link to='/makepost'><BsChatDots className="text-white"/></Link></li>
                        <li><Link to='/'><MdNotificationsActive className="text-white"/></Link></li>
                        <li><Link to='/profile'><BsPersonCircle className="text-white"/></Link></li>
                    </ul>
                </div>
            </nav>
            <div className="w-full h-px bg-light-green mb-1"></div>
        </header>
    )
}

export default Header