import {
  CANCEL_TICKET,
  CANCEL_TICKET_FAILED,
  EMPTY_MESSAGE
} from '../../actions/constant';

const initialState = {
  message: ''
};

export const cancelTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case CANCEL_TICKET:
      return { ...state, message: action.payload };
    case CANCEL_TICKET_FAILED:
      return { ...action, message: action.err };
    case EMPTY_MESSAGE:
      return { ...state, message: '' };
    default:
      return state;
  }
};
