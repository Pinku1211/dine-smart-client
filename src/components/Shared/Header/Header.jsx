import React from 'react';

const Header = ({ title, subTitle }) => {
    return (
        <div className='flex justify-center mb-8'>
            <div class="text-center sm:text-left">
                <h1 class="text-2xl font-bold text-myColor sm:text-3xl md:text-4xl">
                    {title}
                </h1>

                <p class="mt-1.5 text-lg text-center text-gray-700">
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default Header;