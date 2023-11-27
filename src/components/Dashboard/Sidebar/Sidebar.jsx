import { useState } from 'react'
import { FaAlignCenter, FaBraille } from "react-icons/fa6";
import MenuItem from './MenuItem';
import Logo from '../../Shared/Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import useRole from '../../../hooks/useRole';
import AdminMenu from '../Admin/AdminMenu';
import UserMenu from '../User/UserMenu';
import { CiLogout } from "react-icons/ci";
import useAuth from '../../../hooks/useAuth';


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const [role] = useRole();
    const { logOut } = useAuth()
    const navigate = useNavigate()
    console.log(role)

    const handleToggle = () => {
        setActive(!isActive)

    }

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully logged out",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .then(error => console.log(error))
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'><Logo></Logo></Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 bg-slate-200 focus:outline-none focus:bg-gray-200'
                >
                    <FaAlignCenter className='text-myColor '></FaAlignCenter>
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <Link to='/'><Logo></Logo></Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <div className='w-full md:hidden px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <Link to='/'><Logo></Logo></Link>
                        </div>
                        <nav>
                            {
                                role === 'admin' ? <AdminMenu></AdminMenu> : <UserMenu></UserMenu>
                            }

                            {/* Menu Items */}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 rounded-lg hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <CiLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar