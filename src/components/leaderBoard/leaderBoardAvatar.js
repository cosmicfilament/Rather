import React from 'react';

const Avatar = ({ url }) => {

    return <div className='leaderboard-avatar'
        style={{
            backgroundImage: `url(\"${url}\")`
        }} />;
};

export default Avatar;
