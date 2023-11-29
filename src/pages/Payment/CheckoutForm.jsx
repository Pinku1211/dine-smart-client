import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { changeStatus } from "../../hooks/auth";


const CheckoutForm = ({badge}) => {
    const {user} = useAuth()
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    console.log(badge)
    let price = 0;
    if(badge === 'Silver'){
        price = 30
    }else if(badge === 'Gold'){
        price = 50
    }else{
        price = 80
    }
    console.log(price)

    useEffect( () => {
       axiosSecure.post('/create-payment-intent', {price: price})
       .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
       })
    }, [axiosSecure, price])

    const handleSubmit = async e => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        // card
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // payment method
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                toast.success("successfully paid")
                const status = {badge}
                changeStatus(user?.email, status)
                console.log(status)
            }
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '20px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className="flex flex-col justify-center mt-10">
                    <button 
                    type="submit" 
                    className="px-12 py-2 bg-myColor font-semibold text-white rounded-lg hover:scale-110 transition-all ease-in-out" 
                    disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p className="text-red-500 mt-4 text-center">{error}</p>
                </div>

            </form>
        </div>
    );
};

export default CheckoutForm;