import React, { Component } from 'react';
import './seatlayout.css';
import BusSeat from './seats/busSeat';

class SeatLayout extends Component {
  render() {
    // console.log(this.props.seatInfo)
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
                {this.props.idBus === this.props.selectedBus
                  ? this.props.seatInfo.map(ele => (
                      <BusSeat
                        seats={ele}
                        key={ele.id}
                        toggle={this.props.value}
                      />
                    ))
                  : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeatLayout;
