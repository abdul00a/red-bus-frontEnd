import { TOGGLE_DISPLAY_BOOKINGS_FORM, TYPE_F_NAME, TYPE_L_NAME, TYPE_GENDER, TYPE_AGE, TYPE_PHONE, TYPE_E_MAIL } from "../../actions/constant";

const bookingsFormReducer = (state={ display:false, fName:'', lName:'', gender:'', age:'', phone:'', eMail:'', },action)=>{
    switch(action.type){
        case TOGGLE_DISPLAY_BOOKINGS_FORM:
            return{...state, display:!state.display}
        case TYPE_F_NAME:
            return{...state, fName:action.fName}
        case TYPE_L_NAME:
            return{...state, lName:action.lName}
        case TYPE_GENDER:
            return{...state, gender:action.gender}
        case TYPE_AGE:
            return{...state, age:action.age}
        case TYPE_PHONE:
            return{...state, phone:action.phone}
        case TYPE_E_MAIL:
            return{...state, eMail:action.eMail}
        default:
            return state
    }
}

export default bookingsFormReducer;