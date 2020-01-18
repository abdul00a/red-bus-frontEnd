import React, { Component } from 'react';
import './viewseat.css';
import SeatLayout from './seat_layout/seatLayout';
import SeatLegend from './seat_legend/seatLegend';
import TripDetail from './trip_detail/tripDetail';
import BookDesc from './bookDesc/bookdesc';
import { connect } from 'react-redux';
import { numOfSeats } from '../../../../../../actions/seatBooked/seatbooked';

const mapStateToProps = state => {
  return {
    numOfSeat: state.seatBooked.numOfSeat
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusSeats: event => dispatch(numOfSeats(event))
  };
};

class ViewSeat extends Component {
  handle = e => {
    this.props.RequestBusSeats(e.target);
  };

  render() {
    console.log(this.props.numOfSeat);
    return (
      <div className="seats-display-container">
        <div className="left-box">
          <SeatLayout value={this.handle} seatInfo={this.props.seatInfo} />
        </div>
        <div className="right-box">
          {this.props.numOfSeat.length > 0 ? (
            <BookDesc /> && <TripDetail bdInfo={this.props.bdInfo} />
          ) : (
            <SeatLegend />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSeat);
