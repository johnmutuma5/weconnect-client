import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props) => (
    <div className='SideDrawer'>
        <div>
            Profile
        </div>
        <NavigationItems />
    </div>
);

export default sideDrawer;
