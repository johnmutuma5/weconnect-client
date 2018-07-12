import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import logo from '../../../Logo.svg';
import ProfileTools from '../../Auth/Profile/ProfileTools/ProfileTools';

import './Toolbar.css';

const toolbar = (props) => {
    const profileTools = <ProfileTools id='atToolBar'/>

    return (
        <div className="Toolbar container">
            <Logo src= { logo } alt_text="WeConnect" />
            <NavigationItems />
            { profileTools }
            <SideMenuToggler click={ props.click } />

        </div>
    );
};

export default toolbar;
