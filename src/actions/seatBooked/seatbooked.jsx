import { REQUEST_SEATS } from '../constant';

export const numOfSeats = event => ({
  type: REQUEST_SEATS,
  payload: event
});
