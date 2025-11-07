import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';



const LoginPage = () => {

    const [show, setShow] = useState(false)
    const {signIn,googleSignIn,setUser, setEmailref} =useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)



    
    // if(user){
    //     return navigate('/')
    // }
    //login 
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target?.email?.value;
        setEmailref(email);
        const password = e.target?.password?.value;
        // console.log("login", email, password);
        signIn(email, password)
            .then(res => {
                setUser(res.user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })
    }

    const handleSignInwithGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user)
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })

    }
    return (
        <div className="flex py-16 justify-center min-h-[90vh]  bg-base ">
            <div className="max-w-[600px] h-auto bg-white shadow-md  border border-gray-100 p-15 w-full rounded-tl-[80px] rounded-br-[80px]">
                <h1 className="text-center text-3xl font-bold mb-4 text-gray-800 pb-4">
                    Login your account
                </h1>


                <div className='h-px bg-gray-200 my-6'></div>


                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-5 w-full ">
                    <div>
                        <label
                            htmlFor="email"
                            className="block  text-gray-700 font-bold text-lg mb-3"
                        >
                            Email address
                        </label>
                        <input
                            onChange={(e)=>setEmailref(e.target.value)}
                            name='email'
                            id="email"
                            type='email'
                            placeholder="Enter your email address"
                            className="w-full px-4 py-4 border border-gray-300 focus:outline-none rounded-lg focus:ring-2 bg-base-200 focus:ring-secondary placeholder:text-gray-400
                            "
                        />

                    </div>

                    <div className='relative'>
                        <label
                            htmlFor="password"
                            className="block font-bold text-lg mb-3  text-gray-700 "
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            name='password'
                            type={show ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full px-4 py-4 border border-gray-300 bg-base-200 focus:outline-none focus:ring-2 rounded-lg focus:ring-secondary placeholder:text-gray-400"
                        />
                        <span onClick={() => setShow(!show)} className='absolute right-6 top-15  cursor-pointer'>{show ? <FaEye className='text-primary' size={22} /> : <IoEyeOff className='text-primary' size={22} />}</span>
                    </div>



                    <button
                        type="submit"
                        className="w-full btn btn-primary text-white py-2 rounded-lg font-medium hover:bg-secondary transition"
                    >
                        Login
                    </button>
                    <NavLink to={"/forgot-password"}>
                        <button className='cursor-pointer hover:underline hover:text-primary' type='button'>Forgot Password ?</button>
                    </NavLink>
                </form>

                <div className='w-[80%] h-px bg-gray-400 mt-5 mx-auto relative'> <span className='absolute right-45 -top-4 bg-white px-3'>or</span></div>

                <div>
                    {/* Google */}
                    <button onClick={handleSignInwithGoogle} className="btn w-full mt-6 bg-white text-black border-[#e5e5e5] hover:bg-base-200">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t Have An Account?{" "}
                    <Link to="/signup" className="text-primary font-medium hover:underline">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;