import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SubmitNewQuestion from './submitNewQuestion';
import NewQuestionInput from './newQuestionInput';
import { handleAddQuestion } from '../../store/questions/questionsActions';

class NewQuestionForm extends Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleSubmit = () => {
        const { optionOneText, optionTwoText } = this.state;
        const { dispatch, uid, history } = this.props;
        dispatch(handleAddQuestion({
            author: uid,
            optionOneText,
            optionTwoText
        }));
        this.props.history.push('/');
    }

    handleOptionChanged = (e) => {
        const target = e.target;
        const text = target.value;
        const option = target.name;

        this.setState(prevState => ({
            optionOneText: option === 'optionOne' ? text : prevState.optionOneText,
            optionTwoText: option === 'optionTwo' ? text : prevState.optionTwoText
        }));
    }

    handleReturn = (e) => {

        e.preventDefault();
        e.key === 'Enter' && this.handleSubmit();
    }

    render() {
        return (
            <form
                className='new-question-form'
                onKeyPress={this.handleReturn}>
                <div>
                    <NewQuestionInput
                        label={'First Question:'}
                        name={'optionOne'}
                        handleInputChanged={this.handleOptionChanged}
                    />
                </div>
                < div className='hr-text' data-content='or' />
                <div>
                    <NewQuestionInput
                        label={'Second Question:'}
                        name={'optionTwo'}
                        handleInputChanged={this.handleOptionChanged}
                    />
                </div>
                <SubmitNewQuestion
                    onSubmit={this.handleSubmit} />
            </form>
        );
    }
}

function mapStateToProps({ authUser }, props) {
    return {
        uid: authUser.uid
    };
};

export default withRouter(connect(mapStateToProps)(NewQuestionForm));
