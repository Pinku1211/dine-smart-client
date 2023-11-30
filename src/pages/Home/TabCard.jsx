import React from 'react';
import { Link } from 'react-router-dom';

const TabCard = ({ meal }) => {

    const { meal_title, meal_image, rating, price, _id } = meal;

    return (
        <div className="card bg-base-100 shadow-xl pb-8">
            <figure><img className='w-full h-64' src={meal_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-myColor">{meal_title}</h2>
                <p className='text-myColor font-semibold'>Price: ${price}</p>
                <p className='text-myColor font-semibold'>Rating: {rating}</p>
            </div>
            <div className="card-actions justify-center">
                <Link to={`/meal/${_id}`}><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl">Details</button></Link>
            </div>
        </div>
    );
};

export default TabCard;