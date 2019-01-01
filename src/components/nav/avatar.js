import React from 'react';

const Avatar = ({ name, avatarURL }) => {

    return (
        <img
            className='nav-avatar'
            src={avatarURL}
            alt={`Avatar of ${name}`}
        />
    );
};

export default Avatar;
