import { SET_AUTH_USER, SET_AUTH_USER_TOKEN } from '../../utils/constants';
import { getUser, getNewToken } from '../../utils/api';
import { LOGIN_FAILED_TOKEN, LOGIN_DEFAULT_TOKEN } from '../../utils/constants';
import helpers from '../../utils/helpers';

// set auth user from login or from localStorage
export function setAuthUser(uid = '', password = '', token = LOGIN_DEFAULT_TOKEN) {
    const tokenObj = helpers.getFromLocalStorage();
    //if the token hasn't expired then bypass login
    if (helpers.validateObject(tokenObj) && tokenObj.token > Date.now()) {
        uid = tokenObj.uid;
        token = tokenObj.token;
    }

    return ({
        type: SET_AUTH_USER,
        uid,
        password,
        token
    });
};

export function handleLogin(uid, password) {
    return (dispatch) => {

        // validate the password
        // if valid then get a new Token
        // and then dispatch authUser object
        Promise.all([
            getUser(uid),
            getNewToken()
        ]).then(([user, token]) => {
            user && user.password === password && token && token > 0
                ? dispatch(setAuthUser(uid, '', token))
                : token = LOGIN_FAILED_TOKEN && dispatch(setAuthUser(uid, '', LOGIN_FAILED_TOKEN));
            return token;
        }).then((token) => {
            token > 0
                ? helpers.saveToLocalStorage({ uid, token })
                : helpers.clearLocalStorage();
        });
    };
};

export function handleLogout() {
    return (dispatch) => {
        helpers.clearLocalStorage();
        dispatch(setAuthUser('', '', LOGIN_DEFAULT_TOKEN));
    };
};

export function handleRenewToken({ uid, token }) {
    return (dispatch) => {
        getNewToken(uid).then((token) => {
            token > 0
                ? dispatch(setAuthUser(uid, '', token))
                : token = LOGIN_FAILED_TOKEN && dispatch(setAuthUser(uid, '', LOGIN_FAILED_TOKEN));
            return token;
        }).then((token) => {
            token > 0
                ? helpers.saveToLocalStorage({ uid, token })
                : helpers.clearLocalStorage();
        });
    };
};
