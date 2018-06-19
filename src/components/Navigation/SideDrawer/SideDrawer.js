import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props) => {
    let classes = ['SideDrawer']
    classes = props.open ? classes.concat('Open') : classes.concat('Closed');

    return (
        <div className={ classes.join(' ') }>
            <div>
                Profile
            </div>
            <NavigationItems />
        </div>
    );
};

export default sideDrawer;
