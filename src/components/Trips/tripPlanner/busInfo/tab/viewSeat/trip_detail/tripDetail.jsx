import React, { Component } from 'react';
import './tripdetail.css';
import { Tabs, Radio, Button } from 'antd';
import BpList from './bp_list/bpList';
import DpList from './dp_list/dpList';

const { TabPane } = Tabs;

class TripDetail extends Component {

  render() {
    return (
      <div>
        <div>
          <div className="trip-layout">
            <div>
              <div className="tabs">
                <Tabs defaultActiveKey="1" className="lastTab">
                  <TabPane tab="BOARDING POINT" key="1">
                    <div>
                      <ul className="bd-inner-list">
                        <Radio.Group
                          onChange={this.props.boardPoint}
                          value={this.props.selectedBp}
                        >
                          {this.props.bdInfo.routePoint
                            .filter(ele => ele.pointType === 'Boarding')
                            .map((ele, i) => (
                              <BpList bdInfo={ele} key={ele.id} index={i} />
                            ))}
                        </Radio.Group>
                      </ul>
                    </div>
                    <div className="fare-summary">
                      <span className="fare-lbl">Amount</span>
                      <span className="fareDisclaimer">
                        ( Taxes will be calculated during payment )
                      </span>
                      <span className="fare-value">
                        INR{' '}
                        {this.props.numOfSeat.reduce((acc, cur) => {
                          acc = acc + +cur.seatPrice;
                          return acc;
                        }, 0)}
                        .00
                      </span>
                    </div>
                  </TabPane>
                  <TabPane tab="DROPPING POINT" key="2">
                    <div>
                      <ul className="bd-inner-list d-li">
                        <Radio.Group
                          onChange={this.props.droppingPoint}
                          value={this.props.selectedDp}
                        >
                          {this.props.bdInfo.routePoint
                            .filter(ele => ele.pointType !== 'Boarding')
                            .map((ele, i) => (
                              <DpList bdInfo={ele} key={ele.id} index={i} />
                            ))}
                        </Radio.Group>
                      </ul>
                    </div>
                    <div className="fare-summary d-li">
                      <span className="fare-lbl">Amount</span>
                      <span className="fareDisclaimer">
                        ( Taxes will be calculated during payment )
                      </span>
                      <span className="fare-value">
                        INR{' '}
                        {this.props.numOfSeat.reduce((acc, cur) => {
                          acc = acc + +cur.seatPrice;
                          return acc;
                        }, 0)}
                        .00
                      </span>
                    </div>
                    <Button
                      type="primary"
                      className="d-li continue-payment"
                      disabled={
                        Object.entries(this.props.bpDetail).length === 0 ||
                        Object.entries(this.props.dpDetail).length === 0
                          ? true
                          : false
                      }
                      onClick={this.props.booking}
                      value={true}
                    >
                      CONTINUE
                    </Button>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripDetail;
// export default connect(mapStateToProps, mapDispatchToProps)(TripDetail);
