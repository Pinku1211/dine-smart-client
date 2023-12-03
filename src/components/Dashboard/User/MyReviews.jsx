import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import useReview from '../Admin/useReview';
import Header from '../../Shared/Header/Header';
import { Link } from 'react-router-dom';
import { MdOutlineSystemUpdateAlt } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { deleteComment, updateComment } from '../../../hooks/auth';
import toast from 'react-hot-toast';
import { MdEdit } from "react-icons/md";

const MyReviews = () => {
    const { user } = useAuth();
    // const [reviews, setReviews] = useState([])
    const [meals, refetch] = useReview(user?.displayName);
    console.log(meals)
    // const usersComment = meals?.map(meal => meal?.reviews?.find(review => review?.user === user?.displayName)?.comment)
    // console.log(usersComment)

    const handleDelete = async (name, comment) => {
        console.log(name, comment)
        try {
            await deleteComment(name, comment);
            toast.success('deleted')
            await refetch()
        }
        catch {
            (error) =>
                console.log(error)
        }
    }

    const handleUpdate = async (e, meal) => {
        e.preventDefault();
        console.log(e.target.editedReview.value, meal);
        const currentComment = {editedComment: e.target.editedReview.value};
        console.log(currentComment)
        const prevComment = await meal?.reviews?.find(review => review?.user === user?.displayName)?.comment
        console.log(prevComment)

        try {
            await updateComment(user?.displayName, prevComment, currentComment);
            toast.success('edited')
            await refetch()
        }
        catch {
            (error) =>
                console.log(error)
        }

    }



    return (
        <div>
            <Header title="All Reviews"></Header>
            {
                meals?.length === 0 ? <div><center className='mt-20'>No data</center></div>
                    : <div className="overflow-x-auto">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>Meal Title</th>
                                    <th>Likes</th>
                                    <th>Reviews</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>View Details</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                {
                                    meals?.map((meal, idx) => <tr key={meal._id}>
                                        <th>{1 + idx}</th>
                                        <td>{`${meal.meal_title}`}</td>
                                        <td>{`${meal.likes}`}</td>
                                        <td>{`${meal.reviews?.length}`}</td>
                                        <td>
                                            {/* <button className="px-6 py-2 bg-slate-100 font-semibold text-green-800 hover:scale-110 rounded-xl"><MdOutlineSystemUpdateAlt></MdOutlineSystemUpdateAlt></button> */}
                                            <button className="px-6 py-2 bg-slate-100 font-semibold text-green-800 hover:scale-110 rounded-xl" onClick={() => document.getElementById('my_modal_5').showModal()}><MdEdit></MdEdit></button>
                                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <h3 className="font-bold text-lg mb-2">Your Comment</h3>
                                                    <center>
                                                        <form onSubmit={async (e) => handleUpdate(e, meal)} className='flex justify-center w-full'>
                                                            <div class="">
                                                                <label for="hs-hero-name-1" class="block text-sm font-medium"><span class="sr-only"></span></label>
                                                                <input name='editedReview' required type="text" className="rounded-l-lg p-3 border-gray-400 border-2" />
                                                            </div>
                                                            <div class="sm:pt-0 grid ">
                                                                <button type='submit' class="px-6 inline-flex justify-center items-center gap-2 rounded-r-lg border border-transparent font-semibold bg-myColor text-white focus:outline-none transition-all text-sm" href="#">
                                                                    Edit
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </center>
                                                    <div className="modal-action">
                                                        <form method="dialog">
                                                            <button className="btn">Cancel</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </td>
                                        <td><button onClick={() => handleDelete(user?.displayName, meal.reviews.find(review => review?.user === user.displayName).comment)} className="px-6 py-2 font-semibold bg-slate-100 text-myColor hover:scale-110 rounded-xl"><BsTrash></BsTrash></button></td>
                                        <td><Link to={`meal/${meal._id}`}><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor hover:scale-110 border-b-4 border-myColor rounded-xl">Details</button></Link></td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyReviews;