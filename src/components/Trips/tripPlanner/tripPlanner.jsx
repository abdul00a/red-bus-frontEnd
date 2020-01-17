import React, { Component } from 'react';
import { connect } from 'react-redux';
import BusInfo from './busInfo/BusInfo';
import { reqBusDetail } from '../../../actions/businfo/businfo';

const mapStateToProps = state => {
  return {
    busDetail: state.BusDetail.filteredBuses
  };
};
const mapDispatchToProps = dispatch => {
  return {
    RequestBusDetail: (fromCityName, toCityName, departureDate) =>
      dispatch(reqBusDetail(fromCityName, toCityName, departureDate))
  };
};

class TripPlanner extends Component {
  componentDidMount() {
    this.props.RequestBusDetail(
      this.props.fromCityName,
      this.props.toCityName,
      this.props.departureDate
    );
  }
  componentDidUpdate = prevProps => {
    if (
      !(
        this.props.fromCityName === prevProps.fromCityName &&
        this.props.toCityName === prevProps.toCityName &&
        this.props.departureDate === prevProps.departureDate
      )
    ) {
      console.log(prevProps);
      this.props.RequestBusDetail(
        this.props.fromCityName,
        this.props.toCityName,
        this.props.departureDate
      );
    }
  };

  render() {
    return (
      <div>
        {this.props.busDetail.map(ele => (
          <BusInfo buses={ele} key={ele.busId} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanner);
