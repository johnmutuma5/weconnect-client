import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';


const navigationItems = (props) => (
    <nav className='NavigationItems'>
        <ul onClick={ props.onClick }>
            {// <NavigationItem
            //     link_to='/businesses'>Explore</NavigationItem>
            // <NavigationItem link_to='/upgrade'>Pro</NavigationItem>
            }
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
                    queryString='?category=art'>Creativity</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=fashion'>Fashion</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=entertainment'>Entertainment</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=fitness'>Fitness</NavigationItem>
                <NavigationItem
                    link_to='/businesses/filter'
                    queryString='?category=finance'>Finance</NavigationItem>
            </ul>
        </nav>
    </div>
);

export default withRouter(navigationItems);
