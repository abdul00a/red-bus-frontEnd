import { REQUEST_BUS_DETAIL } from '../../actions/constant';
import { filterReducer } from './filterResults/filterResults';

const initialState = {
  busDetail: [],
  filteredBuses: [],
  filters:[],
};

export const BusDetail = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BUS_DETAIL:
      let buses = action.payload.map(bus => {
        return { ...bus, key: '' };
      });
      return { ...state, busDetail: buses, filteredBuses: buses };
    default:
      return{...filterReducer(state,action)}
  }
};
