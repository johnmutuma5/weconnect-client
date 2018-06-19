import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import './MainNavigation.css';

const mainNavigation = props => (
    <Aux>
        <SideDrawer />
        <div className='top-bar'>
            <Toolbar />
        </div>
    </Aux>
);

export default mainNavigation;
