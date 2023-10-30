import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogoOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.log(error))
    }
    

    const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
{ user?.email 
        ? 
        <>
        <li><NavLink to='/bookings'>My Booking</NavLink></li> 
        <li><button onClick={handleLogoOut}>Logout</button></li> 
        </>
        
        :
        <li><NavLink to='/login'>Login</NavLink></li>
}
    <li><NavLink to='/register'>Register</NavLink></li>
    
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                    </ul>
                    </div>
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline">Appointment</a>
                </div>
                </div>
        </>
    );
};

export default Navbar;