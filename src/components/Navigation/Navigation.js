import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';
import './Navigation.css';


const mainNavigation = (props, context) => (
    <Aux>
        <SideDrawer />
        <Backdrop
            active={ context.state.sideDrawerOpen }
            id={ 'SideDrawerBackDrop' }
            click={ context.handleToggleSideDrawer }/>

        <div className='top-bar'>
            <Toolbar />
        </div>
    </Aux>
);

mainNavigation.contextTypes = {
    state: PropTypes.object.isRequired,
    handleToggleSideDrawer: PropTypes.func.isRequired
}


export default mainNavigation;
