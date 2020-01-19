import {
  REQUEST_BOARDING_BOOKED,
  REQUEST_DROPPING_BOOKED,
  RESET_SEATS
} from '../../actions/constant';

const initialState = {
  selectedBp: '',
  selectedDp: '',
  bpDetail: {},
  dpDetail: {}
};

export const bpdpReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOARDING_BOOKED:
      return {
        ...state,
        selectedBp: action.payload.value,
        bpDetail: action.payload.bpObj
      };
    case REQUEST_DROPPING_BOOKED:
      return {
        ...state,
        selectedDp: action.payload.value,
        dpDetail: action.payload.dpObj
      };
    case RESET_SEATS:
      return initialState;
    default:
      return state;
  }
};
