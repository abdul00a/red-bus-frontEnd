import React, { Component } from 'react';
import './viewseat.css';
import SeatLayout from './seat_layout/seatLayout';
import SeatLegend from './seat_legend/seatLegend';
import TripDetail from './trip_detail/tripDetail';
import BookDesc from './bookDesc/bookdesc';

class ViewSeat extends Component {
  state = {
    val: false
  };

  handle = e => {
    this.setState({ val: e.target.checked });
  };
  render() {
    return (
      <div className="seats-display-container">
        <div className="left-box">
          <SeatLayout value={this.handle} />
        </div>
        <div className="right-box">
          {this.state.val ? (
            <BookDesc /> && <TripDetail bdInfo={this.props.bdInfo} />
          ) : (
            <SeatLegend />
          )}
        </div>
      </div>
    );
  }
}
export default ViewSeat;
