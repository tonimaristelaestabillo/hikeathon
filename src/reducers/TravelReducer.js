import { FETCH_MOUNTAINS } from '../actions/types';

const INITIAL_STATE = {
    mountains: []
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_MOUNTAINS:
            return {
                ...state,
                mountains: action.payload
            }
        default:
            return state;
    }
}