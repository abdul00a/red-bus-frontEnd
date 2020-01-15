import React, { Component } from 'react';
import Header from './Header/Header';
import queryString from 'query-string';
import Filters from './Filters/Filters';
import { cities } from '../../city.js';

class Trips extends Component {
    render() { 
        const { fromCityName, toCityName, departureDate } = queryString.parse(this.props.location.search);
        return ( 
            <React.Fragment>
            <Header fromCityName={fromCityName} toCityName={toCityName} departureDate={departureDate} cities={cities} />
            <Filters />
            </React.Fragment>
         );
    }
}
 
export default Trips;