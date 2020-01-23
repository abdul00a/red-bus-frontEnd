import React, { Component } from 'react';
import { connect } from 'react-redux';
import { populateBookingBody } from '../../../actions/AddBooking/AddBooking';
import './BookingDetails.css';

class BookingDetails extends Component {
  componentDidMount = () => {
    let bookingDate = new Date();
    bookingDate =
      bookingDate.getFullYear() +
      '-' +
      String(bookingDate.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(bookingDate.getDate() + 1).padStart(2, '0');
    this.props.populateBookingBody(
      this.props.bus.busName,
      "104198639982688765758",
      `${this.props.bus.busId}`,
      `${this.props.bus.routeTable.id}`,
      this.props.email,
      this.props.phone,
      `${this.props.passengers.reduce(
        (fare, passenger) => (fare += +passenger.passengerSeatPrice),
        0
      )}`,
      this.props.departureDate,
      new Date(this.props.departureDate).toLocaleString('en', {
        weekday: 'long'
      }),
      bookingDate,
      new Date().toLocaleString('en', { weekday: 'long' }),
      this.props.boardingPoint.bppoint,
      this.props.droppingPoint.dppoint,
      this.props.boardingPoint.bptime,
      this.props.droppingPoint.dptime,
      this.props.passengers
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className='trip-info'>
          <div id='bus-info'>
            <div id='bus-name'>{this.props.bus.busName}</div>
            <div id='bus-type'>
              {this.props.bus.busType +
                (this.props.bus.sleeperAvailable ? ' | Sleeper' : '')}
            </div>
          </div>
          <div id='depart-date'>
            <b>Departure Date</b>
            <br />
            {this.props.departureDate}
          </div>
          <div id="trip-course">
          Boarding Point: {' '+this.props.boardingPoint.bppoint}
          <br/>
          Dropping Point: {' '+this.props.droppingPoint.dppoint}
          <br/>
          Duration: {' '+this.props.bus.duration}
          </div>
          <div id="passengers">
          {this.props.passengers.map(passenger=><div className="passenger-info" key={passenger.passengerSeatName}><div>{passenger.passengerName}</div><div><b>Seat: </b>{passenger.passengerSeatName}</div></div>)}
          </div>
          <div id="payable-amount-footer"><b>Total Payable Amount:</b><div><b>INR </b>{this.props.passengers.reduce(
            (fare, passenger) => (fare += +passenger.passengerSeatPrice),
            0
          )}</div></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    bus: state.BusDetail.busDetail.filter(
      bus => bus.busNumber === state.BusDetail.selectedBus
    )[0],
    email: state.bookingsForm.eMail,
    phone: state.bookingsForm.phone,
    departureDate: state.search.departureDate,
    passengers: state.bookingsForm.selectedSeats.map(seat => {
      return {
        passengerName: seat.name,
        passengerGender: seat.gender||'N/A',
        passengerAge: seat.age,
        passengerSeatId: `${seat.id}`,
        passengerSeatName: seat.seatName,
        passengerSeatPrice: `${seat.seatPrice}`
      };
    }),
    boardingPoint: state.bpdpReducer.bpDetail,
    droppingPoint: state.bpdpReducer.dpDetail,
    bookingBody: state.bookingData.bookingBody
  };
};

const mapDispatchToProps = dispatch => {
  return {
    populateBookingBody: (
      busName,
      userId,
      busId,
      routeId,
      emailOnTicket,
      phoneOnTicket,
      fare,
      dateOfJourney,
      dayOfJourney,
      dateOfBooking,
      dayOfBooking,
      boardingPoint,
      droppingPoint,
      boardingTime,
      droppingTime,
      passengers
    ) =>
      dispatch(
        populateBookingBody(
          busName,
          userId,
          busId,
          routeId,
          emailOnTicket,
          phoneOnTicket,
          fare,
          dateOfJourney,
          dayOfJourney,
          dateOfBooking,
          dayOfBooking,
          boardingPoint,
          droppingPoint,
          boardingTime,
          droppingTime,
          passengers
        )
      )
  };
};

BookingDetails = connect(mapStateToProps, mapDispatchToProps)(BookingDetails);

export default BookingDetails;
