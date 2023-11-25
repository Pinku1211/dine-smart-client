import React from 'react';
import bannerImg from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${bannerImg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Discover New Experience</h1>
                    <p className="mb-5">PLEASE COME HUNGRY. BUT PLEASE COME WITH PATIENCE DURING PEAK HOURS</p>
                    <div className="relative">
                        <label className="sr-only" for="search"> Search </label>

                        <input
                            className="h-12 w-full rounded-xl border-none text-gray-600 bg-white pe-10 ps-4 text-sm shadow-sm"
                            id="search"
                            type="search"
                            placeholder="Search meals..."
                        />

                        <button
                            type="button"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;