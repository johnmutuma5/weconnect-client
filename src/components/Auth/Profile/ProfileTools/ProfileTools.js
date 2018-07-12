import React from 'react';
import PropTypes from 'prop-types';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import Button from '../../../UI/Button/Button';
import { toggleGettingStarted, logoutUser} from '../../../../store/actions/actions';
import { weConnectLogoutUser } from '../../../../store/resources/auth';

import './ProfileTools.css';

const profileTools = (props, context) => {

    const store = context.store;
    const layoutState = store.state.layoutState;
    const userToken = store.state.authState.userToken;
    let gettingStartedButton =
        <Button type='dark' onClickHandler={ () => store.dispatch(toggleGettingStarted()) }>
            { 'Get Started' }
        </Button>;

    let logoutButton = gettingStartedButton;

    // check layout state
    if (layoutState.showLayoutForAuthenticatedUser) {
        logoutButton = <Button type='dark'
                            onClickHandler={ () => {
                                weConnectLogoutUser(userToken)
                                store.dispatch(logoutUser())
                            }}>Logout</Button>
    }

    return (
        <div className='ProfileTools' id={ props.id }>
            <ProfileAvatar image={ {} } />
            <div className='ProfileItems'>
                <div>{'John Doe'}</div>
                <div className='ProfileActions'>
                    { logoutButton }
                </div>
            </div>
        </div>
    );
};

profileTools.contextTypes = {
    store: PropTypes.object.isRequired,
}

export default profileTools;
