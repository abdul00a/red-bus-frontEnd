import React, { Component } from 'react';
import './boarding_dropping.css';

class Boarding_dropping extends Component {
  render() {
    return (
      <div className="BD-info">
        <div className="boarding">
          <div className="board-txt bd-box">
            <h2>BOARDING POINT</h2>
            <ul className="bpdplist">
              {this.props.bdpoint.map(ele => (
                <li key={ele.id}>
                  <span className="bd-time">
                    {ele.boardingTime.substr(11, 5)}
                  </span>
                  <span className="loc">{ele.landMark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="droping">
          <div className="drop-txt bd-box">
            <h2>DROPPING POINT</h2>
            <ul className="bpdplist">
              {this.props.bdpoint.map(ele => (
                <li key={ele.id}>
                  <span className="bd-time">
                    {ele.departureTime.substr(11, 5)}
                  </span>
                  <span className="loc">{ele.landMark}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Boarding_dropping;
