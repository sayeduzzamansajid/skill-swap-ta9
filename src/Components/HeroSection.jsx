import React from 'react';
import Slider from './Slider';
import useSkilldata from '../Hooks/useSkilldata';
import PopularSkills from './PopularSkills';

const HeroSection = () => {
    const {skills} = useSkilldata()
    const popularSkill = skills.slice(0,6)
    return (
        <div>
            {/* <div className="carousel  h-[400px] mt-10 w-[80vw] mx-auto">
                <div id="item1" className="carousel-item w-[80vw] mx-auto">
                    <img
                        src="https://i.postimg.cc/t4jWcqkf/ai.jpg"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/wjpLrq2X/ai-assistant.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/jS4P0p3Z/dm.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/nhGBbyST/seo.jpg"
                        className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/dVjrPbN5/skill1ads.jpg"
                        className="w-full" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img
                        src="https://i.postimg.cc/Jz5ZVfdV/tax.jpg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div> */}
            <Slider/>
            <PopularSkills popularSkill={popularSkill} />
            
        </div>
    );
};

export default HeroSection;