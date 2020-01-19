import { TOGGLE_TRIP_PLANNER } from '../../actions/constant';

const initialState = {
  toggle: 'false'
};

export const tripPlan = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TRIP_PLANNER:
      return { ...state, toggle: action.payload };
    default:
      return state;
  }
};
