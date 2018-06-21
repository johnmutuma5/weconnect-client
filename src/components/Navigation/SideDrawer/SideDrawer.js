import React from 'react';
import { PropTypes } from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';

const sideDrawer = (props, context) => {
    let classes = ['SideDrawer']
    classes = context.state.sideDrawerOpen ? classes.concat('Open') : classes.concat('Closed');
    console.log("render sideDrawer")
    return (
        <div className={ classes.join(' ') }>
            <div className='wrapper'>
                <div className='Profile'>
                    Profile
                </div>
                <NavigationItems />
            </div>
        </div>
    );
};

sideDrawer.contextTypes = {
    state: PropTypes.object.isRequired
}

export default sideDrawer;
