import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../../utils/constants';
import { saveAnswer, saveQuestion } from '../../utils/api';
import { addAnswerToUser } from '../users/usersActions';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

function answerQuestion({ uid, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        uid,
        qid,
        answer
    };
};

// {question}
function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
};

export function handleAnswerQuestion(info) {
    return (dispatch) => {
        dispatch(answerQuestion(info));
        dispatch(addAnswerToUser(info));

        return saveAnswer(info)
            .catch((error) => {
                console.warn('Error in handleAnswerQuestion: ', error)
                alert('The was an error answering the question. Try again later.')
            });
    };
};
// author, optionOneText, optionTwoText
export function handleAddQuestion(info) {
    return (dispatch) => {

        return saveQuestion(info)
            .then(question => {
                // {question}
                dispatch(addQuestion(question));
            });
    };
}
