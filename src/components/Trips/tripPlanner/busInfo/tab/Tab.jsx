import React, { Component } from 'react';
import { Tabs } from 'antd';
import './tab.css';
import BD from './bording_dropping/boarding_dropping';
import Policy from './booking_policy/booking_policy';
import { connect } from 'react-redux';
import { tabToggle, closeTab } from '../../../../../actions/tab/toggle';
import RestStop from './rest_stop/restStop';
import ViewSeat from './viewSeat/viewSeat';
import { resetNumOfSeats } from '../../../../../actions/seatBooked/seatbooked';
import { resetTripPlanner } from '../../../../../actions/tripPlanner/tripPlanner';
import { resetBoardingPoints } from '../../../../../actions/bookedBoardingDropping/bookedBoarding/bookedBoarding';
import { resetDroppingPoints } from '../../../../../actions/bookedBoardingDropping/bookedDropping/bookedDropping';

const { TabPane } = Tabs;

const mapStateToProps = state => {
  return {
    selectedBus: state.BusDetail.selectedBus
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestingKey: (keyVal, busNum) => dispatch(tabToggle(keyVal, busNum)),
    closeTab: busNum => dispatch(closeTab(busNum)),
    ResetBusSeats: () => dispatch(resetNumOfSeats()),
    ResetToggleTripPlanner: () => dispatch(resetTripPlanner()),
    ResetBoardingPoints: () => dispatch(resetBoardingPoints()),
    ResetDroppingPoints: () => dispatch(resetDroppingPoints())
  };
};

class Tab extends Component {  
  handleTab = e => {
    if (this.props.idBus !== this.props.selectedBus) {
      this.props.closeTab(this.props.selectedBus);
      this.props.ResetBoardingPoints();
      this.props.ResetBusSeats();
      this.props.ResetToggleTripPlanner();
      this.props.ResetDroppingPoints();
    }
    this.props.RequestingKey(e, this.props.idBus);
  };

  render() {
    const numStop = this.props.bdpoint.routePoint.filter(
      stop => stop.stoppingPoint === true
    ).length;
    return (
      <Tabs activeKey={this.props.keyVal || '0'} onTabClick={this.handleTab}>
        <TabPane tab="Boarding & Dropping" key="1">
          <BD bdpoint={this.props.bdpoint}></BD>
        </TabPane>
        <TabPane tab="Booking Policy" key="2">
          <Policy />
        </TabPane>
        <TabPane tab={'Rest Stop (' + numStop + ')'} key="3">
          <RestStop stopage={this.props.bdpoint} numStop={numStop} />
        </TabPane>
        <TabPane tab="View Seats" key="4" className="bttn-seat">
          <ViewSeat
            bdInfo={this.props.bdpoint}
            seatInfo={this.props.seatInfo}
            journeyDate={this.props.journeyDate}
            selectedBus={this.props.selectedBus}
            idBus={this.props.idBus}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
