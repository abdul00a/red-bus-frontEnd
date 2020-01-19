import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducer/SearchReducer';
import TripModifyFormReducer from './TripModifyFormReducer/TripModifyFormReducer';
import { BusDetail } from './businfo/businfo_reducer';
import { seatBooked } from './seatBookedReducer/seatReducer';
import { bpdpReducer } from './bookedBoardingDroppingReducer/bookedBoarding';
import { tripPlan } from './tripPlannerReducer/tripPlanner';

const rootReducer = combineReducers({
  search: searchReducer,
  modify: TripModifyFormReducer,
  BusDetail: BusDetail,
  // selectedBus
  seatBooked: seatBooked,
  bpdpReducer: bpdpReducer,
  tripPlan: tripPlan
});

export default rootReducer;
