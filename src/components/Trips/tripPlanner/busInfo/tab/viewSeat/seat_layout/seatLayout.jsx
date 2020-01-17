import React, { Component } from 'react';
import './seatlayout.css';
import BusSeat from './seats/busSeat';

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
              <div className="seat-checkbox">
                {this.props.seatInfo.map(ele => (
                  <BusSeat seats={ele} key={ele.id} togle={this.props.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeatLayout;
