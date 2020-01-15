import { REQUEST_BUS_DETAIL } from '../../actions/constant';

const initialState = {
  busDetail: []
};

export const BusDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BUS_DETAIL:
      return { ...state, busDetail: action.payload };
    default:
      return state;
  }
};
