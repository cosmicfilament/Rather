import { SET_AUTH_USER } from '../../utils/constants';
import { getUser, getNewToken } from '../../utils/api';
import { LOGIN_FAILED_TOKEN, LOGIN_DEFAULT_TOKEN } from '../../utils/constants';
import helpers from '../../utils/helpers';

// set auth user from login
export function setAuthUser(uid = '', password = '', token = LOGIN_DEFAULT_TOKEN) {

    return ({
        type: SET_AUTH_USER,
        uid,
        password,
        token
    });
};

export function handleLogin(uid, password) {
    return (dispatch) => {
        // showloading

        // validate the password
        // if valid then get a new Token
        // and then dispatch authUser object
        Promise.all([
            getUser(uid),
            getNewToken()
        ]).then(([user, token]) => {
            user && user.password === password && token && token > 0
                ? dispatch(setAuthUser(
                    uid, password, token))
                : dispatch(setAuthUser(uid, '', LOGIN_FAILED_TOKEN));
        })
    };
};

export function handleLogout() {
    return (dispatch) => {
        dispatch(setAuthUser('', '', LOGIN_DEFAULT_TOKEN));
    }
};
