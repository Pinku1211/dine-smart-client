import React from 'react';
import { Link } from 'react-router-dom';
import { IoStarOutline } from "react-icons/io5";

const TabCard = ({ meal }) => {

    const { meal_title, meal_image, rating, price, _id, meal_type } = meal;

    return (
        <Link to={`/meal/${_id}`}>
            <div>
                <a href="#" className="group relative block bg-black">
                    <img
                        alt="Developer"
                        src={meal_image}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />

                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <h2 className="text-2xl font-bold text-white">{meal_title}</h2>
                        <h2 className="text-2xl font-bold text-white">{meal_type}</h2>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <p className='text-white font-semibold'>Price: ${price}</p>
                                <p className='text-white font-semibold'>Rating: {rating} <IoStarOutline /></p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </Link>
    );
};

export default TabCard;