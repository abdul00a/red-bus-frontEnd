import { TOGGLE_TRIP_PLANNER, RESET_SEATS } from '../../actions/constant';

const initialState = {
  toggle: 'false'
};

export const tripPlan = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TRIP_PLANNER:
      return { ...state, toggle: action.payload };

    case RESET_SEATS:
      return initialState;
    default:
      return state;
  }
};
