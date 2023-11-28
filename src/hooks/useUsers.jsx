import { useEffect, useState } from 'react';
import { getUsers } from './auth';

const useUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
        .then(data => setUsers(data))
    },[])
    return [users]
};

export default useUsers;