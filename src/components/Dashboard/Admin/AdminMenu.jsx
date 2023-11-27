import React from 'react';
import MenuItem from '../Sidebar/MenuItem';

const AdminMenu = () => {
    return (
        <div>
            <MenuItem
                label='Manage Users'
                address='manage-users'
            />
            <MenuItem
                label='Add Meal'
                address='add-meal'
            />
            <MenuItem
                label='All Meals'
                address='all-meals'
            />
            <MenuItem
                label='All Reviews'
                address='all-reviews'
            />
            <MenuItem
                label='Serve Meals'
                address='serve-meals'
            />
            <MenuItem
                label='Upcoming Meals'
                address='upcoming-meals'
            />
        </div>
    );
};

export default AdminMenu;