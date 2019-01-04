import { RECEIVE_USERS } from '../../utils/constants';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
};
