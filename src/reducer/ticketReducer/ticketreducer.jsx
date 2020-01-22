import { REQUEST_TICKET } from '../../actions/constant';

const initialState = {
  tickets: []
};

export const userTicket = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TICKET:
      return { ...state, tickets: action.payload };
    default:
      return state;
  }
};
