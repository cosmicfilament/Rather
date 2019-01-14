'use strict';

/**
    * @file main entry point when the new question menu item is selected
    * @author John Butler
*/

import React, { Component } from 'react';
import NewQuestionHeader from './newquestionheader';
import NewQuestionForm from './newquestionform';

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
