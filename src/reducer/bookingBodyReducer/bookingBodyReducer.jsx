import { REQUEST_ADD_BOOKING, RECEIVE_ADD_BOOKING, RECEIVE_ADD_BOOKING_FAILED, POPULATE_BOOKING_BODY, TOGGLE_EXPIRE_HOLD_TIMER, ENABLE_TIMER, SET_PAYMENT_METHOD } from "../../actions/constant";

const bookingBodyReducer = (state={bookingBody:{}, holdTimerExpired:true, bookingData:[], requestingAddBooking:false, addBookingFailed:false, paymentMethod:''}, action) => {
    switch(action.type){
        case REQUEST_ADD_BOOKING:
            return{...state, requestingAddBooking:true}
        case RECEIVE_ADD_BOOKING:
            return{...state, requestingAddBooking:false, bookingData:action.bookings }
        case RECEIVE_ADD_BOOKING_FAILED:
            return{...state, requestingAddBooking:false, addBookingFailed:action.err }
        case POPULATE_BOOKING_BODY:
            return{...state, bookingBody:action.bookingData }
        case TOGGLE_EXPIRE_HOLD_TIMER:
            return {...state, holdTimerExpired:true }
        case ENABLE_TIMER:
            return {...state, holdTimerExpired:false }
        case SET_PAYMENT_METHOD:
            let bookingBody={...state.bookingBody, paymentMethod:action.paymentMethod}
            return {...state, bookingBody:bookingBody }
        default:
            return state
    }
}

export default bookingBodyReducer;