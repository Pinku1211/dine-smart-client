import { useLoaderData, useLocation } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "../../components/Shared/Header/Header";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";
import { saveOrderedMeal } from "../../hooks/auth";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useUsers from "../../hooks/useUsers";

const MealDetails = () => {
    const [like, setLike] = useState(false)
    const { user } = useAuth()
    const meal = useLoaderData();
    const [users, refetch] = useUsers()
    const { meal_title, meal_image, rating, price, _id, admin_name, description, ingredients, post_time, reviews } = meal;
    const verifiedUser = users?.find(userDb => userDb.email === user.email)
    const handleOrder = async () => {
        try {
            // save user to the database
            if (verifiedUser.status != "Bronze") {
                await saveOrderedMeal(meal, user)
                toast.success("successfully ordered!")
            }else{
                toast.error("Please buy our package first!")
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="my-10">
            <Container>
                <Header title='Our Latest Item' subTitle='Test the Food'></Header>
                <div className="card rounded-sm lg:h-96 lg:card-side bg-base-100 shadow-xl">
                    <figure className="flex-1"><img className='w-full h-96 lg:h-full object-cover' src={meal_image} alt="Album" /></figure>
                    <div className="card-body flex-1">
                        <h2 className="text-2xl font-bold text-myColor h-fit">{meal_title}</h2>
                        <p className='font-semibold h-fit'>Distributor: {admin_name}</p>
                        <p className='font-semibold'>Description: {description}</p>
                        <p className='font-semibold'>Ingredients: {ingredients}</p>
                        <p className='font-semibold'>Post Time: {post_time}</p>
                        <p className='font-semibold'>Rating: {rating}</p>
                        <p className='font-semibold'>Price: ${price}</p>
                        <div className="flex justify-between items-center gap-8">
                            <div className="flex flex-col justify-center items-center">
                                <button onClick={() => setLike(true)} className={` ${like ? "px-6 py-2 bg-white font-semibold text-red-500 rounded-xl mt-4" : "px-6 py-2 font-semibold text-red-500 rounded-xl mt-4 hover:scale-125 transition-all ease-in-out"}`}><FaHeart className={`${like ? "text-4xl" : "text-2xl"}`}></FaHeart></button>
                                <h1 className={`${like ? "text-red-400 font-bold" : "text-myColor mb-4 font-bold"}`}>
                                    {
                                        like ? "Thanks for the love" : "Please like us"
                                    }
                                </h1>
                            </div>
                            <button onClick={handleOrder} className="px-6 py-2 bg-red-400 font-semibold text-white border-b-4 border-red-300 rounded-xl hover:scale-110 transition-all ease-in-out">Request</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 w-full rounded-md">
                    <h1 className="my-4 font-semibold text-xl text-red-400"> Our Customer Says</h1>
                    {
                        reviews?.map((review, idx) => <div key={idx}>
                            <h1 className=" font-semibold"># {
                                review.user
                            }
                            </h1>
                            <h1 className=" font-semibold"> Reviews: {
                                <span>{review.comment}</span>
                            }
                            </h1>
                        </div>)
                    }
                </div>
                <div className="py-8 px-4">
                    <h1 className="mb-6 text-xl font-semibold">Add your valuable comment:</h1>
                    <input type="text-area" className="textarea textarea-accent w-full" />
                </div>
            </Container>
        </div>
    );
};

export default MealDetails;