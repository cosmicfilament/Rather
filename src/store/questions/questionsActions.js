import { RECEIVE_QUESTIONS } from '../../utils/constants';


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
