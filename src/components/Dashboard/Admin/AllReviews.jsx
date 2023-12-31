import React, { useState } from 'react';
import useMeals from '../../../hooks/useMeals';
import Swal from 'sweetalert2';
import { deleteMeal } from '../../../hooks/auth';
import toast from 'react-hot-toast';
import Header from '../../Shared/Header/Header';
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { arSA } from 'date-fns/locale';

const AllReviews = () => {
    
    const [meals, refetch] = useMeals();
    // const allReviews = []
    // meals?.map(meal => { meal.reviews.map(review => allReviews.push(review)) })
    // console.log(allReviews)

    const handleDelete = (id) => {
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
                await deleteMeal(id)
                await refetch();
                toast.success("successfully deleted")


            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <Header title="All Reviews"></Header>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Meal Title</th>
                            <th>Likes</th>
                            <th>Reviews</th>
                            <th>Delete</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meals?.map((meal, idx) => <tr key={meal._id}>
                                <th>{1 + idx}</th>
                                <td>{`${meal.meal_title}`}</td>
                                <td>{`${meal.likes}`}</td>
                                <td>{`${meal.reviews?.length}`}</td>
                                <td><button onClick={() => handleDelete(meal._id)} className="px-6 py-2 font-semibold bg-slate-100 text-myColor hover:scale-110 rounded-xl"><BsTrash></BsTrash></button></td>
                                <td><Link to={`meal/${meal._id}`}><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor hover:scale-110 border-b-4 border-myColor rounded-xl">Details</button></Link></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReviews;