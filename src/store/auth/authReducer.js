'use strict';

/**
    * @file authUser is a generated object synthesized from the users object that represents the current logged in user. This is the redux reducer for that object.
    * @author John Butler
*/

import { SET_AUTH_USER } from '../../utils/constants';

export default function authUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                uid: action.uid,
                password: action.password,
                token: action.token
            }
        default:
            return state
    };
};
