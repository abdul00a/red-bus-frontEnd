import { REQUEST_BUS_DETAIL } from '../constant';

// export const reqBusDetail = () => ({ type: REQUEST_BUS_DETAIL, payload: data });

export const reqBusDetail = (
  fromCityName,
  toCityName,
  departureDate
) => dispatch => {
  fetch(
    `https://violetbus.herokuapp.com/search?fromCityName=${fromCityName}&toCityName=${toCityName}&departureDate=${departureDate}&returnDate`
  )
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_BUS_DETAIL, payload: data }));
};
