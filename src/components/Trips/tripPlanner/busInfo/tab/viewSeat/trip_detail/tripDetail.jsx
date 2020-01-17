import React, { Component } from 'react';
import './tripdetail.css';
import { Tabs, Radio, Button } from 'antd';
import BpList from './bp_list/bpList';
import DpList from './dp_list/dpList';
const { TabPane } = Tabs;

class TripDetail extends Component {
  state = {
    value: 1
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    });
  };
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
                          onChange={this.onChange}
                          value={this.state.value}
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
                        INR {this.props.bdInfo.startingPrice}.00
                      </span>
                    </div>
                  </TabPane>
                  {/* <div></div> */}
                  <TabPane tab="DROPPING POINT" key="2">
                    <div>
                      <ul className="bd-inner-list d-li">
                        <Radio.Group
                          onChange={this.onChange}
                          value={this.state.value}
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
                        INR {this.props.bdInfo.startingPrice}.00
                      </span>
                    </div>
                    <Button type="primary" className="d-li continue-payment">
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
