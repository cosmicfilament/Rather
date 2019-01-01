import { RECEIVE_QUESTIONS } from './questionsActionTypes';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
