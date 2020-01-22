import { TOGGLE_DISPLAY_LOGIN_FORM, REQUEST_LOGIN, LOGGED_IN, LOGIN_FAILED } from "../../actions/constant";

const LoginReducer = (state={display:false, loggingIn:false, loggedIn:false, loginErr:false, userId:''},action)=>{
    switch(action.type){
        case TOGGLE_DISPLAY_LOGIN_FORM:
            return{...state, display:!state.display}
        case REQUEST_LOGIN:
            return{...state, loggingIn:true}
        case LOGGED_IN:
            return{...state, loggingIn:false, loggedIn:true, userId:action.userId }
        case LOGIN_FAILED:
            return{...state, loggingIn:false, loginErr:action.err }
        default:
            return state
    }
}

export default LoginReducer;