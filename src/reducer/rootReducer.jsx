import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducer/SearchReducer';
import TripModifyFormReducer from './TripModifyFormReducer/TripModifyFormReducer';
import { BusDetail } from './businfo/businfo_reducer';
import { seatBooked } from './seatBookedReducer/seatReducer';
import { bpdpReducer } from './bookedBoardingDroppingReducer/bookedBoarding';
import bookingsFormReducer from './BookingsFormReducer/BookingsFormReducer';
import { tripPlan } from './tripPlannerReducer/tripPlanner';

const rootReducer = combineReducers({
  search: searchReducer,
  modify: TripModifyFormReducer,
  BusDetail: BusDetail,
  seatBooked: seatBooked,
  bpdpReducer: bpdpReducer,
  bookingsForm: bookingsFormReducer,
  tripPlan: tripPlan,
});

export default rootReducer;
