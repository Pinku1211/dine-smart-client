import React, { useState } from 'react';
import Header from '../../components/Shared/Header/Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// TODO
const stipePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = ({badge}) => {
    return (
        <div className='bg-slate-200 min-h-screen py-10'>
            <Header title='Payment' subTitle='Pay for the premium services'></Header>
            <h1>{badge}</h1>
            <Elements stripe={stipePromise}>
                <div className='max-w-sm mx-auto'>
                    <CheckoutForm badge={badge}></CheckoutForm>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;