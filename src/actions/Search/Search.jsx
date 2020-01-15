export const REQUEST_CITIES = 'REQUEST_CITIES';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';
export const RECEIVE_CITIES_FAILED = 'RECEIVE_CITIES_FAILED';
export const TYPE_FROM = 'TYPE_FROM';
export const TYPE_TO = 'TYPE_TO';
export const SET_DEPARTURE_DATE = 'SET_DEPARTURE_DATE';
export const SET_RETURN_DATE = 'SET_RETURN_DATE';
export const SET_SEARCH_SUGGESTIONS = 'SET_SEARCH_SUGGESTIONS';

export const requestCities=()=>{
    return{
        type:REQUEST_CITIES,
    }
}

export const receiveCities=(cities)=>{
    return{
        type:RECEIVE_CITIES,
        cities:cities,
    }
}

export const receiveCitiesFailed=(err)=>{
    return{
        type:RECEIVE_CITIES_FAILED,
        err:err,
    }
}

export const typeFrom=(location)=>{
    return{
        type:TYPE_FROM,
        location: location,
    }
}

export const typeTo = (location)=>{
    return{
        type: TYPE_TO,
        location: location,
    }
}

export const setDepartureDate = (date) =>{
    return{
        type:SET_DEPARTURE_DATE,
        date:date,
    }
}

export const setReturnDate = (date) => {
    return{
        type:SET_RETURN_DATE,
        date: date,
    }
}

export const fetchCitiess=()=>{
    return (dispatch)=>{
        dispatch(requestCities());
        return fetch('').then(response=>{
            response.json().then(cities=>{
                dispatch(receiveCities(cities));
            }).catch(err=>{
                if(err){
                    dispatch(receiveCitiesFailed(err));
                }
            })
        }).catch(err=>{
            dispatch(receiveCitiesFailed(err));
        })
    }
}