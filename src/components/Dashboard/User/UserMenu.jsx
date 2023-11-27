import React from 'react';
import MenuItem from '../Sidebar/MenuItem';

const UserMenu = () => {
    return (
        <div>
            <MenuItem
                label='My Profile'
                address='my-profile'
            />
            <MenuItem
                label='Requested Meals'
                address='requested-meals'
            />
            <MenuItem
                label='My reviews'
                address='my-reviews'
            />
        </div>
    );
};

export default UserMenu;