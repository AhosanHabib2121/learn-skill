import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import logo from '../../assets/logo.png'
import { useContext, useRef } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLink = <>
        <li><NavLink
            to='/' 
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >Home</NavLink></li>
        <li><NavLink >Service</NavLink></li>
        <li><NavLink to='/ourTeam'>Our Team</NavLink></li>
        {
            user ? <>
                <li><NavLink to='/event'>Event</NavLink></li> 
                <li><NavLink to='/careers'>Careers</NavLink></li>
            </>: ''
        }
        <li><NavLink to='/contact'>Contact us</NavLink></li>
    </>
    // logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
                Toast.fire({
                icon: 'success',
                title: 'logout completed'
                })
        })
    }

    return (
        // fixed top-0 left-0 right-0
        <div className=" bg-[#042754] px-6 lg:px-0  ">
            <div className="navbar px-0 text-white py-4 max-w-6xl md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost px-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#042754] rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className=" flex gap-2 items-center">
                        <img src={logo} alt="not found" />
                        <Link to='/' className=" uppercase text-2xl font-semibold tracking-wider">LearnSkill</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-7 text-base font-poppins font-medium  px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {/* mobile device */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost px-0 md:hidden">
                            {
                                user ? <img src={user?.photoURL} className=" w-12 h-12 rounded-full " alt="not found" /> 
                                :<Link to='/login' className=" bg-[#dfac04f4] px-5 py-2 rounded-lg font-medium ">Login</Link>
                            } 
                        </label>
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] py-3 shadow bg-[#042754] rounded-box w-40  ">
                            <li  className=" text-center">
                                {
                                user ?<>
                                    <div className=" md:flex items-center gap-2 mr-4">
                                        <h4>{ user?.displayName}</h4>
                                    </div> 
                                    <Link to='/login' onClick={handleLogout} className=" bg-[#dfac04f4] px-2 py-1 rounded-lg font-medium ">Sign Out</Link>
                                </> 
                                :""
                            }
                            </li>
                        </ul>

                    </div>
                    {/* medium and large device */}
                    <div className="navbar-right hidden md:flex ">
                         {
                            user ?<>
                                <div className="flex items-center gap-2 mr-4">
                                    <h4>{ user?.displayName}</h4>
                                    <img src={ user?.photoURL} className=" w-12 h-12 rounded-full " alt="not found" />
                                </div> 
                                <Link to='/login' onClick={handleLogout} className=" bg-[#dfac04f4] px-3 py-3 rounded-lg font-medium ">Sign Out</Link>
                            </> 
                            :<Link to='/login' className=" bg-[#dfac04f4] px-5 py-2  rounded-lg font-medium ">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;