import { REQUEST_ADD_BOOKING, RECEIVE_ADD_BOOKING, RECEIVE_ADD_BOOKING_FAILED, POPULATE_BOOKING_BODY } from "../../actions/constant";

const bookingBodyReducer = (state={bookingBody:{}, bookingData:[], requestingAddBooking:false, addBookingFailed:false}, action) => {
    switch(action.type){
        case REQUEST_ADD_BOOKING:
            return{...state, requestingAddBooking:true}
        case RECEIVE_ADD_BOOKING:
            return{...state, requestingAddBooking:false, bookingData:action.bookings }
        case RECEIVE_ADD_BOOKING_FAILED:
            return{...state, requestingAddBooking:false, addBookingFailed:action.err }
        case POPULATE_BOOKING_BODY:
            return{...state, bookingBody:action.bookingData }
        default:
            return state
    }
}

export default bookingBodyReducer;