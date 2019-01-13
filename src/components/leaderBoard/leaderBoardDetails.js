'use strict';

/**
    * @file displays how many answered and how many the user created for an individual card
    * @author John Butler
*/

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
