import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <nav>
        <ul>
            <NavigationItem link_to = '/businesses'>Business</NavigationItem>
            <NavigationItem link_to = '/dashboard'>Dash Board</NavigationItem>
            <NavigationItem link_to = '/register'>Create Account</NavigationItem>
            <NavigationItem link_to = '/About'>About</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;
