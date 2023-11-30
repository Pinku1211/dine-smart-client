import React, { useState } from 'react';
import useReqMeal from '../../../hooks/useReqMeal';
import Header from '../../Shared/Header/Header';
import { updateMealStatus } from '../../../hooks/auth';
import toast from 'react-hot-toast';
import { Empty } from 'rizzui';

const ServeMeals = () => {
    const [search, setSearch] = useState('')
    const [email, setEmail] = useState('')
    const [reqMeals, refetch] = useReqMeal(search, email);
    console.log(search)
    const handleDeliver = async (id) => {
        try {
            await updateMealStatus(id)
            refetch()
            toast.success('successfully updated!')
        } catch (error) {
            console.log(error)
        }
    }


    const handleName = e => {
        e.preventDefault();
        const searchedName = e.target.name.value;
        console.log(searchedName)
        setSearch(searchedName)
    }
    const handleEmail = e => {
        e.preventDefault();
        const searchedEmail = e.target.email.value;
        console.log(searchedEmail)
        setEmail(searchedEmail)
    }

    return (
        <div>
            <Header title='Serve Meal Details'></Header>
            <h1 className='text-center text-2xl font-bold mb-10'>Find A customer</h1>
            <div className='flex justify-center mb-10 gap-4'>
                <form onSubmit={handleName} className='flex'>
                    <div class="">
                        <label for="hs-hero-name-1" class="block text-sm font-medium"><span class="sr-only"></span></label>
                        <input name='name' type="text" placeholder="Search by name" className="input input-bordered input-accent rounded-r-none w-full" />
                    </div>
                    <div class="sm:pt-0 grid ">
                        <button type='submit' class="px-2 inline-flex justify-center items-center gap-2 rounded-r-lg border border-transparent font-semibold bg-myColor text-white focus:outline-none transition-all text-sm" href="#">
                            Search
                        </button>
                    </div>
                </form>
                <form onSubmit={handleEmail} className='flex'>
                    <div class="">
                        <label for="hs-hero-name-1" class="block text-sm font-medium"><span class="sr-only"></span></label>
                        <input name='email' type="text" placeholder="Search by email" className="input input-bordered input-accent rounded-r-none w-full" />
                    </div>
                    <div class="sm:pt-0 grid ">
                        <button type='submit' class="px-2 inline-flex justify-center items-center gap-2 rounded-r-lg border border-transparent font-semibold bg-myColor text-white focus:outline-none transition-all text-sm" href="#">
                            Search
                        </button>
                    </div>
                </form>
            </div>
            {
                reqMeals?.length === 0 ? <Empty text="No Data" textClassName="mt-2" /> : <div className="overflow-x-auto">
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
                                    {
                                        meal.status === 'delivered' ? <td></td> : <td><button onClick={() => handleDeliver(meal._id)} className={"px-6 py-2 bg-myColor font-semibold text-white rounded-lg hover:scale-110 transition-all ease-in-out"} >Deliver</button></td>
                                    }
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default ServeMeals;