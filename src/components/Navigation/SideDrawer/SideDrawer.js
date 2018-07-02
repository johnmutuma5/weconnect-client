import React from 'react';
import { PropTypes } from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import ProfileTools from '../../Auth/Profile/ProfileTools/ProfileTools';
import { toggleSideDrawer } from '../../../store/actions/actions';

import './SideDrawer.css';

const sideDrawer = (props, context) => {
    const state = context.layoutState;
    const store = context.store;
    let classes = ['SideDrawer']
    classes = state.sideDrawerOpen ? classes.concat('Open') : classes.concat('Closed');

    return (
        <div className={ classes.join(' ') }>
            <div className='wrapper'>
                <ProfileTools />
                <NavigationItems onClick= { () => store.dispatch(toggleSideDrawer()) }/>
            </div>
        </div>
    );
};

sideDrawer.contextTypes = {
    layoutState: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
}

export default sideDrawer;
