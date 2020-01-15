import { REQUEST_CITIES, RECEIVE_CITIES, RECEIVE_CITIES_FAILED, TYPE_FROM, TYPE_TO, SET_DEPARTURE_DATE, SET_RETURN_DATE, SET_SEARCH_SUGGESTIONS } from "../../actions/Search/Search";

export const searchReducer = ( state={cities:[], fetchingCities:false, err:false, fromLocation:'', toLocation:'', departureDate:'', returnDate:'', searchSuggestions:[]}, action)=>{
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
        default:
            return state

    }
}