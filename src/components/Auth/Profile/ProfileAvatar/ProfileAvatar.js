import React from 'react';
import './ProfileAvatar.css';
import avatarPlaceholder from '../../../../assets/Avatar.svg';

const profileAvatar = (props) => (
    <div className='ProfileAvatar'>
        <div className='avatar-img'>
            <img src={ avatarPlaceholder } alt={ 'Pic' }/>
        </div>
    </div>
);

export default profileAvatar;
