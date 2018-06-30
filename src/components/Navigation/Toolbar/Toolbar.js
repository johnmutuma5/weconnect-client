import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import Button from '../../UI/Button/Button';
import logo from '../../../Logo.svg';
import { toggleGettingStarted } from '../../../store/actions/actions';

import './Toolbar.css';

const toolbar = (props, context) => {
    const store = context.store;
    const layoutState = context.layoutState;

    let gettingStartedButton =
        <Button onClickHandler={ () => store.dispatch(toggleGettingStarted()) }>
            { 'Get Started' }
        </Button>;

    // check layout state
    if (layoutState.showLayoutForAuthenticatedUser)
        gettingStartedButton = 'User Avatar'; // to import from profile components

    return (
        <div className="Toolbar container">
            <Logo src= { logo } alt_text="WeConnect" />
            <NavigationItems />
            { gettingStartedButton }
            <SideMenuToggler click={ props.click } />

        </div>
    );
};

toolbar.contextTypes = {
    store: PropTypes.object.isRequired,
    layoutState: PropTypes.object.isRequired
}

export default toolbar;
