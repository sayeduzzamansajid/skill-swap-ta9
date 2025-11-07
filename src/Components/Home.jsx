import React from 'react';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import Benifits from './Benifits';
import TopRated from './TopRated';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <TopRated/>
            <HowItWorks/>
            <Benifits/>
        </div>
    );
};

export default Home;