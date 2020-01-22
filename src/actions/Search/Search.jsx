import {
  REQUEST_CITIES,
  RECEIVE_CITIES,
  RECEIVE_CITIES_FAILED,
  TYPE_FROM,
  TYPE_TO,
  SET_DEPARTURE_DATE,
  SET_RETURN_DATE,
  SET_SEARCH_SUGGESTIONS,
  RESET_SEARCH
} from '../constant';

export const requestCities = () => {
  return {
    type: REQUEST_CITIES
  };
};

export const receiveCities = cities => {
  return {
    type: RECEIVE_CITIES,
    cities: cities
  };
};

export const receiveCitiesFailed = err => {
  return {
    type: RECEIVE_CITIES_FAILED,
    err: err
  };
};

export const typeFrom = location => {
  return {
    type: TYPE_FROM,
    location: location
  };
};

export const typeTo = location => {
  return {
    type: TYPE_TO,
    location: location
  };
};

export const setDepartureDate = date => {
  return {
    type: SET_DEPARTURE_DATE,
    date: date
  };
};

export const setReturnDate = date => {
  return {
    type: SET_RETURN_DATE,
    date: date
  };
};

export const setSearchSuggestions = suggestions => {
  return {
    type: SET_SEARCH_SUGGESTIONS,
    suggestions: suggestions
  };
};

export const resetSearch=()=>{
  return{
    type:RESET_SEARCH,
  }
}

export const fetchCities = () => {
  return dispatch => {
    dispatch(requestCities());
    return fetch('https://violetbus.herokuapp.com/city',{headers:{'Access-Control-Allow-Origin':'*'}})
      .then(response => {
        response
          .json()
          .then(cities => {
            dispatch(receiveCities(cities));
          })
          .catch(err => {
            if (err) {
              dispatch(receiveCitiesFailed(err));
            }
          });
      })
      .catch(err => {
        dispatch(receiveCitiesFailed(err));
      });
  };
};
