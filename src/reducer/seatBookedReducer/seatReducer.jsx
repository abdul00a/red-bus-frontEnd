import { REQUEST_SEATS } from '../../actions/constant';

const initialState = {
  numOfSeat: []
};

export const seatBooked = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEATS:
      let seatsbooked;
      if (action.payload.checked === true) {
        seatsbooked = state.numOfSeat.concat(action.payload.value);
      } else if (action.payload.checked === false) {
        seatsbooked = state.numOfSeat.filter(e => e !== action.payload.value);
      }
      return { ...state, numOfSeat: seatsbooked };

    default:
      return state;
  }
};
