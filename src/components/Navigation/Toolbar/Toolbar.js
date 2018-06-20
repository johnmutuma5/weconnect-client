import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import './Toolbar.css';
import logo from '../../../Logo.svg';

const toolbar = (props) => (
    <div className="Toolbar container">
        <Logo src= { logo } alt_text="WeConnect" />
        <NavigationItems />
        <SideMenuToggler click={ props.click } />

    </div>
);

export default toolbar;
