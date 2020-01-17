import React, { Component } from 'react';
import './reststop.css';

class RestStop extends Component {
  render() {
    return (
      <div className="stop-point">
        <div className="sp-cont">
          <div className="sp-detail">
            <div className="sp-txt txt">Stop 1</div>
            <div className="sp-txt m-top">This bus has only one rest stop</div>
            <div className="sp-subdetail">
              <div className="sp-tym">Arrives at - 11:28 PM</div>
              <div className="sp-tym sp-m">Stops for 32 mins</div>
              <div className="road">
                Grand Trunk Road;old NH1, Bari, Sonipat
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default RestStop;
