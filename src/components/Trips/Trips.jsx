import React, { Component } from 'react';
import Header from './Header/Header';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
import queryString from 'query-string';
import { cities } from '../../city.js';
import './Trips.css';
import { fetchSearchResults } from '../../actions/Search/Search';

class Trips extends Component {
  componentDidMount = () => {
    const { fromCityName, toCityName, departureDate } = queryString.parse(
      this.props.location.search
    );
    this.props.fetchBuses(fromCityName, toCityName, departureDate);
  };
  componentDidUpdate = prevProps => {
    if (!(this.props.fromCityName === prevProps.fromCityName && this.props.toCityName === prevProps.toCityName && this.props.departureDate === prevProps.departureDate)) {
      console.log(prevProps)
      this.props.fetchBuses(this.props.fromCityName, this.props.toCityName, this.props.departureDate);
    }
  };
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
        <div className='search-content'>
          <Filters />
          <div className='search-results'>O</div>
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
    // returnDate: state.search.returnDate,
    buses: state.search.buses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBuses: (fromCityName, toCityName, departureDate) =>
      dispatch(fetchSearchResults(fromCityName, toCityName, departureDate))
  };
};

Trips = connect(mapStateToProps, mapDispatchToProps)(Trips);

export default Trips;
