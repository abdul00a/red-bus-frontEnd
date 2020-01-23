import {
  TOGGLE_DISPLAY_LOGIN_FORM,
  REQUEST_LOGIN,
  LOGGED_IN,
  LOGIN_FAILED
} from '../constant';

export const toggleDisplayLoginForm = () => {
  return {
    type: TOGGLE_DISPLAY_LOGIN_FORM
  };
};

export const requestLogin = () => {
  return {
    type: REQUEST_LOGIN
  };
};

export const loggedIn = (userId, accessToken) => {
  return {
    type: LOGGED_IN,
    userId: userId,
    accessToken: accessToken
  };
};

export const loginFailed = err => {
  return {
    type: LOGIN_FAILED,
    err: err
  };
};

export const logIn = () => {
  return dispatch => {
    console.log('fghj');
    dispatch(requestLogin());
    return fetch('https://violetbus.herokuapp.com/userlogin', {
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
      .then(response => {
        response
          .json()
          .then(loginData => {
            console.log(loginData);
            dispatch(loggedIn(loginData.userId, loginData.accessToken));
          })
          .catch(err => {
            console.log(err);
            dispatch(loginFailed(err));
          });
      })
      .catch(err => {
        console.log(err);
        dispatch(loggedIn(err));
      });
  };
};
