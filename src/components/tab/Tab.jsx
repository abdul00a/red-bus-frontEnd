import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tab.css';
import BD from './bording_dropping/boarding_dropping';
import Policy from './booking_policy/booking_policy';

const { TabPane } = Tabs;

class Tab extends Component {
  state = {
    s: ''
  };

  handle = e => {
    console.log(e);
    console.log(this.state.s);
    if (this.state.s === e) {
      this.setState({ s: '0' });
      // return;
    } else {
      this.setState({ s: e });
    }
  };
  render() {
    return (
      <Tabs activeKey={this.state.s} onTabClick={this.handle}>
        <TabPane tab="Bording & Droping" key="1">
          <BD bdpoint={this.props.bdpoint}></BD>
        </TabPane>
        <TabPane tab="Booking Policy" key="2">
          <Policy />
        </TabPane>
        <TabPane tab="Rest Stop()" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="View Seat" key="4" className="bttn-seat">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

export default Tab;
