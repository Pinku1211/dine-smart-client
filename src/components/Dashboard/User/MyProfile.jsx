import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Container from '../../Shared/Container';
import avatarImg from '../../../assets/images/anonymous.jpg'
import useStatus from '../../../hooks/useStatus';
import silverBadge from '../../../assets/images/silver.png'
import goldBadge from '../../../assets/images/gold.png'
import platinumBadge from '../../../assets/images/platinum.png'
import bronzeBadge from '../../../assets/images/bronze.png'
import Header from '../../Shared/Header/Header';

const MyProfile = () => {
    const { user } = useAuth();
    const [status] = useStatus();
    let badgeImg = null
    if (status === "Gold") {
        badgeImg = goldBadge
    } else if (status === "Platinum") {
        badgeImg = platinumBadge
    }
    else if (status === "Silver") {
        badgeImg = silverBadge
    }

    return (
        <div className='min-h-[80vh] flex justify-center items-center'>
            <Container>
                <Header title='Your Profile'></Header>
                <div className='flex justify-center gap-8 mt-10'>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                        <div>
                            <img className='h-48 rounded-full' src={user?.photoURL ? user?.photoURL : avatarImg} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold'>Name: {user?.displayName}</h1>
                            <h1 className='text-lg font-semibold'>Email: {user?.email}</h1>
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className='flex-1 text-center'>
                        <h1 className='text-2xl font-bold'>Your Badges</h1>
                        <div className='flex justify-center items-center gap-10 mt-10'>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-2xl'>Bronze</h1>
                                <img className='w-28' src={bronzeBadge} alt="" />
                            </div>
                            {
                                badgeImg && <div className='flex flex-col items-center'>
                                    <h1 className='text-2xl'>{status}</h1>
                                    <img className='w-28' src={badgeImg} alt="" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;