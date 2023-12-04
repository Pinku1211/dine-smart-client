import { useLoaderData } from "react-router-dom";
import Container from "../../components/Shared/Container";
import Header from "../../components/Shared/Header/Header";
import { addComment, addLike, addLikedMeal, saveOrderedMeal } from "../../hooks/auth";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useUsers from "../../hooks/useUsers";
import avatarImg from '../../assets/images/anonymous.jpg';
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";

const MealDetails = () => {
    const { user } = useAuth()
    const meal = useLoaderData();
    const [users, refetch] = useUsers();
    const { meal_title, meal_image, rating, price, _id, admin_name, description, likes, ingredients, post_time, reviews } = meal;
    const currentUser = users?.find(userDb => userDb.email === user.email);
    const [postedComment, setPostedComment] = useState(reviews)
    console.log(currentUser)
    let like = false
    if(currentUser?.likedMeals.includes(meal_title)){
        like = true
    }

    const handleLike = async () => {    
        const mealTitle = {meal_title}
        if(!currentUser.likedMeals.includes(meal_title)){
            try {
                await addLikedMeal(currentUser?.email, mealTitle)
                await addLike(_id)
                await refetch()
                like = true
    
            } catch (error) {
                console.log(error)
            }
        }
        

    }

    const handleOrder = async () => {
        try {
            // save user to the database
            if (currentUser.status != "Bronze") {
                await saveOrderedMeal(meal, user)
                toast.success("successfully ordered!")
            } else {
                toast.error("Please buy our package first!")
            }

        } catch (error) {
            console.log(error)
        }
    }

    // save comment
    const handleSubmit = async e => {
        e.preventDefault()
        let inputValue = e.target.comment.value;
        const newComment = { user: user?.displayName, photo: user?.photoURL, comment: inputValue }
        console.log(newComment)
        const data = await addComment(_id, newComment)
        console.log(data)
        const newReviews = [...postedComment, newComment]
        setPostedComment(newReviews)
        
    }

    return (
        <div className="my-10">
            <Container>
                <Header title='Our Latest Item' subTitle='Test the Food'></Header>
                <div className="card rounded-sm lg:h-96 lg:card-side bg-base-100 shadow-xl">
                    <figure className="flex-1"><img className='w-full h-96 lg:h-full object-cover' src={meal_image} alt="Album" /></figure>
                    <div className="card-body flex-1">
                        <h2 className="text-2xl font-bold text-myColor h-fit">{meal_title}</h2>
                        <p className='font-semibold text-gray-500'>Distributor: {admin_name}</p>
                        <p className='font-semibold text-gray-500'>Description: {description}</p>
                        <p className='font-semibold text-gray-500'>Ingredients: {ingredients}</p>
                        <p className='font-semibold text-gray-500'>Post Time: {post_time}</p>
                        <p className='font-semibold text-gray-500'>Rating: {rating}</p>
                        <p className='font-semibold text-gray-500'>Price: ${price}</p>
                        <p className='font-semibold text-gray-500'>Likes: {likes}</p>
                        <div className="flex justify-between items-center gap-8">
                            <div className="flex flex-col justify-center items-center">
                                <button onClick={handleLike} className={` ${like ? "px-6 py-2 bg-white font-semibold text-red-500 rounded-xl mt-4" : "px-6 py-2 font-semibold text-red-500 rounded-xl mt-4 hover:scale-125 transition-all ease-in-out"}`}>{like ? <AiFillLike className="text-4xl"></AiFillLike> : <AiOutlineLike className="text-4xl"></AiOutlineLike>}</button>
                                {/* <h1 className={`${like ? "text-red-400 font-bold" : "text-myColor mb-4 font-bold"}`}>
                                    {
                                        like ? "Thanks for the love" : "Please like us"
                                    }
                                </h1> */}
                            </div>
                            <button onClick={handleOrder} className="px-6 py-2 bg-red-400 font-semibold text-white border-red-300 rounded-sm hover:scale-110 transition-all ease-in-out">Request</button>
                        </div>
                    </div>
                </div>
                <div className="p-4 w-full rounded-md">
                    <h1 className="my-4 font-semibold text-xl text-red-400"> Our Customer Says</h1>
                    {
                        postedComment?.map((review, idx) => <div key={idx}>
                            <div className="flex items-center">
                                <img className="rounded-full w-8 mr-2 object-cover" src={review?.photo ? review.photo : avatarImg} alt="" />
                                <h1 className=" font-semibold">{review?.user}</h1>
                            </div>
                            <h1 className=" font-semibold ml-10">{<span className="text-gray-500">{review?.comment}</span>}</h1>
                            <hr className="my-2 w-1/2" />
                        </div>)
                    }
                </div>
                <div className="py-8 px-4">
                    <h1 className="mb-6 text-xl font-semibold">Add your valuable comment:</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <input name="comment" type="text-area" required className="textarea textarea-accent w-1/2" />
                        <input type="submit" value="comment" className="px-6 py-2 bg-red-400 font-semibold text-white cursor-pointer border-red-300 rounded-sm hover:scale-110 duration-150 transition-all ease-in-out mt-4 w-[150px]" />
                    </form>


                </div>
            </Container>
        </div>
    );
};

export default MealDetails;