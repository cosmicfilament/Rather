import { SET_AUTH_USER } from './authActionTypes';

export default function authUser(state = null, action) {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                uid: action.uid,
                password: action.password,
                name: action.name,
                avatarURL: action.avatarURL,
                token: action.token
            }
        default:
            return state
    };
};
