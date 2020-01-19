import { REQUEST_SEATS, RESET_SEATS } from '../constant';

export const numOfSeats = (checked, seatObj) => ({
  type: REQUEST_SEATS,
  payload: checked,
  seatObj: seatObj
});

export const resetNumOfSeats = () => ({
  type: RESET_SEATS
});
