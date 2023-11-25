import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useMeals = () => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {data: meals=[]} = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const response = await axiosSecure.get('/meals')
            return response.data;
        }
    })


    return [meals];
};

export default useMeals;

