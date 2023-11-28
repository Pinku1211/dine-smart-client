import React from 'react';

const Header = ({ title, subTitle }) => {
    return (
        <div className='flex justify-center mb-8'>
            <div className="text-center">
                <h1 className="text-2xl font-bold text-myColor sm:text-3xl md:text-4xl">
                    {title}
                </h1>

                <p className="mt-1.5 text-lg text-center text-gray-700">
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default Header;