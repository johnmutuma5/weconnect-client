import React from 'react';
import { PropTypes } from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import ProfileTools from '../../Auth/Profile/ProfileTools/ProfileTools';
import './SideDrawer.css';

const sideDrawer = (props, context) => {
    const state = context.layoutState;
    let classes = ['SideDrawer']
    classes = state.sideDrawerOpen ? classes.concat('Open') : classes.concat('Closed');

    return (
        <div className={ classes.join(' ') }>
            <div className='wrapper'>
                <ProfileTools />
                <NavigationItems />
            </div>
        </div>
    );
};

sideDrawer.contextTypes = {
    layoutState: PropTypes.object.isRequired
}

export default sideDrawer;
