import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import VerticalBar from '../questions/verticalBar';
import Avatar from '../questions/questionsAvatar';
import QuestionOptions from './answerOptions';
import ResultsOptions from './resultsOptions';

class AnswerResultsContainer extends Component {

    state = { height: 0 };

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
    }

    render() {
        const { target, user, question } = this.props;

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
    const qid = location.pathname
        .substring(location.pathname.lastIndexOf('/') + 1);
    const target = location.pathname.substring(
        location.pathname.indexOf('/') + 1,
        location.pathname.lastIndexOf('/'));

    return {
        target,
        qid,
        user: users[authUser.uid],
        question: questions[qid]
    };
};

export default withRouter(connect(mapStateToProps)(AnswerResultsContainer));
