import React, { useState } from 'react';
import { addLikedMeal, getDislike, getLike } from '../../hooks/auth';
import { FaHeart } from "react-icons/fa6";
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useUsers from '../../hooks/useUsers';
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";

const UpcomingCard = ({ meal, refetch }) => {
    const { meal_title, meal_image, rating, _id, price, likes, description, ingredients, post_time } = meal;
    const { user } = useAuth()
    const [users] = useUsers();
    console.log(users)
    const currentUser = users?.find(userDb => userDb?.email === user?.email) || null;
    console.log(currentUser)
    let like = false
    if(currentUser?.likedMeals?.includes(meal_title)){
        like = true
    }

    const handleLike = async (id) => {    
        const mealTitle = {meal_title}
        console.log(mealTitle)
        if(currentUser.likedMeals.includes(meal_title)){
            return toast.error("you already liked it")
        }else{
            try {
                await addLikedMeal(currentUser?.email, mealTitle)
                await getLike(id)
                await refetch()
                toast.success('Thanks for the love!')
                like = true
    
            } catch (error) {
                console.log(error)
            }
        }
        

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
                <button onClick={() => handleLike(_id)} className='text-red-600 font-bold text-3xl hover:scale-125 transition-all ease-in-out duration-200'>{ like ? <AiFillLike></AiFillLike> : <AiOutlineLike></AiOutlineLike> }</button>
            </div>
        </div>
        
    );
};

export default UpcomingCard;