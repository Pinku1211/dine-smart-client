import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "../../components/Shared/Header/Header";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { saveOrderedMeal } from "../../hooks/auth";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const MealDetails = () => {
    const [like, setLike] = useState(false)
    const { user } = useAuth()
    const meal = useLoaderData();
    console.log(meal)
    const { meal_title, meal_image, rating, price, _id, admin_name, description, ingredients, post_time, reviews } = meal;

    const handleOrder = async () => {
        try {
            // save user to the database
            const savedMeal = await saveOrderedMeal(meal, user)
            console.log(savedMeal)
            toast.success("successfully ordered!")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="my-10">
            <Container>
                <Header title='Our Latest Item' subTitle='Test the Food'></Header>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="flex-1"><img className='w-full h-96 lg:h-full object-cover' src={meal_image} alt="Album" /></figure>
                    <div className="card-body flex-1">
                        <h2 className="text-2xl font-bold text-myColor">{meal_title}</h2>
                        <p className='text-myColor font-semibold'>Distributor: {admin_name}</p>
                        <p className='text-myColor font-semibold'>Description: {description}</p>
                        <p className='text-myColor font-semibold'>Ingredients: {ingredients}</p>
                        <p className='text-myColor font-semibold'>Post Time: {post_time}</p>
                        <p className='text-myColor font-semibold'>Rating: {rating}</p>
                        <p className='text-myColor font-semibold'>Price: {price}</p>
                        <div className="flex justify-between items-center gap-8">
                            <div className="flex flex-col justify-center items-center">
                                <button onClick={() => setLike(true)} className={` ${like ? "px-6 py-2 bg-white font-semibold text-red-500 rounded-xl mt-4" : "px-6 py-2 bg-slate-100 font-semibold text-red-500 rounded-xl mt-4 hover:scale-125 transition-all ease-in-out"}`}><FaHeart className={`${like ? "text-4xl" : "text-2xl"}`}></FaHeart></button>
                                <h1 className={`${like ? "text-red-400 font-bold" : "text-myColor mb-4 font-bold"}`}>
                                    {
                                        like ? "Thanks for the love" : "Please like us"
                                    }
                                </h1>
                            </div>
                            <button onClick={handleOrder} className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl hover:scale-110 transition-all ease-in-out">Request</button>
                        </div>
                        <div className="p-4 w-full border-2 rounded-md">
                            <h1 className="text-center mb-4 font-semibold text-xl text-red-400"> Our Customer Says</h1>
                            {
                                reviews?.map((review, idx) => <div key={idx}>
                                    <h1 className="text-myColor font-semibold"># {
                                        review.user
                                    }
                                    </h1>
                                    <h1 className="text-myColor font-semibold"> Reviews: {
                                        <span className="text-red-400">{review.comment}</span>
                                    }
                                    </h1>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <div className="py-8 px-10">
                    <h1 className="mb-6 text-xl font-semibold">Add your valuable comment:</h1>
                    <input type="text-area" className="textarea textarea-accent w-full" />
                </div>
            </Container>
        </div>
    );
};

export default MealDetails;