import { combineReducers } from 'redux';
import {searchReducer} from './SearchReducer/SearchReducer';
import TripModifyFormReducer from './TripModifyFormReducer/TripModifyFormReducer';

const rootReducer = combineReducers(
    {
        search: searchReducer,
        modify: TripModifyFormReducer,
    }
)

export default rootReducer;