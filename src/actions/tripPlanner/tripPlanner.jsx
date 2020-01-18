import { TOGGLE_TRIP_PLANNER } from '../constant';

export const tripPlanner = value => ({
  type: TOGGLE_TRIP_PLANNER,
  payload: value
});
