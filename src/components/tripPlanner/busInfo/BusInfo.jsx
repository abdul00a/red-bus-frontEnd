import React, { Component } from 'react';
import './businfo.css';
import { connect } from 'react-redux';
import { reqBusDetail } from '../../../actions/businfo/businfo';
import Tab from './tab/Tab';

const mapStateToProps = state => {
  console.log(state);
  return {
    busDetail: state.BusDetail.busDetail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusDetail: () => dispatch(reqBusDetail())
  };
};

class BusInfo extends Component {
  componentDidMount() {
    // this.props.RequestBusDetail();
  }

  render() {
    // console.log(this.props.buses);
    return (
      <div>
        <li className="bus-detail">
          <div>
            <div className="bus-box">
              <div className="col-one">
                <div className="bus-name b-color">
                  <span>{this.props.buses.busName}</span>
                </div>
                <div className="bus-type">
                  <span className="txt-color">{this.props.buses.busType}</span>
                </div>
              </div>
              <div className="col-two">
                <div className="departure b-color f-size">
                  <span>{this.props.buses.departure}</span>
                </div>
                <div className="source">
                  <span className="txt-color">
                    {this.props.buses.routeTable.startingPoint}
                  </span>
                </div>
              </div>
              <div className="col-three">
                <div className="duration">
                  <span className="txt-color">{this.props.buses.duration}</span>
                </div>
              </div>
              <div className="col-four">
                <div className="arival b-color f-size">
                  <span>
                    {this.props.buses.arrival}
                    {/* {this.props.buses.length !== 0 &&
                      this.props.buses[0].arrival.substr(11, 5)} */}
                  </span>
                </div>
                <div className="arival-date">
                  <span>{this.props.buses.busNumber}</span>
                </div>
                <div className="dest">
                  <span className="txt-color">
                    {this.props.buses.routeTable.endingPoint}
                  </span>
                </div>
              </div>
              <div className="col-five">
                <div className="price">
                  INR
                  <span className="b-color f-size">
                    {this.props.buses.startingPrice}
                  </span>
                </div>
              </div>
              <div className="col-six">
                <div className="total-seat seats">
                  <span className="n-seat">
                    {
                      this.props.buses.seatFareList.filter(
                        e => e.isBooked !== 'False'
                      ).length
                    }
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
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <Tab
              idBus={this.props.buses.busNumber}
              keyVal={this.props.buses.key}
              bdpoint={this.props.buses.routeTable}
            />
          </div>
        </li>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusInfo);
