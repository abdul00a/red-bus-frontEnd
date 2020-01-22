import React, { Component } from 'react';
import Header from './Header/Header';
import { connect } from 'react-redux';
import Filters from './Filters/Filters';
import queryString from 'query-string';
import { cities } from '../../city.js';
import './Trips.css';
import TripPlanner from './tripPlanner/tripPlanner';
import BookingForm from './BookingForm/BookingForm';
import { resetDisplayBookingsForm } from '../../actions/BookingsForm/BookingsForm';
import { resetNumOfSeats } from '../../actions/seatBooked/seatbooked';
import { resetTripPlanner } from '../../actions/tripPlanner/tripPlanner';
import { resetBoardingPoints } from '../../actions/bookedBoardingDropping/bookedBoarding/bookedBoarding';
import { resetDroppingPoints } from '../../actions/bookedBoardingDropping/bookedDropping/bookedDropping';

class Trips extends Component {
  componentDidMount = () => {
    this.props.resetDisplayBookingsForm();
    this.props.ResetBoardingPoints();
    this.props.ResetBusSeats();
    this.props.ResetToggleTripPlanner();
    this.props.ResetDroppingPoints();
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
          <div className='search-results'>
            <TripPlanner
              fromCityName={fromCityName}
              toCityName={toCityName}
              departureDate={departureDate}
            />
          </div>
        </div>
        {this.props.display&&<BookingForm />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    display: state.bookingsForm.display,
    fromCityName: state.search.fromLocation,
    toCityName: state.search.toLocation,
    departureDate: state.search.departureDate,
    buses: state.search.buses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetDisplayBookingsForm: () => dispatch(resetDisplayBookingsForm()),
    ResetBusSeats: () => dispatch(resetNumOfSeats()),
    ResetToggleTripPlanner: () => dispatch(resetTripPlanner()),
    ResetBoardingPoints: () => dispatch(resetBoardingPoints()),
    ResetDroppingPoints: () => dispatch(resetDroppingPoints())
  };
};

Trips = connect(mapStateToProps, mapDispatchToProps)(Trips);

export default Trips;
