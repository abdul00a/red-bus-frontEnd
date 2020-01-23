import React, { Component } from 'react';
import './paymentPage.css';
import PaymentCard from './paymentCard/paymentCard';
import { Icon } from 'antd';
import { withRouter } from 'react-router';
import BookingDetails from './BookingDetails/BookingDetails';
import { connect } from 'react-redux';
import SeatHoldTimer from './SeatHoldTimer/SeatHoldTimer';

class PaymentPage extends Component {
  componentDidMount = () => {
    if (this.props.timerExpired) {
      alert("Currently you don't have access to this page");
      this.props.history.push('/');
    }
  };

  componentDidUpdate = () => {
    if (this.props.timerExpired) {
      alert("You're out of time...");
      this.props.history.push('/');
    }
  };

  routeToBookings=()=>{
    this.props.history.push('/bookinghistory');
  }

  render() {
    console.log(this.props);
    return (
      <section className='back-color'>
        {!this.props.timerExpired && (
          <div>
            <div className='payment-head'>
              <div className='pay-layout'>
                <div className='box-1'>
                  <div className='payment-logo'></div>
                  <div className='travel-route'>
                    <div className='travel-day'>
                      <span>{this.props.fromLocation}</span>
                      <Icon type='arrow-right' className='pay-arrow' />
                      <span>{this.props.toLocation}</span>
                    </div>
                    <span>{this.props.departureDate}</span>
                  </div>
                </div>
                <div className='pay-timer'>
                  <SeatHoldTimer />
                </div>
              </div>
            </div>

            <div className='pay-section'>
              <PaymentCard
              routeToBookings={this.routeToBookings}
                amount={this.props.seats.reduce(
                  (payableAmount, seat) => (payableAmount += +seat.seatPrice),
                  0
                )}
              />
              <div className='bk-detail'>
                <BookingDetails />
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    departureDate: state.BusDetail.busDetail.filter(
      bus => bus.busNumber === state.BusDetail.selectedBus
    )[0].dateOfDeparture,
    toLocation: state.search.toLocation,
    fromLocation: state.search.fromLocation,
    seats: state.bookingsForm.selectedSeats,
    timerExpired: state.bookingData.holdTimerExpired
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

PaymentPage = connect(mapStateToProps, mapDispatchToProps)(PaymentPage);

export default withRouter(PaymentPage);
