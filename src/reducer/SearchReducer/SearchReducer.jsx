import { REQUEST_CITIES, RECEIVE_CITIES, RECEIVE_CITIES_FAILED, TYPE_FROM, TYPE_TO, SET_DEPARTURE_DATE, SET_RETURN_DATE, SET_SEARCH_SUGGESTIONS, REQUEST_BUSES, RECEIVE_BUSES, RECEIVE_BUSES_FAILED } from "../../actions/constant";

export const searchReducer = ( state={cities:[], fetchingCities:false, err:false, departureDate:'', returnDate:'', searchSuggestions:[], fetchingBuses:false, searchErr:false, buses:[] }, action)=>{
    switch(action.type){
        case REQUEST_CITIES:
            return{...state, fetchingCities:true}
        case RECEIVE_CITIES:
            return{...state, fetchingCities:false, cities:action.cities}
        case RECEIVE_CITIES_FAILED:
            return{...state, fetchingCities:false, err:action.err}
        case TYPE_FROM:
            return{...state, fromLocation:action.location}
        case TYPE_TO:
            return{...state, toLocation:action.location}
        case SET_DEPARTURE_DATE:
            return{...state, departureDate:action.date}
        case SET_RETURN_DATE:
            return{...state, returnDate:action.date}
        case SET_SEARCH_SUGGESTIONS:
            return{...state, searchSuggestions:action.suggestions}
        case REQUEST_BUSES:
            return{...state, fetchingBuses:true}
        case RECEIVE_BUSES:
            return{...state, fetchingBuses:false, buses:action.buses}
        case RECEIVE_BUSES_FAILED:
            return{...state, fetchingBuses:false, searchErr:action.err}
        default:
            return state

    }
}
