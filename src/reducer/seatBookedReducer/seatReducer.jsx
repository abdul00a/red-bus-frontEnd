import { REQUEST_SEATS } from '../../actions/constant';

const initialState = {
  numOfSeat: []
};

export const seatBooked = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEATS:
      let seatsbooked;
      if (action.payload === true) {
        seatsbooked = state.numOfSeat.concat([action.seatObj]);
      } else if (action.payload === false) {
        seatsbooked = state.numOfSeat.filter(e => e.seatName !== action.seatObj.seatName);
      }
      return { ...state, numOfSeat: seatsbooked };

    default:
      return state;
  }
};
