import React, { Component } from 'react';
import './viewseat.css';
import SeatLayout from './seat_layout/seatLayout';
import SeatLegend from './seat_legend/seatLegend';
import TripDetail from './trip_detail/tripDetail';
import BookDesc from './bookDesc/bookdesc';
import { connect } from 'react-redux';
import { numOfSeats } from '../../../../../../actions/seatBooked/seatbooked';
import { tripPlanner } from '../../../../../../actions/tripPlanner/tripPlanner';

const mapStateToProps = state => {
  return {
    numOfSeat: state.seatBooked.numOfSeat,
    bookDescShow: state.tripPlan.toggle
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusSeats: (checked, seatObj) =>
      dispatch(numOfSeats(checked, seatObj)),
    ToggleTripPlanner: value => dispatch(tripPlanner(value))
    // ToggleBookDesc: value => dispatch(tr)
  };
};

class ViewSeat extends Component {
  handleSeat = (checked, seatObj) => {
    this.props.RequestBusSeats(checked, seatObj);
  };

  handleBookDesc = e => {
    // console.log(e.target);
    this.props.ToggleTripPlanner(e.target.value);
  };

  handletripPlanner = e => {
    this.props.ToggleTripPlanner(e.target.value);
    // console.log(e.target.value);
  };

  render() {
    // console.log(this.props.numOfSeat);
    return (
      <div className="seats-display-container">
        <div className="left-box">
          <SeatLayout value={this.handleSeat} seatInfo={this.props.seatInfo} />
        </div>
        <div className="right-box">
          {this.props.numOfSeat.length > 0 ? (
            this.props.bookDescShow === 'true' ? (
              <BookDesc tripPlan={this.handletripPlanner} />
            ) : (
              <TripDetail
                bdInfo={this.props.bdInfo}
                numOfSeat={this.props.numOfSeat}
                booking={this.handleBookDesc}
              />
            )
          ) : (
            <SeatLegend />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSeat);
