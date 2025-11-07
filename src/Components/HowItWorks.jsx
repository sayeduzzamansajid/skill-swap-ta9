import React from "react";
import { User, Search, Calendar, Sprout } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create Your Profile",
    description:
      "Sign up as a learner or provider and tell the community about your skills or what you want to learn.",
    icon: <User className="w-10 h-10 text-white" />,
  },
  {
    id: 2,
    title: "Discover Skills Nearby",
    description:
      "Browse skill listings and find trusted local providers or online classes.",
    icon: <Search className="w-10 h-10 text-white" />,
  },
  {
    id: 3,
    title: "Book or Exchange",
    description:
      "Choose a convenient time, book a session, or trade your skill with others.",
    icon: <Calendar className="w-10 h-10 text-white" />,
  },
  {
    id: 4,
    title: "Learn & Grow Together",
    description:
      "Attend your session, gain experience, and leave feedback for others.",
    icon: <Sprout className="w-10 h-10 text-white" />,
  },
];

const HowItWorks = () => {
  return (
    <section data-aos="zoom-in-down" className="w-[80vw] mx-auto bg-base  py-16 px-4 my-30 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
        How It Works
      </h2>
      <p className="text-gray-600 mb-12 text-sm md:text-base max-w-2xl mx-auto">
        Get started in just a few easy steps <br />— learning and teaching made simple
        with <span className="font-semibold text-primary">Skill Swap</span>.
      </p>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center md:w-1/4"
          >
            {/* Icon Circle */}
            <div className="bg-linear-to-r from-primary to-base-300 hover:bg-violet-500 p-6 rounded-full mb-4 flex items-center justify-center">
              {step.icon}
            </div>

            {/* Step Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base px-3">
              {step.description}
            </p>

            {/* Arrow (Desktop only except last step) */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:block absolute ">
                <span className="text-gray-400 text-3xl mx-4 relative left-40 top-10">→</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
