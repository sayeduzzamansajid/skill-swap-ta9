import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { AuthContext } from '../Context/AuthContext';
import { updateCurrentUser } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const SignUpPage = () => {
    const [show, setShow] = useState(false)
    const { createUser, setUser, updateuser, googleSignIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()


    // const handleSignUp = (e) => {
    //     e.preventDefault()
    //     const email = e.target?.email?.value;
    //     const password = e.target?.password?.value;
    //     const displayName = e.target?.name?.value;
    //     const photoURL = e.target?.photo?.value;
    //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@$!%*?&#^()]{6,}$/;

    //     //validation
    //     if (!passwordRegex.test(password)) {
    //         toast.error("password must be in 6 digit,! UpperCAse, 1 Lowercase, 1 special character")
    //         return;
    //     }

    //     //creating user 
    //     createUser(email, password)
    //         .then(res => {
    //             console.log(res)
    //             updateuser({
    //                 displayName,
    //                 photoURL,
    //             })
    //                 .then(res => {
    //                     setUser(res)
    //                     navigate('/')
    //                     toast.success("signup done")
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                     toast.error(err)
    //                 })

    //         })
    //         .catch(error => {
    //             let message = "";
    //             console.log(error)
    //             if (error.code === "auth/invalid-email") {
    //                 message = "Please enter a valid email address.";
    //             }
    //             else if (error.code === "auth/email-already-in-use") {
    //                 message = "This email is already in use. Try logging in instead.";
    //             }
    //             else if (error.code === "auth/weak-password") {
    //                 message = "Password should be at least 6 characters long.";
    //             }
    //             else if (error.code === "auth/missing-password") {
    //                 message = "Please enter your password.";
    //             }
    //             else if (error.code === "auth/user-not-found") {
    //                 message = "No account found with this email.";
    //             }
    //             else if (error.code === "auth/wrong-password") {
    //                 message = "Incorrect password. Please try again.";
    //             }
    //             else if (error.code === "auth/too-many-requests") {
    //                 message = "Too many login attempts. Please try again later.";
    //             }
    //             else if (error.code === "auth/network-request-failed") {
    //                 message = "Network error. Check your internet connection.";
    //             }
    //             else if (error.code === "auth/invalid-credential") {
    //                 message = "Invalid credentials. Please try again.";
    //             }
    //             else if (error.code === "auth/operation-not-allowed") {
    //                 message = "This sign-in method is currently disabled.";
    //             }
    //             else if (error.code === "auth/popup-closed-by-user") {
    //                 message = "Sign-in popup was closed before completing.";
    //             }
    //             else if (error.code === "auth/cancelled-popup-request") {
    //                 message = "Another sign-in process is already in progress.";
    //             }
    //             else if (error.code === "auth/requires-recent-login") {
    //                 message = "Please re-login to continue.";
    //             }
    //             else if (error.code === "auth/invalid-verification-code") {
    //                 message = "Invalid verification code.";
    //             }
    //             else if (error.code === "auth/invalid-verification-id") {
    //                 message = "Verification expired. Please try again.";
    //             }
    //             else {
    //                 message = "An unexpected error occurred. Please try again.";
    //             }
    //             toast.error(message);
    //         })

    // }

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()])[A-Za-z\d@$!%*?&#^()]{6,}$/;

        if (!passwordRegex.test(password)) {
            toast.error("Password must have 6+ chars, uppercase, lowercase & special char");
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                // Update profile
                updateuser({ displayName, photoURL })
                    .then(() => {
                        // Force update state
                        setUser({ ...user, displayName, photoURL });

                        toast.success("Signup successful!");
                        navigate("/"); // navigate 
                    })
                    .catch(err => {
                        console.log("Profile update failed:", err);
                        toast.error("Profile update failed");
                    });
            })
            .catch(error => {
                console.log("Signup error:", error);
                toast.error(error.message);
            });
    };


    const handleSignInwithGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user)
                navigate(location.state || '/')
                toast.success("logged in")
            })
            .catch(err => {
                console.log(err.message)
                toast.error(err.message)
            })

    }





    return (
        <div className="flex pt-16 justify-center min-h-[90vh] bg-base  pb-30">
            <div className="max-w-[600px] h-auto bg-white shadow-md  border border-gray-100 p-15 w-full rounded-tl-[80px] rounded-br-[80px]">
                {/* Company Name / Slogan */}
                {/* <h2 className="text-center text-xl font-semibold text-gray-800 mb-2">
                   The Dragon News 
                </h2> */}
                <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
                    Register your account
                </h1>


                <div className='h-px bg-gray-200 my-8'></div>


                <br /><br />

                {/* Form */}
                <form onSubmit={handleSignUp} className="space-y-5 w-full ">
                    <div>
                        <label
                            htmlFor="name"
                            className="block  text-gray-700 font-bold text-lg mb-3"
                        >
                            Your Name
                        </label>
                        <input
                            id="name"
                            name='name'
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-4 border border-gray-300 focus:outline-none rounded-lg focus:ring-2 bg-base-200 focus:ring-secondary placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="photo"
                            className="block  text-gray-700 font-bold text-lg mb-3"
                        >
                            Photo URL
                        </label>
                        <input
                            id="photo"
                            name='photo'
                            type="text"
                            placeholder="Provide your photo url"
                            className="w-full px-4 py-4 border border-gray-300 focus:outline-none rounded-lg focus:ring-2 bg-base-200 focus:ring-secondary placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block  text-gray-700 font-bold text-lg mb-3"
                        >
                            Email address
                        </label>
                        <input
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-4 border border-gray-300 focus:outline-none rounded-lg focus:ring-2 bg-base-200 focus:ring-secondary placeholder:text-gray-400"
                            required
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
                            required
                        />
                        <span onClick={() => setShow(!show)} className='absolute right-6 top-15  cursor-pointer'>{show ? <FaEye className='text-primary' size={22} /> : <IoEyeOff className='text-primary' size={22} />}</span>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-white py-2 rounded-lg font-medium hover:bg-secondary transition btn btn-primary"
                    >
                        Signup
                    </button>
                </form>

                <div>
                    {/* Google */}
                    <button onClick={handleSignInwithGoogle} className="btn w-full mt-6 bg-white text-black border-[#e5e5e5] hover:bg-base-200">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        SignUp with Google
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Have An Account?{" "}
                    <Link to="/login" className="text-primary font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;