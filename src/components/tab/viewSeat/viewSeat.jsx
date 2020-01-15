import React, { Component } from 'react';
import './viewseat.css';

class ViewSeat extends Component {
  render() {
    return (
      <div className="seats-display-container">
        <div className="left-box">s</div>
        <div className="right-box">
          <h3 className="s-desc">SEAT LEGEND</h3>
          <ul className="seat-enq">
            <li className="st-txt">
              <span className="avl-box mr"></span>Available
            </li>
            <li className="st-txt">
              <span className="f-box mr"></span>Female
            </li>
            <li className="st-txt">
              <span className="unavl-box mr"></span>Unavailable
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default ViewSeat;
