import React from 'react';
import useUpcoming from '../../../hooks/useUpcoming';
import Header from '../../Shared/Header/Header';
import { Empty } from 'rizzui';
import { addMeal, deleteUpcomingMeal, getAnUpcomingMeal } from '../../../hooks/auth';
import toast from 'react-hot-toast';

const Upcoming = () => {
    const [upcomingMeal, refetch] = useUpcoming()
    console.log(upcomingMeal)

    const handlePublish = async id => {
        const meal = await getAnUpcomingMeal(id)
        console.log(meal)
        if (meal?.likes >= 10) {
            try {
                const newMeal = { meal_title: meal.meal_title, meal_type: meal.meal_type, meal_image: meal.meal_image, ingredients: meal.ingredients, description: meal.description, price: meal.price, rating: meal.rating, post_time: meal.post_time, likes: meal.likes, reviews: meal.reviews, admin_name: meal.admin_name, admin_email: meal.admin_email }
                await addMeal(newMeal)
                await deleteUpcomingMeal(id)
                toast.success("successfully published!")
                await refetch()

            } catch (error) {
                console.log(error)
            }

        } else {
            toast.error("Likes should be more than 10")
        }

    }
    return (
        <>
            {
                upcomingMeal?.length === 0 ? <Empty text="No Data" textClassName="mt-2" /> : <div className="overflow-x-auto">
                    <Header title="Upcoming Meals"></Header>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal Title</th>
                                <th>Likes</th>
                                <th>Distributor Name</th>
                                <th>Distributor Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                upcomingMeal?.map((meal, idx) => <tr key={meal._id}>
                                    <th>{1 + idx}</th>
                                    <td>{meal.meal_title}</td>
                                    <td>{meal.likes}</td>
                                    <td>{meal.admin_name}</td>
                                    <td>{meal.admin_email}</td>
                                    <td><button onClick={() => handlePublish(meal._id)} className="px-6 py-2 bg-myColor font-semibold text-white hover:scale-110 rounded-xl">Publish</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            }
        </>

    );
};

export default Upcoming;