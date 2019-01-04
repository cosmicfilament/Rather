import { RECEIVE_USERS } from '../../utils/constants';

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        default:
            return state
    }
}
