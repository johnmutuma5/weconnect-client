import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar/Toolbar';
import { CategoryNavigationItems } from './NavigationItems/NavigationItems';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Aux';

import { toggleSideDrawer } from '../../store/actions/actions';
import './Navigation.css';


const mainNavigation = (props, context) => {
    const store = context.store;

    return (
        <Aux>
            <SideDrawer />
            <Backdrop
                active={ store.state.layoutState.sideDrawerOpen }
                id={ 'SideDrawerBackDrop' }
                click={ () => store.dispatch(toggleSideDrawer()) }/>

            <div className='top-bar'>
                <Toolbar />
                <CategoryNavigationItems />
            </div>
        </Aux>
    )
};

mainNavigation.contextTypes = {
    store: PropTypes.object.isRequired
}


export default mainNavigation;
