import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Header from '../../Shared/Header/Header';
import { imageUpload } from '../../../hooks/imageUpload';
import { updateMeal } from '../../../hooks/auth';
import toast from 'react-hot-toast';

const Update = () => {
    const meal = useLoaderData()
    const { meal_title, meal_type, _id, meal_image, ingredients, description, price, rating, post_time, likes, admin_name, admin_email } = meal;
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const image = data?.meal_image[0]
        const imageData = await imageUpload(image)
        console.log(imageData)
        const meal_title = data?.meal_title
        const meal_type = data?.meal_type
        const meal_image = imageData?.data?.display_url
        const ingredients = data?.ingredients
        const description = data?.description
        const price =  data?.price
        const rating = data?.rating
        const post_time = data?.post_time
        const likes = data?.likes
        const admin_name = data?.admin_name
        const admin_email = data?.admin_email

        const newMeal = { meal_title, meal_type, meal_image, ingredients, description, price, rating, post_time, likes, admin_name, admin_email }
        console.log(newMeal)
        try {
            const updatedMeal = await updateMeal(_id, newMeal)
            console.log(updatedMeal)
            toast.success("successfully updated")
        } catch (error) {
            console.log(error)
            toast.error("oops! something wrong.")
        }
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <Header title='Update MEAL'></Header>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Meal Title</label>
                    <input
                        {...register("meal_title", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Meal title"
                        defaultValue={meal_title}
                    />
                    {errors.name && <span className='text-red-600'>Name is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Meal Type</label>
                    <input
                        {...register("meal_type", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Meal type"
                        defaultValue={meal_type}
                    />
                    {errors.name && <span className='text-red-600'>Name is required</span>}
                </div>
                <div className='px-4'>
                    <label for='image' className='block mb-2 text-sm text-gray-400'>
                        Select Image:
                    </label>
                    <input
                        {...register("meal_image", { required: true })}
                        type='file'
                        id='image'
                        accept='image/*'
                        // defaultValue={meal_image}
                    />
                    {errors.image && <span className='text-red-600'>Image is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Ingredients</label>
                    <input
                        {...register("ingredients", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Ingredients"
                        defaultValue={ingredients}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Description</label>
                    <input
                        {...register("description", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Description"
                        defaultValue={description}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Price</label>
                    <input
                        {...register("price", { required: true })}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Price"
                        defaultValue={price}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Rating</label>
                    <input
                        {...register("rating", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Rating"
                        defaultValue={rating}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Posting Date</label>
                    <input
                        {...register("post_time", { required: true })}
                        type="date"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Time"
                        defaultValue={post_time}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Likes Count</label>
                    <input
                        {...register("likes", { required: true })}
                        type="number"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Likes count"
                        defaultValue={likes}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Distributor Name</label>
                    <input
                        {...register("admin_name", { required: true })}
                        type="text"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Admin Name"
                        defaultValue={admin_name}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="relative">
                    <label className='ml-2 text-gray-400'>Distributor Email</label>
                    <input
                        {...register("admin_email", { required: true })}
                        type="email"
                        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Admin Email"
                        defaultValue={admin_email}
                    />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <button
                    type="submit"
                    className="block w-full rounded-lg bg-myColor px-5 py-3 text-sm font-medium text-white"
                >
                    Update
                </button>

            </form>
        </div>
    );
};

export default Update;