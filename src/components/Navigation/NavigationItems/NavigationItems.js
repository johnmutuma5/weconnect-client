import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => (
    <nav className='NavigationItems'>
        <ul onClick={ props.onClick }>
            <NavigationItem
                link_to='/businesses'>Explore</NavigationItem>
            <NavigationItem link_to='/upgrade'>Pro</NavigationItem>
        </ul>
    </nav>
);

// navigation items for business categories
export const CategoryNavigationItems = (props) => (
    <div className='CategoryNavigationItems'>
        <nav className='NavigationItems'>
            <ul>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=technology'>Technology</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=art'>{ 'Creativity' }</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=entertain'> Entertainment </NavigationItem>
            </ul>
        </nav>
    </div>
);

export default navigationItems;
