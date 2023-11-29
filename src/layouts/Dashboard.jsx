import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Helmet } from 'react-helmet-async';
import useRole from '../hooks/useRole';

const Dashboard = () => {
    const [role] = useRole();
    return (
        <div className='min-h-screen relative md:flex'>
            <Helmet><title>{`Dashboard | ${role}`}</title></Helmet>
            {/* {sidebar content} */}
            <Sidebar></Sidebar>
            <div className='flex-1 md:ml-64'>
                <div className='p-5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;