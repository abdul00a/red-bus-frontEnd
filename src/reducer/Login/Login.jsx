import { TOGGLE_DISPLAY_LOGIN_FORM, REQUEST_LOGIN, LOGGED_IN, LOGIN_FAILED, REQUEST_LOGOUT, RECEIVE_LOGOUT, RECEIVE_LOGOUT_FAILED } from "../../actions/constant";

const LoginReducer = (state={display:false, loggingIn:false, loggingOut:false, loggedIn:false, loginErr:false, userId:'', logoutErr:false},action)=>{
    switch(action.type){
        case TOGGLE_DISPLAY_LOGIN_FORM:
            return{...state, display:!state.display}
        case REQUEST_LOGIN:
            return{...state, loggingIn:true}
        case LOGGED_IN:
            return{...state, loggingIn:false, loggedIn:true, userId:action.userId, accessToken:action.token }
        case LOGIN_FAILED:
            return{...state, loggingIn:false, loginErr:action.err }
        case REQUEST_LOGOUT:
            return{...state, loggingOut:true}
        case RECEIVE_LOGOUT:
            return{...state, loggingOut:false, accessToken:'', userId:'', loggedIn:false}
        case RECEIVE_LOGOUT_FAILED:
            return{...state, loggingOut:false, logoutErr: action.err }
        default:
            return state
    }
}

export default LoginReducer;