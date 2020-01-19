import { REQUEST_BOARDING_BOOKED, RESET_SEATS } from '../../constant';

export const boardingPoints = (event) =>({
    type: REQUEST_BOARDING_BOOKED,
    payload:event
})

export const resetBoardingPoints = () => ({
    type: RESET_SEATS
  });
  