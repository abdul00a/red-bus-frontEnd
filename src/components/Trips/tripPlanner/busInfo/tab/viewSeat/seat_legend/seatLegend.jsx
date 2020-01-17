import React from 'react';
import './seatlgend.css';

const seatLegend = () => {
  return (
    <div>
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
  );
};

export default seatLegend;
