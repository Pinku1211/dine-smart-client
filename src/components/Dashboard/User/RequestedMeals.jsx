import React from 'react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { deleteReqMeal } from '../../../hooks/auth';
import Header from '../../Shared/Header/Header';
import useReqMeal from '../../../hooks/useReqMeal';
import useAuth from '../../../hooks/useAuth';
import { Empty, EmptyProductBoxIcon } from 'rizzui';

const RequestedMeals = () => {
    const {user} = useAuth()
    const [reqMeals, refetch] = useReqMeal()

    const filteredMeals = reqMeals.filter(meal => meal.email === user?.email)

    const handleCancel = id => {
        console.log('cancelled', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteReqMeal(id)
                refetch()
                toast.success("successfully deleted")
            }
        });
    }
    return (
        <div> 
            <Header title='Your Order'></Header>
            {
                filteredMeals.length === 0 ? <Empty image={<EmptyProductBoxIcon />} text="No Result Found" /> : <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Meal Title</th>
                            <th>Likes Count</th>
                            <th>Reviews Count</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredMeals?.map((meal, idx) => <tr key={meal._id}>
                            <th>{1 + idx}</th>
                            <td>{meal.meal_title}</td>
                            <td>{meal.likes}</td>
                            <td>{meal.reviews ? meal.reviews : 0}</td>
                            <td>{meal.status}</td>
                            <td><button onClick={() => handleCancel(meal._id)} className={"px-6 py-2 bg-myColor font-semibold text-white rounded-lg hover:scale-110 transition-all ease-in-out"} >Cancel</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            }
            
            
        </div>
    );
};

export default RequestedMeals;