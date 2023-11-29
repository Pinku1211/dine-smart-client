import React from 'react';
import useReqMeal from '../../../hooks/useReqMeal';

const RequestedMeals = () => {
    const [reqMeals] = useReqMeal()
    console.log(reqMeals)
    return (
        <div>
            requested meals
        </div>
    );
};

export default RequestedMeals;