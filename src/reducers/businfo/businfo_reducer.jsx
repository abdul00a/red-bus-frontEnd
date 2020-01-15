import { REQUEST_BUS_DETAIL } from '../../actions/constant';
import { toggleKey } from '../tab/toggle';

const initialState = {
  busDetail: []
};

export const BusDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BUS_DETAIL:
      let buses = action.payload.map(bus => {
        return { ...bus, key: '' };
      });
      return { ...state, busDetail: buses };
    default:
      let bus = state.busDetail.map(bus => {
        if (bus.busNumber === action.bus) {
          bus.key = toggleKey(bus.key, action);
        }
        return bus;
      });

      return { ...state, busDetail: bus };
  }
};
