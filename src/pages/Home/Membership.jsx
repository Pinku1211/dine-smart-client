import React from 'react';
import Header from '../../components/Shared/Header/Header';
import Container from '../../components/Shared/Container';
import silverBadge from '../../assets/images/silver.png'
import goldBadge from '../../assets/images/gold.png'
import platinumBadge from '../../assets/images/platinum.png'
import { Link } from 'react-router-dom';

const Membership = () => {

    return (
        <div className='py-10'>
            <Header title='Pick Your Badge' subTitle='Get Our Premium services'></Header>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <article
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-cyan-500 to-myColor p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                    >
                        <div className='flex justify-center'>
                            <img className='w-32' src={silverBadge} alt="" />
                        </div>
                        <div className="rounded-[10px] bg-white p-4 sm:p-6 flex justify-center">
                            <div>
                                <h3 className="mt-0.5 text-2xl font-bold text-gray-900">
                                    Get The Silver Badge
                                </h3>
                                <p className="my-4 sm:mt-4 text-center">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                        $30
                                    </strong>
                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                                <div>
                                    <ul class="mt-6 space-y-2">

                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Help center access </span>
                                        </li>
                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Community access </span>
                                        </li>
                                    </ul>

                                </div>
                                <div className="mt-4 flex justify-center">
                                    <Link to='/checkout/silver'><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl hover:scale-110 transition-all ease-in-out">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-cyan-500 to-myColor p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                    >
                        <div className='flex justify-center'>
                            <img className='w-32' src={goldBadge} alt="" />
                        </div>
                        <div className="rounded-[10px] bg-white p-4 sm:p-6 flex justify-center">
                            <div>
                                <h3 className="mt-0.5 text-2xl font-bold text-gray-900">
                                    Get The Gold Badge
                                </h3>
                                <p className="my-4 sm:mt-4 text-center">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                        $50
                                    </strong>
                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                                <div>
                                    <ul class="mt-6 space-y-2">

                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Help center access </span>
                                        </li>
                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Community access </span>
                                        </li>
                                    </ul>

                                </div>
                                <div className="mt-4 flex justify-center">
                                <Link to='/checkout/gold'><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl hover:scale-110 transition-all ease-in-out">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article
                        className="hover:animate-background rounded-xl bg-gradient-to-r from-cyan-500 to-myColor p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                    >
                        <div className='flex justify-center'>
                            <img className='w-32' src={platinumBadge} alt="" />
                        </div>
                        <div className="rounded-[10px] bg-white p-4 sm:p-6 flex justify-center">
                            <div>
                                <h3 className="mt-0.5 text-2xl font-bold text-gray-900">
                                    Get The Platinum Badge
                                </h3>
                                <p className="my-4 sm:mt-4 text-center">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                        $80
                                    </strong>
                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                                <div>
                                    <ul class="mt-6 space-y-2">

                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Help center access </span>
                                        </li>
                                        <li class="flex items-center gap-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-5 w-5 text-indigo-700"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5"
                                                />
                                            </svg>

                                            <span class="text-gray-700"> Community access </span>
                                        </li>
                                    </ul>

                                </div>
                                <div className="mt-4 flex justify-center">
                                <Link to='/checkout/platinum'><button className="px-6 py-2 bg-slate-100 font-semibold text-myColor border-b-4 border-myColor rounded-xl hover:scale-110 transition-all ease-in-out">Get Started</button></Link>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </Container>
        </div>
    );
};

export default Membership;