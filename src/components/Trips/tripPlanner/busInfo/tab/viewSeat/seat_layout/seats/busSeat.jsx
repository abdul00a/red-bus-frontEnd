import React, { Component } from 'react';
import './busseat.css';

const style = {
  backgroundColor: '#F1A9A0'
};

class BusSeat extends Component {
  render() {
    if (this.props.seats.seatType === 'Sitting') {
      return (
        <div className="seater-box">
          <label className="seater">
            <input
              type="checkbox"
              onChange={event =>
                this.props.toggle(event.target.checked, this.props.seats)
              }
              disabled={this.props.seats.isBooked !== 'False' ? true : false}
            />
            <span
              className="checkmark"
              style={this.props.seats.bookingGender === 'Female' ? style : {}}
            ></span>
          </label>
        </div>
      );
    } else if (this.props.seats.seatType === 'Sleeper') {
      return (
        <div className="sleeper-box">
          <label className="sleeper">
            <input
              type="checkbox"
              onChange={event =>
                this.props.toggle(event.target.checked, this.props.seats)
              }
              disabled={this.props.seats.isBooked !== 'False' ? true : false}
            />
            <span
              className="checkmark2"
              style={this.props.seats.bookingGender === 'Female' ? style : {}}
            ></span>
          </label>
        </div>
      );
    }
  }
}

export default BusSeat;
