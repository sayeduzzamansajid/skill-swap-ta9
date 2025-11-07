import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import HeroSlider from '../Components/HeroSlider';
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';

const MainLayout = () => {
        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false,
                easing: "ease-in-out",
            });
        }, []);
        return (
            <div>
                <Navbar />
                {/* <HeroSlider/> */}
                <Outlet />
                <Footer />
            </div>
        );
    };

    export default MainLayout;