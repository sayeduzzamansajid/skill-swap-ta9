import React from 'react';
// Importing icons from lucide-react
import { TrendingUp, MessagesSquare, Settings } from 'lucide-react';

// Data for the benefits section
const benefitsData = [
  {
    icon: TrendingUp,
    title: "Learn & Grow",
    description: "Explore new hobbies or advance career options. Learn at our pace from local experts.",
  },
  {
    icon: MessagesSquare,
    title: "Connect & Community",
    description: "Join a thriving community, meet-linke-individuals, and build lasting connections right in your neighborhood.",
  },
  {
    icon: Settings, // Using Settings (cog icon) to represent skills/exchange
    title: "Earn & Exchange",
    description: "Monieize your talents, trade skills without money and trade valuable experience by teaching others",
  },
];
const Benifits = () => {
  return (
    <>
      {/* Global styles for background and font
      <style>{`
        body, html, #root {
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          background-color: #f5f3ff; /* A light violet background (bg-violet-50) */
        }

      {/* Benefits Section */}
      <section data-aos="flip-up" className="py-16 md:py-24 bg-cyan-100 w-[80vw] mx-auto rounded-xl shadow-xl mb-10 lg:mb-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className='text-primary'>Unlock</span> a World of Opportunities
            </h1>
            <p className="text-lg font-semibold text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of <span className='text-primary'>SkillSwap</span> for learners and providers.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {benefitsData.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center">
                
                {/* Icon */}
                <div className="w-24 h-24 bg-primary hover:bg-violet-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon className="w-12 h-12" strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-16">
            <button className="py-3 px-10 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-violet-700 transition-colors duration-300 text-lg">
              Join SkillSwap Today
            </button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Benifits;