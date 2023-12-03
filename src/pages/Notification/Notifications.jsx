import React from 'react';
import { Helmet } from 'react-helmet-async';

const Notifications = () => {
    return (
        <div>
            <Helmet><title>DineSmart | Notification</title></Helmet>
            <center><h1 className='min-h-[60vh] flex items-center justify-center font-bold text-myColor'>There is no notification for you right now!</h1></center>
        </div>
    );
};

export default Notifications;