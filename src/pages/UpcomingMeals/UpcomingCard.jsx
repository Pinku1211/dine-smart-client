import React, { useState } from 'react';
import { getDislike, getLike } from '../../hooks/auth';
import { FaHeart } from "react-icons/fa6";

const UpcomingCard = ({ meal, refetch }) => {
    const [liked, setLiked] = useState(false)

    const { meal_title, meal_image, rating, _id, price, likes, description, ingredients, post_time } = meal;

    const handleLike = async (id) => {
        try {
            if (!liked) {
                await getLike(id)
                await refetch()
            }else{
                await getDislike(id)
                await refetch()
            }         

        } catch (error) {
            console.log(error)
        }
        setLiked(!liked)
    }

    return (
        <div className="card bg-base-100 shadow-xl pb-8">
            <figure><img className='w-full h-56' src={meal_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-myColor">{meal_title}</h2>
                <p className='text-myColor font-semibold'>Description: {description}</p>
                <p className='text-myColor font-semibold'>Ingredients: {ingredients}</p>
                <p className='text-myColor font-semibold'>Post Time: {post_time}</p>
                <p className='text-myColor font-semibold'>Price: ${price}</p>
                <p className='text-myColor font-semibold'>Rating: {rating}</p>
                <p className='text-myColor font-semibold'>Likes: {likes}</p>
            </div>
            <div className="card-actions justify-start ml-8">
                <button onClick={() => handleLike(_id)}><FaHeart className='text-red-600 font-bold text-3xl hover:scale-125 transition-all ease-in-out duration-200'></FaHeart></button>
                {
                    liked && <p className='text-red-500'>You liked it</p>
                }
            </div>
        </div>
    );
};

export default UpcomingCard;