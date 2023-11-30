import React from 'react';
import Container from '../../components/Shared/Container';

const Card = () => {
    return (
        <Container>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full' src="https://i.ibb.co/mX2tP4g/card.webp" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New Recipe is released!</h2>
                    <p>Click the button to learn more</p>
                    <div className="card-actions justify-start">
                        <button className="px-6 py-2 bg-slate-100 font-semibold text-myColor hover:scale-110 border-b-4 border-myColor rounded-xl">Learn More</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Card;