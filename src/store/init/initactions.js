'use strict';

/**
    * @file redux action called by app.js for initial load
    * @author John Butler
*/

import { getInitialData } from '../../utils/api';
import { receiveUsers } from '../users/usersactions';
import { receiveQuestions } from '../questions/questionsactions';
import { setAuthUser, setAuthUserUI } from '../auth/authactions';

export function handleInitialData() {
    return (dispatch) => {
        //dispatch(showLoading());
        dispatch(setAuthUser());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                //dispatch(hideLoading());
            });
    };
};
