import { REQUEST_SEATS } from '../constant';

export const numOfSeats = (checked, seatObj) => ({
  type: REQUEST_SEATS,
  payload: checked,
  seatObj: seatObj
});
