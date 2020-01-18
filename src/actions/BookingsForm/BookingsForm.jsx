import { TOGGLE_DISPLAY_BOOKINGS_FORM, TYPE_F_NAME, TYPE_L_NAME, TYPE_GENDER, TYPE_AGE, TYPE_PHONE, TYPE_E_MAIL } from "../constant"

export const toggleDisplayBookingsForm =()=>{
    return{
        type:TOGGLE_DISPLAY_BOOKINGS_FORM,
    }
}

export const typeFName = (fName) => {
    return{
        type:TYPE_F_NAME,
        fName:fName,
    }
}

export const typeLName = (lName) => {
    return{
        type:TYPE_L_NAME,
        lName:lName,
    }
}

export const typeGender = (gender) =>{
    return{
        type:TYPE_GENDER,
        gender:gender,
    }
}

export const typeAge = (age) => {
    return{
        type:TYPE_AGE,
        age:age,
    }
}

export const typePhone = (phone) => {
    return{
        type:TYPE_PHONE,
        phone:phone,
    }
}

export const typeEMail = (email) => {
    return{
        type:TYPE_E_MAIL,
        eMail:eMail,
    }
}