import { useEffect, useState } from 'react';
import { getUsers } from './auth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const axiosSecure = useAxiosSecure()
    // use query
    const {refetch, data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get('/users')
            return response.data;
        }
    })

    return [users, refetch];
};

export default useUsers;