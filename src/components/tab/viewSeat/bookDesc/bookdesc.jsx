import React, { Component } from 'react';
import './bookdesc.css';
import { Button } from 'antd';

class Bookdesc extends Component {
  render() {
    return (
      <div className="bk-desc">
        <div>
          <span className="bd-head-text">Boarding & Dropping</span>
          <div className="t-planed">
            <div>
              <div className="colBullet-css">
                <div className="circleBp"></div>
              </div>
              <div className="colBpDp-css">
                <span class="bpDpName-Lbl">Majnu Ka Tila potala ground</span>
                <span class="bpDpSummaryTm-Lbl">
                  21:30 <span class="color-red-next-day"></span>
                </span>
                <div class="selectedBpDpAdd-Lbl">
                  Majnu Ka Tilla ,Potala ground taxi stand near new police
                  chowki majnu ka tilla,
                </div>
              </div>
            </div>
            <div class="margin-top-n-8">
              <div class="colBullet-css">
                <div class="circleDp"></div>
              </div>
              <div class="colBpDp-css pR">
                <div class="bpDpNameTooltip">Chandigarh zirak pur flyo...</div>
                <span class="bpDpSummaryTm-Lbl">
                  02:55 <span class="color-red-next-day">(17 Jan)</span>
                </span>
                <div class="selectedBpDpAdd-Lbl">
                  Chandigarh zirak pur flyover{' '}
                </div>
              </div>
            </div>
          </div>
          <div className="seat-box">
            <span>Seat No.</span>
            <span>38</span>
          </div>
          <div>
            <div className="f-d">Fare Details</div>
            <div className="am-pri">
              <span className="f-disclimer">Amount</span>
              <span className="fp-text">INR 600</span>
              <div>Taxes will be calculated during payment</div>
            </div>
          </div>
          <Button type="primary" className="process-payment">PROCEED TO BOOK</Button>
        </div>
      </div>
    );
  }
}

export default Bookdesc;
