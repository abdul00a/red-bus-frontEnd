import { REQUEST_BUS_DETAIL } from '../constant';

// export const reqBusDetail = () => ({ type: REQUEST_BUS_DETAIL, payload: data });

export const reqBusDetail = () => dispatch => {
  fetch(`https://demoendpoint.herokuapp.com/`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_BUS_DETAIL, payload: data }));
};
