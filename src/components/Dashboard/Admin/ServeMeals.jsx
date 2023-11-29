import React from 'react';
import useReqMeal from '../../../hooks/useReqMeal';
import Header from '../../Shared/Header/Header';
import { updateMealStatus } from '../../../hooks/auth';
import toast from 'react-hot-toast';

const ServeMeals = () => {
    const [reqMeals, refetch] = useReqMeal()

    const handleDeliver = async (id) => {
        try{
            await updateMealStatus(id)
            refetch()
            toast.success('successfully updated!')
        }catch(error){
            console.log(error)
        }
    }


    return (
        <div>
            <Header title='Serve Meal Details'></Header>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Meal Title</th>
                            <th>User Email</th>
                            <th>User Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reqMeals?.map((meal, idx) => <tr key={meal._id}>
                            <th>{idx + 1}</th>
                            <td>{meal.meal_title}</td>
                            <td>{meal.email}</td>
                            <td>{meal.user_name}</td>
                            <td>{meal.status}</td>
                            <td><button onClick={() => handleDeliver(meal._id)} className="px-6 py-2 bg-myColor font-semibold text-white rounded-lg hover:scale-110 transition-all ease-in-out" >Deliver</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServeMeals;