import React from 'react';
import { Link } from 'react-router';

const PopularCard = ({skill}) => {
    const {skillName, image, price, rating,category,description} = skill;
    return (
        <div className="card bg-white w-96 shadow-lg hover:scale-101 hover:shadow-2xl">
            <figure className="px-6 pt-6">
                <img
                    src={image}
                    alt={category}
                    className="rounded-xl" />
            </figure>
            <div className="card-body  text-center">
                <h2 className="card-title text-2xl ">{skillName}</h2>
                <p>{description}</p>
                <div className=' flex  justify-between font-semibold mt-3'>
                    <div>
                        <p className=''>Rating: {rating}</p>
                    <p>Price: <span>{price}</span> $</p>
                    </div>
                    <Link to={`/skills/${skill.skillId}`} className="btn btn-primary text-white">View Details</Link>
                </div>
                <div className="card-actions flex w-full justify-center">
                    
                </div>
            </div>
        </div>
    );
};

export default PopularCard;