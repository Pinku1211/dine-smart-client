import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getAdminsMeals } from './auth';

const useAdminMeal = () => {
    const {user} = useAuth()
    const [adminMeal, setAdminMeal] = useState([])
    useEffect(() => {
        getAdminsMeals(user?.email)
        .then(data => setAdminMeal(data))
    },[user])

    return [adminMeal]
};

export default useAdminMeal;