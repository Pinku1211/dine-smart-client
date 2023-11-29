import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Container from '../../Shared/Container';

const AdminProfile = () => {
    const { user } = useAuth()
    return (
        <Container>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                <div>
                    <img className='h-48 rounded-full' src={user?.photoURL ? user.photoURL : avatarImg} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Name: {user?.displayName}</h1>
                    <h1 className='text-lg font-semibold'>Email: {user?.email}</h1>
                    <h1 className='text-md font-semibold'>Meals Added: 0</h1>
                </div>
            </div>
        </Container>
    );
};

export default AdminProfile;