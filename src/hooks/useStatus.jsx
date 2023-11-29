import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getStatus } from './auth';

const useStatus = () => {
    const {user} = useAuth()
    const [status, setStatus] = useState(null)
    useEffect(() => {
        getStatus(user?.email)
        .then(data => setStatus(data))
    },[user])

    return [status]
};

export default useStatus;