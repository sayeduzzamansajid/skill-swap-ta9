import React from 'react';
import useTopProvider from '../Hooks/useTopProvider';
import TopRatedAuthor from './TopRatedAuthor';

const TopRated = () => {
    const { topRated, loading } = useTopProvider()
    if (loading) {
        return <p>Loading...</p>
    }
    // console.log(topRated)
    return (
        <div data-aos="fade-down-right" className='my-30'>
            <h2 className="text-2xl sm:text-5xl font-bold text-gray-900 text-center my-16 mb-3 animate__animated animate__rotateIn animate__delay-1s">
                Our <span className='text-primary'>Top</span> Rated Providers
            </h2>
            <p className=" text-sm lg:text-lg text-gray-400 text-center max-w-2xl mx-auto mb-10 mt-6 max-sm:w-[70vw] ">
                Learn from the best and brightest in their fields, recognized for their
                expertise and student success.
            </p>
            <div data-aos="fade-left" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80vw] h-[450px] overflow-y-scroll overflow-x-hidden mx-auto  rounded-xl'>
                {
                    topRated.map(author => <TopRatedAuthor key={author.providerId} author={author} />)
                }
            </div>
        </div>
    );
};

export default TopRated;