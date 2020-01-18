import { REQUEST_DROPPING_BOOKED } from '../../constant';

export const droppingPoints = event => ({
  type: REQUEST_DROPPING_BOOKED,
  payload: event
});
