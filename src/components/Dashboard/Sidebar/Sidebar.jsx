import { useState } from 'react'
// Components
// import Logo from '../../Shared/Logo'
// import MenuItem from './MenuItem'
// import ToggleBtn from '../../Button/ToggleBtn'
// Icons
// import { GrLogout } from 'react-icons/gr'
// import { FcSettings } from 'react-icons/fc'
// import { AiOutlineBars } from 'react-icons/ai'
// import { BsGraphUp } from 'react-icons/bs'
import logoImg from '../../../assets/images/logo.png'
import { FaAlignCenter, FaBraille } from "react-icons/fa6";
import MenuItem from './MenuItem';


const Sidebar = () => {
    const [toggle, setToggle] = useState(false)
    const [isActive, setActive] = useState(false)

    //   For guest/host menu item toggle button
    const toggleHandler = event => {
        setToggle(event.target.checked)
    }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <div className='flex items-center'>
                            <img className='w-12 md:w-16' src={logoImg} alt="logo" />
                            <h1 className='text-2xl md:text-4xl font-bold text-myColor'>DineSmart</h1>
                        </div>
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
                            <div className='flex items-center'>
                                <img className='w-12 md:w-16' src={logoImg} alt="logo" />
                                <h1 className='text-2xl font-bold text-myColor'>DineSmart</h1>
                            </div>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <div className='w-full md:hidden px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                            <div className='flex items-center'>
                                <img className='w-12 md:w-16' src={logoImg} alt="logo" />
                                <h1 className='text-2xl font-bold text-myColor'>DineSmart</h1>
                            </div>
                        </div>
                        {/* If a user is host */}
                        {/* <ToggleBtn toggleHandler={toggleHandler} /> */}
                        <nav>
                            <MenuItem
                                label='Manage Users'
                                address='manage-users'
                            />
                            <MenuItem
                                label='Add Meal'
                                address='add-meal'
                            />
                            <MenuItem
                                label='All Meals'
                                address='all-meals'
                            />
                            <MenuItem
                                label='All Reviews'
                                address='all-reviews'
                            />
                            <MenuItem
                                label='Serve Meals'
                                address='serve-meals'
                            />
                            <MenuItem
                                label='Upcoming Meals'
                                address='upcoming-meals'
                            />

                            {/* Menu Items */}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <MenuItem
                        label='Profile'
                        address='profile'
                    />
                    <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 rounded-lg hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        {/* <GrLogout className='w-5 h-5' /> */}

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar