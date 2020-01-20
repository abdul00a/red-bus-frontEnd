import React, { Component } from 'react';
import './reststop.css';

class RestStop extends Component {
  render() {
    return (
      <div className="stop-point">
        <div className="sp-cont">
          <div className="sp-detail">
            {this.props.stopage.routePoint
              .filter(stop => stop.stoppingPoint === true)
              .map((ele, i) => (
                <div className="stopageList" key={ele.id}>
                  <div className="sp-txt txt">Stop {i + 1}</div>
                  <div className="sp-txt m-top">
                    {this.props.numStop === 1
                      ? 'This bus has only one rest stop'
                      : null}
                  </div>
                  <div className="sp-subdetail">
                    <div className="sp-tym">
                      Arrives at - {ele.boardingTime.substr(0, 5)} hrs
                    </div>
                    <div className="sp-tym sp-m">
                      Stops for{' '}
                      {(
                        +ele.departureTime.substr(3, 2) -
                        +ele.boardingTime.substr(3, 2)
                      ).toString()}{' '}
                      mins
                    </div>
                    <div className="landmark-point">{ele.landMark}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RestStop;
