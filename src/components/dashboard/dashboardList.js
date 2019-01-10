import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Questions from '../questions/questionsContainer';
import { withRouter } from 'react-router-dom';
import { TAB_LEFT } from '../../utils/constants';

class DashboardList extends Component {

    static propTypes = {
        side: PropTypes.number.isRequired
    }

    render() {

        const { side, user, filteredQuestions, history } = this.props;
        const sortedQuestions = filteredQuestions.sort((a, b) => b.timestamp - a.timestamp);

        return (
            <div className='dashboard-tab-body' >
                <ul>
                    {sortedQuestions.map(item =>
                        <li key={item.id}>
                            <Questions
                                side={side}
                                item={item}
                                user={user}
                                history={history}
                            />
                        </li>
                    )
                    }
                </ul>
            </div>
        );
    }
}

DashboardList.defaultProps = {
    side: TAB_LEFT
};

function mapStateToProps({ authUser, users, questions }, props) {

    const { side } = props;
    const user = users[authUser.uid];

    return {
        user,
        // this kicked my butt for quite awhile
        filteredQuestions: (side === TAB_LEFT) ?
            Object.keys(questions)
                .map(key => questions[key])
                .filter(question => !Object.keys(user.answers)
                    .find(answerKey => question.id === answerKey)) :
            Object.keys(questions)
                .map(key => questions[key])
                .filter(question => Object.keys(user.answers)
                    .find(answerKey => question.id === answerKey))
    };
};

export default withRouter(connect(mapStateToProps)(DashboardList));
