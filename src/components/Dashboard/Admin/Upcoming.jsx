import React from 'react';
import useUpcoming from '../../../hooks/useUpcoming';
import Header from '../../Shared/Header/Header';

const Upcoming = () => {
    const [upcomingMeal, refetch] = useUpcoming()
    console.log(upcomingMeal)
    return (
        <div className="overflow-x-auto">
                <Header title="All Meals"></Header>
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
                                <td><button className="px-6 py-2 bg-myColor font-semibold text-white hover:scale-110 rounded-xl">Publish</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
    );
};

export default Upcoming;