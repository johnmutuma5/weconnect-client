import React from 'react';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';

import './ProfileTools.css';

const profileTools = (props) => (
    <div className='ProfileTools'>
        <ProfileAvatar image={ {} } />
        <div> { 'John Doe'} </div>
    </div>
);

export default profileTools;
