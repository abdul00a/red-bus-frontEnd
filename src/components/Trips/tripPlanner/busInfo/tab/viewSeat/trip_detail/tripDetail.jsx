import React, { Component } from 'react';
import './tripdetail.css';
import { Tabs, Radio, Button } from 'antd';
import BpList from './bp_list/bpList';
import DpList from './dp_list/dpList';
import { connect } from 'react-redux';
import { boardingPoints } from '../../../../../../../actions/bookedBoardingDropping/bookedBoarding/bookedBoarding';
import { droppingPoints } from '../../../../../../../actions/bookedBoardingDropping/bookedDropping/bookedDropping';

const { TabPane } = Tabs;

const mapStateToProps = state => {
  return {
    selectedBp: state.bpdpReducer.selectedBp,
    selectedDp: state.bpdpReducer.selectedDp,
    bpDetail: state.bpdpReducer.bpDetail,
    dpDetail: state.bpdpReducer.dpDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBoardingPoints: event => dispatch(boardingPoints(event)),
    RequestDroppingPoints: event => dispatch(droppingPoints(event))
  };
};

class TripDetail extends Component {
  handleBpPoint = e => {
    this.props.RequestBoardingPoints(e.target);
  };

  handleDpPoint = e => {
    this.props.RequestDroppingPoints(e.target);
  };

  render() {
    console.log(this.props.bpDetail);
    console.log(this.props.dpDetail);
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
                          onChange={this.handleBpPoint}
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
                        INR {this.props.bdInfo.startingPrice}.00
                      </span>
                    </div>
                  </TabPane>
                  <TabPane tab="DROPPING POINT" key="2">
                    <div>
                      <ul className="bd-inner-list d-li">
                        <Radio.Group
                          onChange={this.handleDpPoint}
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

export default connect(mapStateToProps, mapDispatchToProps)(TripDetail);
