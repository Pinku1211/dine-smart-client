import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Loader from '../components/Shared/Loader'
import { useEffect, useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'
const Main = () => {
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
    <div>
      <Navbar />
      <Loader show={loading}></Loader>
      <div className='min-h-screen'>
        <Outlet />
      </div> 
      <Footer />
    </div>
  )
}

export default Main
