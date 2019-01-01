import { RECEIVE_USERS } from './usersActionTypes';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
};
