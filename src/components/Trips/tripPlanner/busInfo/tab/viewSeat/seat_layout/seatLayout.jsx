import React, { Component } from 'react';
import './seatlayout.css';

class SeatLayout extends Component {
  render() {
    return (
      <div className="sub-left">
        <div className="seat-lbl">
          <span className="seatmsg">
            Click on an Available seat to proceed with your transaction.
          </span>
        </div>
        <div className="seat-layt">
          <div className="sub-layt">
            <div className="bookseat">
              <input type="checkbox" onChange={this.props.value}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeatLayout;
