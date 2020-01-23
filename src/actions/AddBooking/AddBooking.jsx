import {
  REQUEST_ADD_BOOKING,
  RECEIVE_ADD_BOOKING,
  RECEIVE_ADD_BOOKING_FAILED,
  POPULATE_BOOKING_BODY,
  TOGGLE_EXPIRE_HOLD_TIMER,
  ENABLE_TIMER,
  SET_PAYMENT_METHOD,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT,
  RECEIVE_LOGOUT_FAILED
} from '../constant';

export const requestAddBooking = () => {
  return {
    type: REQUEST_ADD_BOOKING
  };
};

export const receiveAddBooking = bookings => {
  return {
    type: RECEIVE_ADD_BOOKING,
    bookings: bookings
  };
};

export const receiveAddBookingFailed = err => {
  return {
    type: RECEIVE_ADD_BOOKING_FAILED,
    err: err
  };
};

export const toggleExpireHoldTimer = () => {
  return {
    type: TOGGLE_EXPIRE_HOLD_TIMER
  };
};

export const enableExpireHoldTimer = () => {
  return {
    type: ENABLE_TIMER
  };
};

export const setPaymentMethod = paymentMethod => {
  return {
    type: SET_PAYMENT_METHOD,
    paymentMethod: paymentMethod
  };
};

export const requestLogout=()=>{
    return{
        type:REQUEST_LOGOUT,
    }
}

export const receiveLogout =()=>{
    return{
        type:RECEIVE_LOGOUT,
    }
}

export const receiveLogoutFailed=()=>{
    return{
        type:RECEIVE_LOGOUT_FAILED,
    }
}

export const populateBookingBody = (
  busName,
  userId,
  busId,
  routeId,
  emailOnTicket,
  phoneOnTicket,
  fare,
  dateOfJourney,
  dayOfJourney,
  dateOfBooking,
  dayOfBooking,
  boardingPoint,
  droppingPoint,
  boardingTime,
  droppingTime,
  passengers
) => {
  return {
    type: POPULATE_BOOKING_BODY,
    bookingData: {
      busName,
      userId,
      busId,
      routeId,
      emailOnTicket,
      phoneOnTicket,
      fare,
      dateOfJourney,
      dayOfJourney,
      dateOfBooking,
      dayOfBooking,
      boardingPoint,
      droppingPoint,
      boardingTime,
      droppingTime,
      passengers
    }
  };
};

export const addBooking = bookingData => {
  console.log(bookingData.paymentMethod);
  return dispatch => {
    dispatch(requestAddBooking());
    if (bookingData.paymentMethod === 'card') {
      fetch('https://violetbus.herokuapp.com/addBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(bookingData)
      })
        .then(response => {
          response
            .json()
            .then(bookings => {
              console.log(bookings);
              dispatch(receiveAddBooking(bookings));
            })
            .catch(err => {
              dispatch(receiveAddBookingFailed(err));
            });
        })
        .catch(err => {
          dispatch(receiveAddBookingFailed(err));
        });
    } else {
      fetch('https://violetbus.herokuapp.com/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(bookingData)
      })
        .then(response => {
          response
            .json()
            .then(bookings => {
              console.log(bookings);
              dispatch(receiveAddBooking(bookings));
            })
            .catch(err => {
              dispatch(receiveAddBookingFailed(err));
            });
        })
        .catch(err => {
          dispatch(receiveAddBookingFailed(err));
        });
    }
  };
};

export const logout=()=>{
    return (dispatch)=>{
        dispatch(requestLogout());
        fetch('https://violetbus.herokuapp.com/logout').then(response=>{
            response.json().then(data=>{
                dispatch(receiveLogout());
            }).catch(err=>{
                dispatch(receiveLogoutFailed());
            })
        }).catch(err=>{
            dispatch(receiveLogoutFailed());
        })
    }
}