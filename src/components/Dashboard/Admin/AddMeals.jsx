import React from 'react';
import { useForm } from 'react-hook-form'
import Header from '../../Shared/Header/Header';
import useAuth from '../../../hooks/useAuth';
import { addMeal } from '../../../hooks/auth';
import { imageUpload } from '../../../hooks/imageUpload';

const AddMeals = () => {
    const { user } = useAuth()
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
        const price = data?.price
        const rating = data?.rating
        const post_time = data?.post_time
        const likes = data?.likes
        const admin_name = data?.admin_name
        const admin_email = data?.admin_email

        const newMeal = {meal_title, meal_type, meal_image, ingredients, description, price, rating, post_time, likes, admin_name, admin_email}
        try {
            const savedMeal = await addMeal(newMeal)
            console.log(savedMeal)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <Header title='ADD A MEAL'></Header>
                    <div className="relative">
                        <input
                            {...register("meal_title", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Meal title"
                        />
                        {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("meal_type", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Meal type"
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
                        />
                        {errors.image && <span className='text-red-600'>Image is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("ingredients", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Ingredients"
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("description", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Description"
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Price"
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("rating", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Rating"
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("post_time", { required: true })}
                            type="time"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Time"
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("likes", { required: true })}
                            type="number"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Likes count"
                            defaultValue={0}
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("admin_name", { required: true })}
                            type="text"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Admin Name"
                            defaultValue={user?.displayName}
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="relative">
                        <input
                            {...register("admin_email", { required: true })}
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Admin Email"
                            defaultValue={user?.email}
                        />
                        {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="block w-full rounded-lg bg-myColor px-5 py-3 text-sm font-medium text-white"
                    >
                        Add
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddMeals;