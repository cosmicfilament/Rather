'use strict';

/**
    * @file small version of a user's avatar for the nav menu
    * @author John Butler
*/

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
