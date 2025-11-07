import React, { useContext } from 'react';
import logo from '../assets/logo1.png'
import { NavLink, useLocation } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const location = useLocation()

    const logout = () => {
        console.log("logout clicked");
        signOut(auth)
            .then(res => {
                console.log(res);
                setUser(null)
               toast.success("log out successfull")
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
            });
    }
    return (
        <div className="navbar w-[85vw] mx-auto justify-between  lg:px-8 lg:py-4 bg-[#2DD4BF] rounded-b-4xl shadow-sm md:pr-4">
            <div className="flex">
                <NavLink to="/">
                    <button className='btn h-[60px] rounded-b-3xl bg-white'>
                        <img  className='w-[100px] lg:w-[200px] ' src={logo} alt="" />
                    </button>
                </NavLink>
            </div>
            <div className='flex justify-around items-center gap-4 lg:w-[250px] text-lg font-semibold text-white'>
                <NavLink>Home</NavLink>
                <NavLink to="/skills">All Skills</NavLink>
            </div>
            {
                user ?
                    <div className="flex gap-2">

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                    title={user?.displayName}
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                        
                                </div>
                                
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/my-profile'>My Profile</NavLink></li>
                                <li onClick={logout}><button >Logout</button></li>
                            </ul>
                        </div>
                    </div>
                    : <div className='lg:w-[200px] flex justify-around gap-4 items-center'>
                        <NavLink to="/signup" ><button className='btn rounded-b-xl bg-white'>Sign Up</button></NavLink>
                        <NavLink to="./login"><button className='btn rounded-b-xl bg-white'>Login</button></NavLink>
                    </div>
            }


        </div>
    );
};

export default Navbar;