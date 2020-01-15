import React, { Component } from 'react';
import './businfo.css';
import { connect } from 'react-redux';
import { reqBusDetail } from '../../actions/businfo/businfo';
import Tab from '../tab/Tab';

const mapStateToProps = state => {
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
    this.props.RequestBusDetail();
    // fetch('https://radbus1001.herokuapp.com/city')
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <li className="bus-detail">
          <div>
            <div className="bus-box">
              <div className="col-one">
                <div className="bus-name b-color">
                  <span>
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].busName}
                  </span>
                </div>
                <div className="bus-type">
                  <span className="txt-color">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].busType}
                  </span>
                </div>
              </div>
              <div className="col-two">
                <div className="departure b-color f-size">
                  <span>
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].departure.substr(11, 5)}
                  </span>
                </div>
                <div className="source">
                  <span className="txt-color">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].routeTable.startingPoint}
                  </span>
                </div>
              </div>
              <div className="col-three">
                <div className="duration">
                  <span className="txt-color">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].duration}
                  </span>
                </div>
              </div>
              <div className="col-four">
                <div className="arival b-color f-size">
                  <span>
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].arrival.substr(11, 5)}
                  </span>
                </div>
                <div className="arival-date">
                  <span>
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].arrival.substr(0, 10)}
                  </span>
                </div>
                <div className="dest">
                  <span className="txt-color">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].routeTable.endingPoint}
                  </span>
                </div>
              </div>
              <div className="col-five">
                <div className="price">
                  INR
                  <span className="b-color f-size">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].startingPrice}
                  </span>
                </div>
              </div>
              <div className="col-six">
                <div className="total-seat seats">
                  <span className="n-seat">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].seatFareList.filter(
                        e => e.isBooked === 'Yes'
                      ).length}
                  </span>
                  <span className="seat-txt">Seats available</span>
                </div>
                <div className="win-seat seats">
                  <span className="n-seat">
                    {this.props.busDetail.length !== 0 &&
                      this.props.busDetail[0].seatFareList.filter(
                        e => e.isWindowSeat === 'Yes'
                      ).length}
                  </span>
                  <span className="seat-txt">Window</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-div">
            <Tab
              idBus={
                this.props.busDetail.length !== 0 && this.props.busDetail[0].busNumber
              }
              keyVal={
                this.props.busDetail.length !== 0 && this.props.busDetail[0].key
              }
              bdpoint={
                this.props.busDetail.length === 0
                  ? []
                  : this.props.busDetail[0].routeTable.routePoint
              }
            />
          </div>
        </li>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusInfo);
