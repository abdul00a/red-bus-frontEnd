import React, { Component } from 'react';
import './busseat.css';

class BusSeat extends Component {
  render() {
    if (this.props.seats.seatType === 'Sitting') {
      return (
        <div className="seater-box">
          <label className="seater">
            <input
              type="checkbox"
              onChange={this.props.toggle}
              value={this.props.seats.seatName}
            />
            <span className="checkmark" style={{}}></span>
          </label>
        </div>
      );
    } else if (this.props.seats.seatType === 'Sleeper') {
      return (
        <div className="sleeper-box">
          <label className="sleeper">
            <input
              type="checkbox"
              onChange={this.props.toggle}
              value={this.props.seats.seatName}
              // disabled={true}
            />
            <span className="checkmark2"></span>
          </label>
        </div>
      );
    }
  }
}

export default BusSeat;
