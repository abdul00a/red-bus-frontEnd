import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tab.css';
import BD from './bording_dropping/boarding_dropping';
import Policy from './booking_policy/booking_policy';
import { connect } from 'react-redux';
import { tabToggle } from '../../../../actions/tab/toggle';
import RestStop from './rest_stop/restStop';
import ViewSeat from './viewSeat/viewSeat';

const { TabPane } = Tabs;

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    RequestingKey: (keyVal, busNum) => dispatch(tabToggle(keyVal, busNum))
  };
};

class Tab extends Component {
  handleTab = e => {
    this.props.RequestingKey(e, this.props.idBus);
  };

  render() {
    const numStop = this.props.bdpoint.routePoint.filter(
      stop => stop.stoppingPoint === true
    ).length;
    return (
      <Tabs activeKey={this.props.keyVal || '0'} onTabClick={this.handleTab}>
        <TabPane tab="Bording & Droping" key="1">
          <BD bdpoint={this.props.bdpoint}></BD>
        </TabPane>
        <TabPane tab="Booking Policy" key="2">
          <Policy />
        </TabPane>
        <TabPane tab={'Rest Stop(' + numStop + ')'} key="3">
          <RestStop stopage={this.props.bdpoint} numStop={numStop} />
        </TabPane>
        <TabPane tab="View Seat" key="4" className="bttn-seat">
          <ViewSeat bdInfo={this.props.bdpoint} />
        </TabPane>
      </Tabs>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
