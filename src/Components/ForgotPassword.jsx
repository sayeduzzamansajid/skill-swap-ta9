import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { AuthContext } from '../Context/AuthContext';
import toast from 'react-hot-toast';

const ForgotPassword = () => {

    const { emailref, setEmailref } = useContext(AuthContext)

    const handleResetPass = () => {
        console.log(emailref)
        sendPasswordResetEmail(auth, emailref)
            .then(res => {
                console.log(res)
               toast.success("check your mail to reset your password")
            })
            .catch(err => {
                console.log(err.message)
                alert(err.message)
            })
    }
    return (<>
        <div className='h-[20vw] w-[80vw] mx-auto flex justify-center items-center my-30 bg-base-300 rounded-lg'>
            <div>
                <p className='font-bold my-2 text-lg p-0.5'>Enter Your Email : </p>
                <label className="input validator bg-white">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input value={emailref} onChange={(e) => setEmailref(e.target.value)} type="email" placeholder="mail@site.com" className='placeholder:text-gray-400' />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
                <button onClick={handleResetPass} className='btn btn-primary text-white w-[95%] mt-3'>Reset Password</button>
            </div>
        </div>
    </>

    );
};

export default ForgotPassword;