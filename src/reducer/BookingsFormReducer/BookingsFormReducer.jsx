import { TOGGLE_DISPLAY_BOOKINGS_FORM, TYPE_PHONE, TYPE_E_MAIL, POPULATE_SEATS, TYPE_PASSENGER_F_NAME, TYPE_PASSENGER_L_NAME, TYPE_PASSENGER_GENDER, TYPE_PASSENGER_AGE } from "../../actions/constant";

const bookingsFormReducer = (state={ display:false, selectedSeats:[], phone:'', eMail:'', },action)=>{
    let tempState=[];
    switch(action.type){
        case TOGGLE_DISPLAY_BOOKINGS_FORM:
            return{...state, display:!state.display}
        case TYPE_PHONE:
            return{...state, phone:action.phone}
        case TYPE_E_MAIL:
            return{...state, eMail:action.eMail}
        case POPULATE_SEATS:
            return{...state, selectedSeats:action.seats.map(seat=>{
                return{...seat, fName:'', lName:'', gender:'', age:'' }
            })}
        case TYPE_PASSENGER_F_NAME:
            tempState = [...state.selectedSeats]
            tempState=tempState.map(seat=>{
                if(seat.id===action.seatId)
                {
                    seat.fName=action.fName
                }
                return(seat)
            })
            return{...state, selectedSeats:tempState}
        case TYPE_PASSENGER_L_NAME:
            tempState = [...state.selectedSeats]
            tempState=tempState.map(seat=>{
                if(seat.id===action.seatId)
                {
                    seat.lName=action.lName
                }
                return(seat)
            })
            return{...state, selectedSeats:tempState}
        case TYPE_PASSENGER_GENDER:
            tempState = [...state.selectedSeats]
            tempState=tempState.map(seat=>{
                if(seat.id===action.seatId)
                {
                    seat.gender=action.gender
                }
                return(seat)
            })
            return{...state, selectedSeats:tempState}
        case TYPE_PASSENGER_AGE:
            tempState = [...state.selectedSeats]
            tempState=tempState.map(seat=>{
                if(seat.id===action.seatId)
                {
                    seat.age=action.age
                }
                return(seat)
            })
            return{...state, selectedSeats:tempState}
        default:
            return state
    }
}

export default bookingsFormReducer;