import { TOGGLE_DISPLAY_LOGIN_FORM, REQUEST_LOGIN, LOGGED_IN, LOGIN_FAILED } from "../constant"

export const toggleDisplayLoginForm = () =>{
    return{
        type:TOGGLE_DISPLAY_LOGIN_FORM
    }
}

export const requestLogin = () => {
    return{
        type:REQUEST_LOGIN,
    }
}

export const loggedIn = (userId) => {
    return{
        type:LOGGED_IN,
        userId:userId,
    }
}

export const loginFailed = (err) => {
    return{
        type:LOGIN_FAILED,
        err:err,
    }
}

export const logIn = () => {
    return (dispatch) => {
        console.log('fghj')
        dispatch(requestLogin())
        return fetch('https://violetbus.herokuapp.com/userlogin',{method:'POST', headers:{'Access-Control-Allow-Origin':'*'}}).then(response=>{
            response.json().then(loginData=>{
                console.log(loginData)
                dispatch(loggedIn(loginData.userId));
            }).catch(err=>{
                console.log(err)
                diispatch(loginFailed(err));
            })
        }).catch(err=>{
            console.log(err)
            dispatch(loggedIn(err));
        })
    }
}