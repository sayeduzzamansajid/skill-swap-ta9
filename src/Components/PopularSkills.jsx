import React from 'react';
import PopularCard from './PopularCard';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router';

const PopularSkills = ({ popularSkill }) => {
    
    return (
        <>
            <div data-aos="fade-up">
                <h1 className='text-6xl font-bold text-center w-[60vw] mx-auto animate__animated animate__bounce animate__delay-1s '>Level <span className='text-primary'>Up</span> Your  <span className='text-primary'>Skill</span> Today</h1>
                <h1 className='text-6xl font-bold text-center mt-6 animate__animated animate__bounce animate__delay-.05s'>Our Popular Skills</h1>
                <p className='text-2xl font-semibold text-center my-10  text-teal-600'>Learn, teach, and connect with your community through real skill-sharing sessions.</p>
            </div>

            <div data-aos="fade-right" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80vw] mx-auto py-10'>
                {
                    popularSkill.map(skill => <PopularCard key={skill.skillId} skill={skill} />)
                }
            </div>
            <div className='w-[80vw] flex justify-center mx-auto '> <NavLink data-aos="zoom-in" className="btn btn-primary text-white" to="/skills">See More</NavLink> </div>
        </>
    );
};

export default PopularSkills;