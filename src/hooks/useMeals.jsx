import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMeals = () => {
    const axiosPublic = useAxiosPublic()
    // use query
    const {data: meals=[]} = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const response = await axiosPublic.get('/meals')
            return response.data;
        }
    })


    return [meals];
};

export default useMeals;