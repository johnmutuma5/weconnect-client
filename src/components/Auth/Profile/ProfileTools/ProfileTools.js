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
    let logoutButton = null;
    let gettingStartedButton =
        <Button onClickHandler={ () => store.dispatch(toggleGettingStarted()) }>
            { 'Get Started' }
        </Button>;

    // check layout state
    if (layoutState.showLayoutForAuthenticatedUser) {
        logoutButton = <Button
                            onClickHandler={ () => {
                                weConnectLogoutUser(userToken)
                                store.dispatch(logoutUser())
                            }}>Logout</Button>
    }

    return (
        <div className='ProfileTools' id={ props.id }>
            <ProfileAvatar image={ {} } />
            <div>{'John Doe'}</div>
            <div className='ProfileActions'>
                { logoutButton }
            </div>
        </div>
    );
};

profileTools.contextTypes = {
    store: PropTypes.object.isRequired,
}

export default profileTools;
