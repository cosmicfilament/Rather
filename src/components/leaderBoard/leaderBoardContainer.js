import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderBoardItem from './leaderBoardItem';

class LeaderBoard extends Component {

    render() {
        const { formattedUsers } = this.props

        return <div>
            {formattedUsers.map(user => (
                <LeaderBoardItem key={user.uid} user={user} />
            ))}
        </div>
    }
}

function mapStateToProps({ users, questions }) {

    return {
        formattedUsers: Object.keys(users).map(key => {
            const user = users[key];

            return {
                uid: user.uid,
                name: users[key].name,
                avatarURL: user.avatarURL,
                answered: Object.keys(user.answers).length,
                created: user.questions.length
            };
        }).sort((a, b) => (b.answered + b.created) - (a.answered + a.created))
    }
}

export default connect(mapStateToProps)(LeaderBoard);
