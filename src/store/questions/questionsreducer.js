'use strict';

/**
    * @file questions object redux reducer function
    * @author John Butler
*/

import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../../utils/constants';

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer]
                            .votes.concat([action.uid])
                    }
                }
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state
    };
};
