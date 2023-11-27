import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getRole } from './auth';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user} = useAuth()
    const [role, setRole] = useState(null)
    useEffect(() => {
        getRole(user?.email)
        .then(data => setRole(data))
    },[user])
    // const {data: role=[]} = useQuery({
    //     queryKey: ['role'],
    //     queryFn: async () => {
    //         const response = await getRole(user?.email)
    //         return response.data;
    //     }
    // })

    return [role]
};

export default useRole;