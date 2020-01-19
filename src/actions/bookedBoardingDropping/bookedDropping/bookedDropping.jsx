import { REQUEST_DROPPING_BOOKED, RESET_SEATS } from '../../constant';

export const droppingPoints = event => ({
  type: REQUEST_DROPPING_BOOKED,
  payload: event
});

export const resetDroppingPoints = () => ({
  type: RESET_SEATS
});
