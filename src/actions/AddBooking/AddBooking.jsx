import { REQUEST_ADD_BOOKING, RECEIVE_ADD_BOOKING, RECEIVE_ADD_BOOKING_FAILED, POPULATE_BOOKING_BODY } from "../constant"

export const requestAddBooking = () => {
    return{
        type:REQUEST_ADD_BOOKING,
    }
}

export const receiveAddBooking = (bookings) => {
    return{
        type:RECEIVE_ADD_BOOKING,
        bookings:bookings,
    }
}

export const receiveAddBookingFailed = (err) =>{
    return{
        type:RECEIVE_ADD_BOOKING_FAILED,
        err:err,
    }
}

export const populateBookingBody = (busName, userId, busId, routeId, emailOnTicket, phoneOnTicket, fare, dateOfJourney, dayOfJourney, dateOfBooking, dayOfBooking, boardingPoint, droppingPoint, boardingTime, droppingTime, passengers) => {
    return{
        type:POPULATE_BOOKING_BODY,
        bookingData:{busName, userId, busId, routeId, emailOnTicket, phoneOnTicket, fare, dateOfJourney, dayOfJourney, dateOfBooking, dayOfBooking, boardingPoint, droppingPoint, boardingTime, droppingTime, passengers}
    }
}

export const addBooking = (bookingData) => {
    return (dispatch)=>{
        dispatch(requestAddBooking());
        return fetch('https://violetbus.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData) 
          }).then(response=>{
              response.json().then(bookings=>{
                  dispatch(receiveAddBooking(bookings));
              }).catch(err=>{
                  dispatch(receiveAddBookingFailed(err));
              })
          }).catch(err=>{
            dispatch(receiveAddBookingFailed(err));
          })
    }
}