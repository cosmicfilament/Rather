'use strict';

/**
    * @file wraps the answer logic vice results
    * @author John Butler
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { handleAnswerQuestion }
    from '../../store/questions/questionsactions';
import SubmitAnswerButton from './answerbutton';

class Options extends Component {

    // default radio button is optionOne
    state = { option: 'optionOne' };

    handleSubmitAnswer = () => {

        const answer = this.state.option;
        const { dispatch, uid, question, history } = this.props;

        dispatch(handleAnswerQuestion({
            uid,
            qid: question.id,
            answer
        }));

        this.props.history.push(`/question/${question.id}`);
    }

    handleOptionChanged = (e) => {
        const target = e.target;
        console.log(`answerOption Selected: ${target.value}`)
        this.setState({ option: target.value });
    }

    render() {

        const { question } = this.props;
        const { option } = this.state;

        return (
            <form>
                <div>
                    Would You Rather ...
                </div>
                <div>
                    <label>
                        <input type='radio'
                            onChange={this.handleOptionChanged}
                            name='question'
                            value={'optionOne'}
                            checked={option === 'optionOne'} />
                        {question.optionOne.text}
                    </label>
                </div>
                <div>
                    <label>
                        <input type='radio'
                            onChange={this.handleOptionChanged}
                            name='question'
                            value={'optionTwo'}
                            checked={option === 'optionTwo'} />
                        {question.optionTwo.text}
                    </label>
                </div>
                <SubmitAnswerButton
                    onSubmitAnswer={this.handleSubmitAnswer}
                />
            </form>
        );
    };
}

Options.propTypes = {
    uid: PropTypes.string.isRequired,
    question: PropTypes.object.isRequired
};

Options.defaultProps = {
    uid: '-1',
    question: {}
};

// @ts-ignore
export default withRouter(connect()(Options));
