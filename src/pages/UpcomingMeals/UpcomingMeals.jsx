import React from 'react';
import { Helmet } from 'react-helmet-async';
import useUpcoming from '../../hooks/useUpcoming';
import Header from '../../components/Shared/Header/Header';
import Container from '../../components/Shared/Container';
import UpcomingCard from './UpcomingCard';

const UpcomingMeals = () => {
    const [upcomingMeal, refetch] = useUpcoming();
    console.log(upcomingMeal)
    return (
        <div className='py-10'>
            <Helmet><title>DineSmart | UpcomingMeals</title></Helmet>
            <Container>
                <Header title='Upcoming Meals'></Header>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        upcomingMeal?.map(meal => <UpcomingCard key={meal._id} meal={meal} refetch={refetch}></UpcomingCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default UpcomingMeals;