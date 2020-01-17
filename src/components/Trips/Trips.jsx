import React, { Component } from 'react';
import Header from './Header/Header';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
import queryString from 'query-string';
import { cities } from '../../city.js';
import './Trips.css';
import TripPlanner from './tripPlanner/tripPlanner';

class Trips extends Component {

  render() {
    const { fromCityName, toCityName, departureDate } = queryString.parse(
      this.props.location.search
    );
    return (
      <React.Fragment>
        <Header
          fromCityName={fromCityName}
          toCityName={toCityName}
          departureDate={departureDate}
          cities={cities}
        />
        <div className="search-content">
          <Filters />
          <div className="search-results">
            <TripPlanner
              fromCityName={fromCityName}
              toCityName={toCityName}
              departureDate={departureDate}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fromCityName: state.search.fromLocation,
    toCityName: state.search.toLocation,
    departureDate: state.search.departureDate,
    buses: state.search.buses
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Trips = connect(mapStateToProps, mapDispatchToProps)(Trips);

export default Trips;
