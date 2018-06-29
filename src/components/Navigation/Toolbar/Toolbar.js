import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import Button from '../../UI/Button/Button';
import './Toolbar.css';
import logo from '../../../Logo.svg';

const toolbar = (props, context) => (
    <div className="Toolbar container">
        <Logo src= { logo } alt_text="WeConnect" />
        <NavigationItems />
        <Button onClickHandler={ context.toggleUserGettingStarted }>
            { 'Get Started' }
        </Button>
        <SideMenuToggler click={ props.click } />

    </div>
);

toolbar.contextTypes = {
    toggleUserGettingStarted: PropTypes.func.isRequired
}

export default toolbar;
