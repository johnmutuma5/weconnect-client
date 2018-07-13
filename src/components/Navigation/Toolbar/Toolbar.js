import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import logo from '../../../Logo.svg';
import ProfileTools from '../../Auth/Profile/ProfileTools/ProfileTools';
import Button from '../../UI/Button/Button';
import { GettingStartedButton } from '../../../containers/Auth/GettingStarted';
import { toggleGettingStarted } from '../../../store/actions/actions';
import SearchField from '../../../containers/Search/SearchField/SearchField';

import './Toolbar.css';

const toolbar = (props, context) => {
    const store = context.store;
    const layoutState = store.state.layoutState;

    const gettingStartedButton = <GettingStartedButton id={'toolbarGetStarted'}/>
    let profileTools = <ProfileTools id='atToolBar'/>
    if (!layoutState.showLayoutForAuthenticatedUser)
        profileTools = gettingStartedButton;

    return (
        <div className="Toolbar container">
            <Logo src= { logo } alt_text="WeConnect" />
            <NavigationItems />
            <SearchField />
            { profileTools }
            <SideMenuToggler click={ props.click } />

        </div>
    );
};

toolbar.contextTypes = {
    store: PropTypes.object.isRequired,
}

export default toolbar;
