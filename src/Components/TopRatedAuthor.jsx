import React from 'react';
import { Star, Users } from 'lucide-react';


const TopRatedAuthor = ({ author }) => {
    // Destructure the author properties
    // Provide default values as placeholders in case author prop is incomplete
    const {
        image = "https://placehold.co/400x400/EBF4FF/7F9CF5?text=Skill",
        skill = "Placeholder Skill",
        providerName = "Placeholder Name",
        rating = 4.5,
        students = 100,
        bio = "This is a placeholder bio describing the skill and the provider. It gives a brief overview of what to expect from the course or workshop."
    } = author || {}; // Use default empty object if author is null/undefined

    return (
        <>
        
        <div className="max-w-[410px] w-[90%] bg-white rounded-xl shadow-lg  mx-auto my-4 transition-shadow duration-300 hover:shadow-2xl p-3">
            {/* Top section: Image + Info */}
            <div className="flex flex-col md:flex-row gap-2 pb-3">
                {/* Image */}
                <img
                    className="w-[90%] overflow-hidden h-30 object-cover md:w-48 md:h-[30] rounded-md"
                    src={image}
                    alt={skill}
                />

                {/* Info Section */}
                <div className="">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {skill}
                    </h3>
                    <p className="text-gray-600 text-base my-4">
                        {providerName}
                    </p>


                </div>
            </div>

            {/* Bottom section: Bio */}
            <div className="p-5 border-t border-gray-200">
                <div className="flex justify-between items-center mb-3">
                    {/* Using Lucide Star icon */}
                    <div className='flex'>
                        <Star className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" />
                        <span className="text-gray-800 font-semibold text-md mr-4">
                            {rating}
                        </span>
                    </div>
                    {/* Using Lucide Users icon */}
                    <div className='flex'>
                        <Users className="w-5 h-5 text-gray-400 mr-1.5" />
                        <span className="text-gray-600 font-medium text-[12px]">
                            {students} Students
                        </span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {bio}
                </p>
            </div>
        </div>
        </>
    );
};

export default TopRatedAuthor;

