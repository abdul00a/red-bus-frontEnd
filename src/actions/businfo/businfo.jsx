import { REQUEST_BUS_DETAIL } from '../constant';

// export const reqBusDetail = () => ({ type: REQUEST_BUS_DETAIL, payload: data });

export const reqBusDetail = () => dispatch => {
  fetch(
    `https://violetbus.herokuapp.com/search?fromCityName=Indore&toCityName=Delhi&departureDate=2020-01-15&returnDate`
  )
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_BUS_DETAIL, payload: data }));
};
