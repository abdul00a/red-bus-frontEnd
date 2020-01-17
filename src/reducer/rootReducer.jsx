import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducer/SearchReducer';
import TripModifyFormReducer from './TripModifyFormReducer/TripModifyFormReducer';
import { BusDetail } from './businfo/businfo_reducer';


const rootReducer = combineReducers({
  search: searchReducer,
  modify: TripModifyFormReducer,
  BusDetail: BusDetail,
});

export default rootReducer;
