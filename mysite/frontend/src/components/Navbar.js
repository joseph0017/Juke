import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import twist from "../assets/twist-single-2.svg"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);
    return (
    <nav className="w-full bg-indigo-950 shadow">
    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <Link to="/" className="pl-8 sm:text-base italic font-medium cursor-pointer relative text-white ">
                <img src={twist} alt="juke icon" className="absolute w-7 ml-10 lg:ml-20" /> Juke
            </Link>
                <div className="lg:hidden">
                    <button
                        className="p-2 text-white rounded-md outline-none focus:border-white focus:border"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                    navbar ? "block" : "hidden"
                }`}
            >
                <ul className="items-center justify-center space-y-8 grid lg:flex lg:space-x-6 lg:space-y-0 cursor-pointer">
                    <li className="text-white ">
                    <Link className="border-b-2 border-transparent hover:text-indigo-800 transition-colors duration-300 transform dark:hover:text-white hover:border-indigo-300 mx-1.5 sm:mx-6 text-base" to="/">
                      Home
                    </Link>
                    </li>
                    <li className="text-white">
                    <Link className="border-b-2 border-transparent hover:text-indigo-800 transition-colors duration-300 transform dark:hover:text-white hover:border-indigo-300 mx-1.5 sm:mx-6 text-base" to="/music">
                      Music
                    </Link>
                    </li>
                    <li className="text-white">
                    <Link className="border-b-2 border-transparent hover:text-indigo-800 transition-colors duration-300 transform dark:hover:text-white hover:border-indigo-300 mx-1.5 sm:mx-6 text-base" to="/about">
                      About
                    </Link>
                    </li>
                    { user ? (
            <>
         <div className='inline-flex sm:text-base pt-4 md:pt-0 lg:pl-48 lg:pr-16 text-white '>
                      Welcome <span className="ml-4"> {user.username} </span> 
                      
                    </div>
                    
                    <p className="text-white pl-0 py-6 cursor-pointer border-b-2 border-transparent hover:text-indigo-800 transition-colors duration-300 transform dark:hover:text-white hover:border-indigo-300"
                    onClick={logoutUser}
                    >
                        Sign Out</p>
                    </>
        ) : (
            <Link className='border-b-2 text-white border-transparent hover:text-indigo-800 transition-colors duration-300 transform dark:hover:text-white hover:border-indigo-300 mx-1.5 sm:mx-6 text-base' to='/login'>
                      Log in
                    </Link>
        )
        } 
                </ul>     
            </div>
        </div>

        
                       
    </div>
</nav>
    );
  };
  
  export default Navbar;
  