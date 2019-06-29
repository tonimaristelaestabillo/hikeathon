import axios from 'axios';
import { FETCH_MOUNTAINS } from './types';

export const fetchMountains = () => async dispatch => {
    const response = await axios.get(`https://intense-stream-35672.herokuapp.com/destinations`);

    if (response.status === 200) {
        dispatch({
            type: FETCH_MOUNTAINS,
            payload: response.data
        })
    }
}
