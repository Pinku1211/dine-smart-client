import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='min-h-screen relative md:flex'>
            {/* {sidebar content} */}
            <Sidebar></Sidebar>
            <div className='flex-1 md:ml-64'>
                <div className='p-5'>{}</div>
            </div>
        </div>
    );
};

export default Dashboard;