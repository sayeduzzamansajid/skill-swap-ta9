import React from 'react';
import SkillCard from './SkillCard';
import useSkilldata from '../Hooks/useSkilldata';

const AllSkills = () => {

    const {skills,loading} = useSkilldata();
    

    if(loading){
        return<p>loading ...</p>
    }
    // console.log(skills)
    return (
        <>
        <h1 className='text-6xl font-bold text-center mt-10'>Our <span className='text-primary'>All</span> Skills</h1>
        <p className='text-2xl font-semibold text-center mb-10 mt-4 text-teal-600'>Be the first to explore fresh learning opportunities recently added by our members.</p>
        <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[80vw] mx-auto pb-30 pt-10'>
            {
                skills.map(skill => <SkillCard key={skill.skillId} skill={skill} />)
            }
        </div>
        </>
    );
};

export default AllSkills;