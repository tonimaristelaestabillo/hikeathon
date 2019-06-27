import { FETCH_MOUNTAINS } from './types';
import mountains from '../data/mountains.json'

export const fetchMountains = () => async dispatch => {
    dispatch({
        type: FETCH_MOUNTAINS,
        payload: mountains
    })
}
