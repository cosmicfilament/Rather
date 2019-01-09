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
