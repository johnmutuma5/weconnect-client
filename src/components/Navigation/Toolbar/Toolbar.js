import React from 'react';
import PropTypes from 'prop-types';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import SideMenuToggler from '../../UI/SideMenuToggler/SideMenuToggler';
import Button from '../../UI/Button/Button';
import logo from '../../../Logo.svg';
import ProfileTools from '../../Auth/Profile/ProfileTools/ProfileTools';
import { toggleGettingStarted, logoutUser} from '../../../store/actions/actions';
import { weConnectLogoutUser } from '../../../store/resources/auth';

import './Toolbar.css';

const toolbar = (props, context) => {
    const store = context.store;
    const layoutState = store.state.layoutState;
    const userToken = store.state.authState.userToken;

    let logoutButton = null;
    let gettingStartedButton =
        <Button onClickHandler={ () => store.dispatch(toggleGettingStarted()) }>
            { 'Get Started' }
        </Button>;

    // check layout state
    if (layoutState.showLayoutForAuthenticatedUser) {
        gettingStartedButton = <ProfileTools id='atToolBar'/>
        logoutButton = <Button
                            onClickHandler={ () => {
                                weConnectLogoutUser(userToken)
                                store.dispatch(logoutUser())
                            }}>Logout</Button>
    }

    return (
        <div className="Toolbar container">
            <Logo src= { logo } alt_text="WeConnect" />
            <NavigationItems />
            <div className={'GettingStarted'}>
                { gettingStartedButton }
            </div>
            { logoutButton }
            <SideMenuToggler click={ props.click } />

        </div>
    );
};

toolbar.contextTypes = {
    store: PropTypes.object.isRequired,
}

export default toolbar;
