import React from 'react';
import errorapp from '../assets/Author/error-404.png'
import { Link } from 'react-router';

const ErrorPage404 = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-18 bg-base-100 '>
                <img src={errorapp} alt="" />
                <h1 className='text-6xl font-bold mb-5'>Oops, Apps not found!</h1>
                <p className='text-gray-500 text-lg'>The App you are looking for is not available.</p>
                <Link to='/'><button className='btn mt-6 w-[180px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage404;