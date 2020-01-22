import React, { Component } from 'react';
import './viewseat.css';
import SeatLayout from './seat_layout/seatLayout';
import SeatLegend from './seat_legend/seatLegend';
import TripDetail from './trip_detail/tripDetail';
import BookDesc from './bookDesc/bookdesc';
import { connect } from 'react-redux';
import { numOfSeats } from '../../../../../../actions/seatBooked/seatbooked';
import { tripPlanner } from '../../../../../../actions/tripPlanner/tripPlanner';
import { boardingPoints } from '../../../../../../actions/bookedBoardingDropping/bookedBoarding/bookedBoarding';
import { droppingPoints } from '../../../../../../actions/bookedBoardingDropping/bookedDropping/bookedDropping';

const mapStateToProps = state => {
  return {
    numOfSeat: state.seatBooked.numOfSeat,
    bookDescShow: state.tripPlan.toggle,
    selectedBp: state.bpdpReducer.selectedBp,
    selectedDp: state.bpdpReducer.selectedDp,
    bpDetail: state.bpdpReducer.bpDetail,
    dpDetail: state.bpdpReducer.dpDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusSeats: (checked, seatObj) =>
      dispatch(numOfSeats(checked, seatObj)),
    ToggleTripPlanner: value => dispatch(tripPlanner(value)),
    RequestBoardingPoints: event => dispatch(boardingPoints(event)),
    RequestDroppingPoints: event => dispatch(droppingPoints(event))
  };
};

class ViewSeat extends Component {
  handleBpPoint = e => {
    this.props.RequestBoardingPoints(e.target);
  };

  handleDpPoint = e => {
    this.props.RequestDroppingPoints(e.target);
  };

  handleSeat = (checked, seatObj) => {
    this.props.RequestBusSeats(checked, seatObj);
  };

  handleBookDesc = e => {
    this.props.ToggleTripPlanner(e.target.value);
  };

  handletripPlanner = e => {
    this.props.ToggleTripPlanner(e.target.value);
  };

  render() {
    return (
      <div className="seats-display-container">
        <div className="left-box">
          <SeatLayout
            idBus={this.props.idBus}
            selectedBus={this.props.selectedBus}
            value={this.handleSeat}
            seatInfo={this.props.seatInfo}
          />
        </div>
        <div className="right-box">
          {this.props.numOfSeat.length > 0 ? (
            this.props.bookDescShow === 'true' ? (
              <BookDesc
                tripPlan={this.handletripPlanner}
                numOfSeat={this.props.numOfSeat}
                bpDetail={this.props.bpDetail}
                dpDetail={this.props.dpDetail}
                journeyDate={this.props.journeyDate}
              />
            ) : (
              <TripDetail
                bdInfo={this.props.bdInfo}
                numOfSeat={this.props.numOfSeat}
                booking={this.handleBookDesc}
                boardPoint={this.handleBpPoint}
                droppingPoint={this.handleDpPoint}
                selectedBp={this.props.selectedBp}
                selectedDp={this.props.selectedDp}
                bpDetail={this.props.bpDetail}
                dpDetail={this.props.dpDetail}
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
