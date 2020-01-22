import { combineReducers } from 'redux';
import { searchReducer } from './SearchReducer/SearchReducer';
import TripModifyFormReducer from './TripModifyFormReducer/TripModifyFormReducer';
import { BusDetail } from './businfo/businfo_reducer';
import { seatBooked } from './seatBookedReducer/seatReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { bpdpReducer } from './bookedBoardingDroppingReducer/bookedBoarding';
import bookingsFormReducer from './BookingsFormReducer/BookingsFormReducer';
import { tripPlan } from './tripPlannerReducer/tripPlanner';
import bookingBodyReducer from './bookingBodyReducer/bookingBodyReducer';
import LoginReducer from './Login/Login';
import { userTicket } from './ticketReducer/ticketreducer';
import { cancelTicketReducer } from './canelTicket/cancelticket';

const persistBusDetailReducerConfig = {
  key: 'bus-detail',
  storage,
}

const persistSeatBookedConfig = {
  key: 'seat-booked',
  storage,
}

const persistBpDpConfig = {
  key: 'bp-dp',
  storage,
}

const persistBookingsFormConfig = {
  key: 'bookings-form',
  storage,
}

const persistSearchConfig = {
  key: 'search',
  storage,
}

const persistLoginConfig = {
  key: 'login',
  storage,
}

const persistBookingBodyConfig={
  key:'booking-body',
  storage,
}

const rootReducer = combineReducers({
  search: persistReducer(persistSearchConfig,searchReducer),
  modify: TripModifyFormReducer,
  BusDetail: persistReducer(persistBusDetailReducerConfig,BusDetail),
  seatBooked: persistReducer(persistSeatBookedConfig,seatBooked),
  bpdpReducer: persistReducer(persistBpDpConfig,bpdpReducer),
  bookingsForm: persistReducer(persistBookingsFormConfig,bookingsFormReducer),
  tripPlan: tripPlan,
  bookingData:persistReducer(persistBookingBodyConfig,bookingBodyReducer),
  Login: persistReducer(persistLoginConfig,LoginReducer),
  userTicket: userTicket,
  cancled: cancelTicketReducer
});

export default rootReducer;
