import { TOGGLE_DISPLAY_BOOKINGS_FORM, TYPE_PHONE, TYPE_E_MAIL, POPULATE_SEATS } from "../../actions/constant";

const bookingsFormReducer = (state={ display:false, selectedSeats:[], phone:'', eMail:'', },action)=>{
    switch(action.type){
        case TOGGLE_DISPLAY_BOOKINGS_FORM:
            return{...state, display:!state.display}
        case TYPE_PHONE:
            return{...state, phone:action.phone}
        case TYPE_E_MAIL:
            return{...state, eMail:action.eMail}
        case POPULATE_SEATS:
            return{...state, selectedSeats:action.seats}
        default:
            return state
    }
}

export default bookingsFormReducer;