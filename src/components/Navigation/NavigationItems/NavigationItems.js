import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <nav className='NavigationItems'>
        <ul>
            <NavigationItem link_to='/businesses'>Explore Businesses</NavigationItem>
            <NavigationItem link_to='/dashboard'>Dash Board</NavigationItem>
            <button style={
                {
                    height:'90%',
                    width: '200px',
                    borderRadius: '5px',
                }
            }>Get Started</button>
        </ul>
    </nav>
);

export default navigationItems;
