import React, { Component } from 'react';
import './bookdesc.css';
import { Button } from 'antd';

class Bookdesc extends Component {
  render() {
    return (
      <div className="bk-desc">
        <div>
          <div className="bd-book-desc-head">
            <span className="bd-head-text">Boarding & Dropping</span>
            <Button onClick={this.props.tripPlan} value="false">
              <span className="change-bdpoint">CHANGE</span>
            </Button>
          </div>
          <div className="t-planed">
            <div>
              <div className="colBullet-css">
                <div className="circleBp"></div>
              </div>
              <div className="colBpDp-css">
                <span className="bpDpName-Lbl">
                  {this.props.bpDetail.bppoint}
                </span>
                <span className="bpDpSummaryTm-Lbl">
                  {this.props.bpDetail.bptime}{' '}
                  <span className="color-red-next-day"></span>
                </span>
                <div className="selectedBpDpAdd-Lbl">
                  {this.props.bpDetail.bplandmark}
                </div>
              </div>
            </div>
            <div className="margin-top-n-8">
              <div className="colBullet-css">
                <div className="circleDp"></div>
              </div>
              <div className="colBpDp-css pR">
                <span className="bpDpNameTooltip">
                  {this.props.dpDetail.dppoint}
                </span>
                <span className="bpDpSummaryTm-Lbl">
                  {this.props.dpDetail.dptime}{' '}
                  <span className="color-red-next-day">
                    ({this.props.journeyDate.substr(5, 6)})
                  </span>
                </span>
                <div className="selectedBpDpAdd-Lbl">
                  {this.props.dpDetail.dplandmark}
                </div>
              </div>
            </div>
          </div>
          <div className="seat-box">
            <span>Seat No.</span>
            <span>
              {this.props.numOfSeat.map(
                (ele, index) => (index > 0 ? ', ' : ' ') + ele.id
              )}
            </span>
          </div>
          <div>
            <div className="f-d">Fare Details</div>
            <div className="am-pri">
              <span className="f-disclimer">Amount</span>
              <span className="fp-text">
                INR{' '}
                {this.props.numOfSeat.reduce((acc, cur) => {
                  acc = acc + +cur.seatPrice;
                  return acc;
                }, 0)}
                .00
              </span>
              <div>Taxes will be calculated during payment</div>
            </div>
          </div>
          <Button type="primary" className="process-payment">
            PROCEED TO BOOK
          </Button>
        </div>
      </div>
    );
  }
}

export default Bookdesc;
