'use strict';
//@ToDo: add loading

import server from './_DATA';
import helpers from './helpers';

export function getInitialData() {
    return Promise.all([
        server._getUsers(),
        server._getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions,
    }));
};

export function getUser(userId) {
    return server._getUsers()
        .then((users) => {
            const user = users[userId];
            if (helpers.validateObject(user)) {
                return user;
            }
            return null;
        })
};

export function getNewToken() {
    return server._getNewToken()
        .then(token => token);
};

// uid, question.id, optionOne || optionTwo
export function saveAnswer(info) {
    return server
        ._saveQuestionAnswer(info)
        .then();
};
// author, optionOneText, optionTwoText
export function saveQuestion(question) {
    return server._saveQuestion(question)
        .then(formattedQuestion => {
            return formattedQuestion;
        });
};
