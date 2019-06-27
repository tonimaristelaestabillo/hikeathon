import { combineReducers } from 'redux';
import TravelReducer from './TravelReducer';

export default combineReducers({
    travel: TravelReducer
})