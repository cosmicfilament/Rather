import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './progressBar';

// option === the question option key
// either optionOne or optionTwo
// values are:
// votes - array of uid's
// text - text of the option choice
class ResultsDetail extends Component {

    state = {
        total: 0,
        completed: 0,
        myVote: false
    }

    componentDidMount() {
        const { uid, question, option } = this.props;

        this.setState({
            total: question.optionOne.votes.length +
                question.optionTwo.votes.length,

            completed: option.text === question.optionOne.text ?
                question.optionOne.votes.length :
                question.optionTwo.votes.length,

            myVote: option.votes.find(id => id === uid) === uid ? true : false
        });
    }

    render() {
        const { uid, question, option } = this.props;
        const { total, completed, myVote } = this.state;
        // get rid of that pesky divide by zero
        const percentage = Number.isNaN(completed / total * 100) ? 0 :
            Math.round(completed / total * 100);

        return (
            <div className='results-detail-wrapper'>
                {myVote &&
                    <img
                        className='results-detail-fist'
                        src={'../src/images/pointing.png'} />
                }
                <p>Would you rather
                    <span> {option.text}?</span>
                </p>
                <div className='results-progress-bar'>
                    <ProgressBar
                        incrementor={0}
                        percentage={percentage} />
                </div>
                <p className='results-summary'>
                    {completed} out of {total} votes.
                </p>
            </div>
        );
    }
}

ResultsDetail.propTypes = {
    uid: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired,
    option: PropTypes.object.isRequired
};

ResultsDetail.defaultProps = {
    uid: '-1',
    question: {},
    option: {}
};

export default ResultsDetail;
