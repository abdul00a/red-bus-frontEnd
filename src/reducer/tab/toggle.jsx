import { TOGGLE_TABS, CLOSE_TABS } from '../../actions/constant';

const initialState = ''
  
export const toggleKey = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TABS:
      if (state === action.payload) {
        return '0';
      } else {
        return  action.payload ;
      }
    case CLOSE_TABS:
      return '0'
    default:
      return state;
  }
};
