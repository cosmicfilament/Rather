import React, { Component } from 'react';
import NewQuestionHeader from './newQuestionHeader';
import NewQuestionForm from './newQuestionForm';

class NewQuestionContainer extends Component {

    render() {
        return (
            <div className='new-question-wrapper'>
                <NewQuestionHeader />
                <p>Complete the question:</p>
                <p>Would you rather ...</p>
                <NewQuestionForm />
            </div>
        );
    }
}

export default NewQuestionContainer;
