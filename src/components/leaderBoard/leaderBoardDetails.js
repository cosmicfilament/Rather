import React, { Fragment } from 'react';

const LeaderBoardDetails = ({ name, answered, created }) => {
    return (
        <div className='leaderboard-details-wrapper'>
            <div>{name}</div>
            <p>Questions:</p>
            <p>Answered: {answered}</p>
            <hr />
            <p>Created: {created}</p>
        </div>
    );
};

export default LeaderBoardDetails;
