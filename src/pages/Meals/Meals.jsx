import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Shared/Container';
import useMeals from '../../hooks/useMeals';
import TabCard from '../Home/TabCard';
import Header from '../../components/Shared/Header/Header';

const Meals = () => {
    const [price, setPrice] = useState([0, 100])
    const [searchText, setSearchText] = useState('')
    const [category, setCategory] = useState('')
    const [meals] = useMeals()
    console.log(meals)
    console.log(price)
    console.log(searchText)
    console.log(category)
    const handleSubmit = e => {
        e.preventDefault()
        setSearchText('')
        const form = e.target;
        const searchedText = form.title.value
        setSearchText(searchedText)

    }

    const handleCategory = e => {
        e.preventDefault()
        setCategory('')
        const form = e.target;
        const searchedCategory = form.value
        setCategory(searchedCategory)

    }
    const handlePrice = e => {
        e.preventDefault()
        setPrice([1, 100])
        const form = e.target;
        const searchedPrice = [parseInt(form.value.split('-')[0]), parseInt(form.value.split('-')[1])]
        setPrice(searchedPrice)

    }


    return (
        <div className='my-16'>
            <Helmet><title>DineSmart | Meals</title></Helmet>
            <Container>
                <Header title='All Meals We have'></Header>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-4 mb-10'>
                    <form onSubmit={handleSubmit} className='flex'>
                        <div class="">
                            <label for="hs-hero-name-1" class="block text-sm font-medium"><span class="sr-only"></span></label>
                            <input name='title' type="text" placeholder="Search meal by title" className="input input-bordered input-accent rounded-r-none w-full" />
                        </div>
                        <div class="sm:pt-0 grid ">
                            <button type='submit' class="px-2 inline-flex justify-center items-center gap-2 rounded-r-lg border border-transparent font-semibold bg-myColor text-white focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 transition-all text-sm" href="#">
                                Search
                            </button>
                        </div>
                    </form>
                    <select onChange={handleCategory} defaultValue='option1' className="select select-accent w-full max-w-xs">
                        <option disabled value='option1'>Filter by category</option>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                    </select>
                    <select onChange={handlePrice} defaultValue='option1' className="select select-accent w-full max-w-xs">
                        <option disabled value='option1'>Filter by price range($)</option>
                        <option>6 - 10</option>
                        <option>10 - 15</option>
                        <option>15 - 20</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        meals?.map(meal => <TabCard key={meal._id} meal={meal}></TabCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Meals;