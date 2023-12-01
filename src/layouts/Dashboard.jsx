import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Helmet } from 'react-helmet-async';
import useRole from '../hooks/useRole';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Loader from '../components/Shared/Loader';

const Dashboard = () => {
    const [role] = useRole();
    const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure()
  useEffect(()=> {
    //  req interceptor
    axiosSecure.interceptors.request.use(
      (config)=>{
        setLoading(true)
        return config;
    },
    (error)=>{
      return Promise.reject(error)
    });

    //  res interceptor
    axiosSecure.interceptors.response.use(
      (config)=>{
        setLoading(false)
        return config;
    },
    (error)=>{
      return Promise.reject(error)
    });
  },[])
    return (
        <div className='min-h-screen relative md:flex'>
            <Helmet><title>{`Dashboard | ${role}`}</title></Helmet>
            <Loader show={loading}></Loader>
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