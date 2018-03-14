import {
    USER_UPDATE,
    USER_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    occupation: '',
    city: ''
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case USER_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        case USER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};