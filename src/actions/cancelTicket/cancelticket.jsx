import {
  CANCEL_TICKET,
  CANCEL_TICKET_FAILED,
  EMPTY_MESSAGE
} from '../constant';

export const receiveError = err => ({ type: CANCEL_TICKET_FAILED, err: err });

export const cancelTicket = cancelObj => dispatch => {
  fetch(`https://violetbus.herokuapp.com/cancelTicket`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cancelObj)
  })
    .then(res => res.text())
    .then(data => {
      return dispatch({ type: CANCEL_TICKET, payload: data });
    })
    .catch(err => dispatch(receiveError(err)));
};

export const emptyMessage = () => ({ type: EMPTY_MESSAGE });
