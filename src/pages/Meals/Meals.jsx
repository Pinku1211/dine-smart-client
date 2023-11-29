import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/Shared/Container';
import useMeals from '../../hooks/useMeals';
import TabCard from '../Home/TabCard';
import Header from '../../components/Shared/Header/Header';

const Meals = () => {
    const [meals] = useMeals()
    console.log(meals)
    return (
        <div className='my-16'>
            <Helmet><title>DineSmart | Meals</title></Helmet>
            <Container>
                <Header title='All Meals We have'></Header>
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