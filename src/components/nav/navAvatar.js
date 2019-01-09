import React from 'react';

const Avatar = ({ name, url }) => {

    return (
        <img
            className='nav-avatar'
            src={url}
            alt={`Avatar of ${name}`}
        />
    );
};

export default Avatar;
