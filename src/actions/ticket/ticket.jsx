import { REQUEST_TICKET } from '../constant';

export const ticketAction = userID => dispatch => {
  fetch(`https://violetbus.herokuapp.com/ticket/104198639982688765758`)
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_TICKET, payload: data }));
};
