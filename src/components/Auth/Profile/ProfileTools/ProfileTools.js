import React from 'react';
import PropTypes from 'prop-types';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';
import Button from '../../../UI/Button/Button';
import { GettingStartedButton } from '../../../../containers/Auth/GettingStarted';
import { logoutUser} from '../../../../store/actions/actions';
import { weConnectLogoutUser } from '../../../../store/resources/auth';

import './ProfileTools.css';

const profileTools = (props, context) => {

    const store = context.store;
    const layoutState = store.state.layoutState;
    const accessToken = store.state.authState.accessToken;
    const userFullName = store.state.authState.userFullName;

    let logoutButton = <GettingStartedButton />;

    // check layout state
    if (layoutState.showLayoutForAuthenticatedUser) {
        logoutButton = <Button type='dark'
                            onClickHandler={ () => {
                                weConnectLogoutUser(accessToken)
                                store.dispatch(logoutUser())
                            }}>Logout</Button>
    }

    return (
        <div className='ProfileTools' id={ props.id }>
            <ProfileAvatar image={ {} } />
            <div className='ProfileItems'>
                <div>{ userFullName }</div>
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
