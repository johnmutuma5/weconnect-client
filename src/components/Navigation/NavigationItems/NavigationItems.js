import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <nav className='NavigationItems'>
        <ul>
            <NavigationItem link_to='/businesses'>Explore Businesses</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;
