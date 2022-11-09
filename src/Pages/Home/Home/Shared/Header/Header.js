import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="navbar h-20 mb-8 bg-base-100">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Blog</a></li>
                    </ul>
                </div> */}
                <Link to="/" className="btn btn-ghost normal-case text-4xl">Perfect Painters</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/addService">Add Service</Link></li>
                    <li><Link to="/myReview">My Review</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt='' src={user?.photoURL} />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><Link>Settings</Link ></li>
                    <li><Link onClick={handleLogOut}>Logout</Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Header;