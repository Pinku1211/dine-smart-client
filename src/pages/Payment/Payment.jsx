import React, { useState } from 'react';
import Header from '../../components/Shared/Header/Header';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// TODO
const stipePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = ({badge}) => {

    let price = 0;
    if(badge === 'Silver'){
        price = 30
    }else if(badge === 'Gold'){
        price = 50
    }else{
        price = 80
    }

    return (
        <div className='bg-slate-200 min-h-screen py-10'>
            <Header title='Payment' subTitle='Pay for the premium services'></Header>
            <center><h1 className='mb-10 text-myColor'>Total amount: <span className='font-bold'>${price}</span> for <span className='font-bold'>{badge}</span> package</h1></center>
            <Elements stripe={stipePromise}>
                <div className='max-w-sm mx-auto'>
                    <CheckoutForm badge={badge}></CheckoutForm>
                </div>
            </Elements>
        </div>
    );
};

export default Payment;