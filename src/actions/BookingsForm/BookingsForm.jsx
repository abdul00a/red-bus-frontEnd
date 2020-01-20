import { TOGGLE_DISPLAY_BOOKINGS_FORM, TYPE_PHONE, TYPE_E_MAIL, POPULATE_SEATS, TYPE_PASSENGER_NAME, TYPE_PASSENGER_GENDER, TYPE_PASSENGER_AGE } from "../constant"

export const toggleDisplayBookingsForm =()=>{
    return{
        type:TOGGLE_DISPLAY_BOOKINGS_FORM,
    }
}

export const typePhone = (phone) => {
    return{
        type:TYPE_PHONE,
        phone:phone,
    }
}

export const typeEMail = (eMail) => {
    return{
        type:TYPE_E_MAIL,
        eMail:eMail,
    }
}

export const populateSeats=(seats)=>{
    return{
        type:POPULATE_SEATS,
        seats:seats,
    }
}

export const typePassengerName = (fName, seatId) => {
    return{
        type:TYPE_PASSENGER_NAME,
        fName:fName,
        seatId:seatId,
    }
}

export const typePassengerGender = (gender, seatId) => {
    return{
        type:TYPE_PASSENGER_GENDER,
        gender:gender,
        seatId:seatId,
    }
}

export const typePassengerAge = (age, seatId) => {
    return{
        type:TYPE_PASSENGER_AGE,
        age:age,
        seatId:seatId,
    }
}