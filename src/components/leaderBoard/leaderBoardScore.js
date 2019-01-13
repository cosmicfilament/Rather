'use strict';

/**
    * @file score display for an individual leaderboard card
    * @author John Butler
*/

import React, { Fragment } from 'react';

const LeaderBoardScore = ({ score }) => {
    return (
        <div className='leaderboard-score-wrapper'>
            <p>score</p>
            <hr />
            <div className='leaderboard-circle'>
            </div>
            <span>{score}</span>
        </div>
    );
};

export default LeaderBoardScore;
