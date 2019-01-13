'use strict';

/**
    * @file user object redux action functions
    * @author John Butler
*/

import { RECEIVE_USERS, ADD_ANSWER } from '../../utils/constants';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
};

export function addAnswerToUser({ uid, qid, answer }) {
    return {
        type: ADD_ANSWER,
        uid,
        qid,
        answer
    };
};
