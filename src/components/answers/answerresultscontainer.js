'use strict';

/**
    * @file indirectly called by selecting a question or answer via the pollbutton. gets picked up by the route logic in app.js and sent here
    * @author John Butler
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VerticalBar from '../questions/verticalbar';
import Avatar from '../questions/questionsavatar';
import QuestionOptions from './answeroptions';
import ResultsOptions from './resultsoptions';
import NotFound from '../notfound';

class AnswerResultsContainer extends Component {

    state = { height: 0 };

    componentDidMount() {
        if (this.props.target !== 'notFound') {
            const height = this.divElement.clientHeight;
            this.setState({ height });
        }
    }

    render() {
        const { target, user, question } = this.props;
        if (target === 'notFound') {
            return <NotFound />;
        }

        return (
            <div className='question-wrapper' >
                <div className='question-title'>
                    {user.name} asks:
                </div>
                <div className='question-body-wrapper'>
                    <div
                        ref={divElement => this.divElement = divElement}
                        // kind of hokey, but it works.
                        style={{ marginTop: (this.state.height - 260) / 2 }}
                    >
                        <Avatar url={`../${user.avatarURL}`} />
                    </div>
                    <VerticalBar />
                    <div className='question-details-wrapper'>
                        {target === 'question' ?
                            <QuestionOptions
                                uid={user.uid}
                                question={question}
                            /> :
                            <ResultsOptions
                                uid={user.uid}
                                question={question}
                            />
                        }
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps({ authUser, users, questions }, props) {

    const { match, location } = props;
    const qid = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    const target = Object.keys(users[authUser.uid].answers).find(key => key === qid) ? 'answer' :
        Object.keys(questions).find(key => key === qid) ? 'question' : 'notFound';
    return {
        target,
        qid,
        user: users[authUser.uid],
        question: questions[qid]
    };
};

export default withRouter(connect(mapStateToProps)(AnswerResultsContainer));
