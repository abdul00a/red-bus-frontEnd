import { REQUEST_BOARDING_BOOKED } from '../../constant';

export const boardingPoints = (event) =>({
    type: REQUEST_BOARDING_BOOKED,
    payload:event
})