import React, { Component } from 'react';
import Avatar from './leaderBoardAvatar';
import VerticalBar from '../questions/verticalBar';
import LeaderBoardDetails from './leaderBoardDetails';
import LeaderBoardScore from './leaderBoardScore';

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
