import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import './Toolbar.css';
import logo from '../../../Logo.svg';

const toolbar = (props) => (
    <div className="Toolbar container" onClick={ props.click }>
        <Logo src= { logo } alt_text='WeConnect' />
        <NavigationItems />
    </div>
);

export default toolbar;
