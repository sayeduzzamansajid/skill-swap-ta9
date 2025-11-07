import React from 'react';
import { useParams } from 'react-router';
import useSkilldata from './../Hooks/useSkilldata';
import { Star } from 'lucide-react';
import toast from 'react-hot-toast';

const SkillDetails = () => {
    const { skills, loading, error } = useSkilldata();
    const { id } = useParams();
    console.log(id);
    if (loading) {
        return <div className="text-center my-20"><p>Loading skill details...</p></div>;
    }
    if (error) {
        return <div className="text-center my-20"><p>Error: {error.message}</p></div>;
    }
    console.log(skills);

    const skill = skills.find(skill => skill.skillId === parseInt(id))
    if (!skill) {
        return <div className="text-center my-20"><p>Skill not found.</p></div>;
    }
    console.log(skill);

    const bookhandle =(e)=>{
        e.preventDefault()
        toast.success("Session Booked for you!")
        e.target.name.value = ''
        e.target.email.value = ''
        
    }

    return (
        <div>
            <div className="card justify-between gap-4 items-center lg:card-side bg-base-100 shadow-sm w-[80vw] h-auto mx-auto my-20 p-10 ">


                <div className='border p-2 rounded-full lg:w-[360px] lg:h-[360px] bg-linear-to-l from-primary to-purple-400'>
                    <img
                        className=' h-full w-full rounded-full object-cover'
                        src={skill.image}
                        alt="Album" />
                </div>


                <div className="card-body flex-2/3 flex-col">
                    <h2 className=" card-title font-bold lg:text-4xl">{skill.skillName}</h2>
                    <p className=' font-bold text-xl text-primary'>Instructor : <span className=' font-semibold text-xl text-black'> {skill.providerName} </span></p>
                    <p className='font-bold text-xl text-primary'>Instructor's email : <span className='font-semibold text-xl text-black'> {skill.providerEmail} </span></p>
                    <p className=' font-bold text-xl text-primary'>Motive : <span className=' font-semibold text-xl text-black'> {skill.description} </span></p>
                    <p className=' font-bold text-xl text-primary'>Discription : <span className=' font-light text-xl text-black'> {skill.details} </span></p>
                    <div>
                        <p className=' font-bold text-xl text-primary'>Category : <span className='font-semibold text-xl text-black'> {skill.category} </span></p>
                        <p className=' font-bold text-xl text-primary flex gap-3 items-center'>Rating : <span className='font-semibold text-xl text-black flex gap-2 items-center'> <Star className='text-yellow-500' /> {skill.rating} </span> </p>
                    </div>
                    <div className=' flex flex-col lg:flex-row justify-between gap-2 lg:gap-80'>
                        <p className='font-bold text-xl text-primary bg-base-200 text-start rounded-lg py-2 lg:px-5 '>Available Slot : <span className='font-semibold text-xl text-black'> {skill.slotsAvailable} </span></p>
                        <p className='font-bold text-xl text-primary bg-base-200 text-start rounded-lg py-2 px-10 '>Price : <span className='font-semibold text-xl text-black'> {skill.price} $ </span></p>
                    </div>

                    <div className="card-actions justify-center">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="btn btn-primary lg:w-[40%]">Book A Session</button>
                    </div>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white space-y-2">
                    <h3 className="font-bold text-lg">Information for Booking </h3>
                    <form onSubmit={bookhandle}>
                        <label className='font-semibold' htmlFor="name">Enter your Name :
                            <input name='name'  className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your name' type="text" required="true" />
                        </label>
                        <label className='font-semibold ' htmlFor="email">Enter your email :
                            <input name='email' className='bg-base-300 w-full px-4 py-2 rounded-lg placeholder:text-gray-400' placeholder='enter your email' type="email" />
                        </label>
                        <div className='flex w-full justify-center items-center'>
                            <button  className='btn btn-primary w-[60%] mt-3 text-white'>Book</button>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SkillDetails;
// "skillId": 11,
// "skillName": "Creative Writing Workshop",
// "providerName": "Olivia Brown",
// "providerEmail": "olivia@skillswap.com",
// "price": 20,
// "rating": 4.7,
// "slotsAvailable": 7,
// "description": "Get feedback on your stories and learn narrative techniques.",
// "image": "https://i.postimg.cc/J7p3YDdn/writting.jpg",
// "category": "Writing"