import React, { Component } from 'react';
import './businfo.css';
import Tab from './tab/Tab';
import BusDetailHeader from './busDetailHeader/busDetailHeader';
import { Row, Col, Icon } from 'antd';

const rating4 = {
  backgroundColor: '#4ab87c'
};
const rating3 = {
  backgroundColor: '#EBAF3C'
};
const rating1_2 = {
  backgroundColor: '#F04747'
};

class BusInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <BusDetailHeader />
        <li className="bus-detail">
          <div>
            <div className="bus-box">
              <Row className="bus-row">
                <Col span={6} className="col-one">
                  <div className="bus-name b-color">
                    <span>{this.props.buses.busName}</span>
                  </div>
                  <div className="bus-type">
                    <span className="txt-color">{`${
                      this.props.buses.busType
                    } / ${
                      this.props.buses.sleeperAvailable
                        ? 'Sleeper / Seater'
                        : 'Seater'
                    }`}</span>
                  </div>
                </Col>
                <Col span={2} className="col-two">
                  <div className="departure b-color f-size">
                    <span>{this.props.buses.departure.substr(0, 5)}</span>
                  </div>
                  <div className="source">
                    <span className="txt-color">
                      {this.props.buses.routeTable.startingPoint}
                    </span>
                  </div>
                </Col>
                <Col span={4} className="col-three">
                  <div className="duration">
                    <span className="txt-color">
                      {this.props.buses.duration}
                    </span>
                  </div>
                </Col>
                <Col span={2} className="col-four">
                  <div className="arival b-color f-size">
                    <span>{this.props.buses.arrival.substr(0, 5)}</span>
                  </div>
                  <div className="arival-date">
                    <span>{this.props.buses.dateOfDeparture.substr(5, 6)}</span>
                  </div>
                  <div className="dest">
                    <span className="txt-color">
                      {this.props.buses.routeTable.endingPoint}
                    </span>
                  </div>
                </Col>
                <Col span={2} className="col-five">
                  <div className="">
                    <span
                      className="rating-text"
                      style={
                        'four' === 'four'
                          ? rating4
                          : '3' === '3'
                          ? rating3
                          : rating1_2
                      }
                    >
                      <Icon type="star" className="star" /> 4.2
                    </span>
                  </div>
                </Col>
                <Col span={4} className="col-six">
                  <div className="price">
                    INR
                    <span className="b-color f-size">
                      {this.props.buses.startingPrice}
                    </span>
                  </div>
                </Col>
                <Col span={4} className="col-seven">
                  <div className="total-seat seats">
                    <span className="n-seat">
                      15
                    </span>
                    <span className="seat-txt">Seats available</span>
                  </div>
                  <div className="win-seat seats">
                    <span className="n-seat">
                      {
                        this.props.buses.seatFareList.filter(
                          e => e.isWindowSeat === 'Yes'
                        ).length
                      }
                    </span>
                    <span className="seat-txt">Window</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="bottom-div">
            <Tab
              idBus={this.props.buses.busNumber}
              keyVal={this.props.buses.key}
              bdpoint={this.props.buses.routeTable}
              seatInfo={this.props.buses.seatFareList}
              journeyDate={this.props.buses.dateOfDeparture}
            />
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default BusInfo;
