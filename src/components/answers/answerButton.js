'use strict';

/**
    * @file button that submits the answer
    * @author John Butler
*/

import React from 'react';

const SubmitAnswerButton = ({ onSubmitAnswer }) => {

    return (
        <div className='answer-button-wrapper' >
            <button
                type='button'
                className='answer-button'
                onClick={(e) => onSubmitAnswer()}>
                Submit Answer
            </button>
        </div >
    );
}

export default SubmitAnswerButton;
