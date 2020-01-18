import { toggleKey } from "../../tab/toggle";
import { DEPART_BEFORE_6, DEPART_6_12, DEPART_12_18, DEPART_AFTER_18, TYPE_AC, TYPE_NON_AC, TYPE_SLEEPER, ARRIVE_BEFORE_6, ARRIVE_6_12, ARRIVE_12_18, ARRIVE_AFTER_18, RESET_FILTERS } from "../../../actions/constant";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case DEPART_BEFORE_6:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.departure.substring(0,2)<=6))}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case DEPART_6_12:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.departure.substring(0,2))>=6&&parseInt(bus.departure.substring(0,2))<=12)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case DEPART_12_18:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.departure.substring(0,2))>=12&&parseInt(bus.departure.substring(0,2))<=18)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case DEPART_AFTER_18:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.departure.substring(0,2))>=18)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case TYPE_AC:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>bus.busTye==='AC')}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case TYPE_NON_AC:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>bus.busType!=='AC')}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case TYPE_SLEEPER:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>bus.sleeperAvailable)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case ARRIVE_BEFORE_6:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.arrival.substring(0,2))<=6)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case ARRIVE_6_12:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.arrival.substring(0,2))>=6&&parseInt(bus.arrival.substring(0,2))<=12)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case ARRIVE_12_18:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.arrival.substring(0,2))>=12&&parseInt(bus.arrival.substring(0,2)<=18))}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case ARRIVE_AFTER_18:
        if(action.apply){
            return{...state, filters:state.filters.concat([action]), filteredBuses:state.filteredBuses.filter(bus=>parseInt(bus.arrival.substring(0,2))>=18)}
        }else{
            return{...state, filters:state.filters.filter(filter=>filter.type!==action.type)}
        }
    case RESET_FILTERS:
        return{...state, filteredBuses: state.busDetail}
    default:
      let bus = state.filteredBuses.map(bus => {
        if (bus.busNumber === action.bus) {
          bus.key = toggleKey(bus.key, action);
        }
        return bus;
      });
      return { ...state, filteredBuses: bus };
  }
};
