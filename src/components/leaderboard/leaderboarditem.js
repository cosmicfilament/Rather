'use strict';

/**
    * @file wrapper or container for one leaderboard card
    * @author John Butler
*/

import React, { Component } from 'react';
import Avatar from './leaderboardavatar';
import VerticalBar from '../questions/verticalbar';
import LeaderBoardDetails from './leaderboarddetails';
import LeaderBoardScore from './leaderboardscore';

class LeaderBoardItem extends Component {

    state = { height: 0 };

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
    }

    render() {
        const { user } = this.props;

        return (
            <div className='leaderboard'>
                <div className='leaderboard-item-wrapper'>
                    <div
                        ref={divElement => this.divElement = divElement}
                        // kind of hokey, but it works.
                        style={{ marginTop: (this.state.height - 260) / 2 }}
                    >
                        <Avatar url={user.avatarURL} />
                    </div>
                    <VerticalBar />
                    <LeaderBoardDetails
                        name={user.name}
                        answered={user.answered}
                        created={user.created}
                    />
                    <VerticalBar />
                    <LeaderBoardScore score={user.answered + user.created} />
                </div>
            </div>
        );
    };
}

export default LeaderBoardItem;
