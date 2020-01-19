import { TOGGLE_TRIP_PLANNER, RESET_SEATS } from '../constant';

export const tripPlanner = value => ({
  type: TOGGLE_TRIP_PLANNER,
  payload: value
});

export const resetTripPlanner = () => ({
  type: RESET_SEATS
});
